#!/usr/bin/env python
#-*- coding: utf-8 -*-
"""
Author: kaali
Dated: 15 April, 2015
Purpose:
    This file has been written to list all the sub routines that might be helpful in generating result for 
    get_word_cloud api

"""
import time
import os
from sys import path
import itertools

parent_dir_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path.append(parent_dir_path)

from Text_Processing.Sentence_Tokenization.Sentence_Tokenization_Classes import SentenceTokenizationOnRegexOnInterjections
from Text_Processing.NounPhrases.noun_phrases import NounPhrases
from Text_Processing.Word_Tokenization.word_tokenizer import WordTokenize
from Text_Processing.PosTaggers.pos_tagging import PosTaggers
from Text_Processing.MainAlgorithms.paths import path_parent_dir, path_in_memory_classifiers
from Text_Processing.NER.ner import NERs
from Text_Processing.colored_print import bcolors
from Text_Processing.MainAlgorithms.Algorithms_Helpers import get_all_algorithms_result
from Text_Processing.MainAlgorithms.In_Memory_Main_Classification import timeit, cd
from encoding_helpers import SolveEncoding
from heuristic_clustering import HeuristicClustering

    
from sklearn.externals import joblib
from collections import Counter


class ServiceWordCloudApiHelper:
        def __init__(self, **kwargs):
                allowed_kwargs = ['reviews', 'eatery_name', 'category', 'total_noun_phrases', 'word_tokenization_algorithm_name', 
                        'noun_phrases_algorithm_name', 'pos_tagging_algorithm_name', 'tag_analysis_algorithm_name', 
                        'sentiment_analysis_algorithm_name', 'np_clustering_algorithm_name', 'ner_algorithm_name', 'with_celery']
                
                self.__dict__.update(kwargs)
                for kwarg in allowed_kwargs:
                        assert eval("self.{0}".format(kwarg)) != None
                
                self.sent_tokenizer = SentenceTokenizationOnRegexOnInterjections()
                self.tag_classifier = joblib.load("{0}/{1}".format(path_in_memory_classifiers, self.tag_analysis_algorithm_name))              
                
                self.service_classifier = joblib.load("{0}/{1}".format(path_in_memory_classifiers, 
                                                        "svm_linear_kernel_classifier_service.lib"))
                self.sentiment_classifier = joblib.load("{0}/{1}".format(path_in_memory_classifiers,\
                                                        "svm_linear_kernel_classifier_sentiment_new_dataset.lib"))              
                
                
                self.sentences = list()
                self.clustered_nps = list()
        
        def print_execution(func):
                "This decorator dumps out the arguments passed to a function before calling it"
                argnames = func.func_code.co_varnames[:func.func_code.co_argcount]
                fname = func.func_name
                def wrapper(*args,**kwargs):
                        start_time = time.time()
                        print "{0} Now {1} have started executing {2}".format(bcolors.OKBLUE, func.func_name, bcolors.RESET)
                        result = func(*args, **kwargs)
                        print "{0} Total time taken by {1} for execution is --<<{2}>>--{3}\n".format(bcolors.OKGREEN, func.func_name, 
                                (time.time() - start_time), bcolors.RESET)
                        
                        return result
                return wrapper


        
        def get_args(self):
                print self.__dict__
        
        
        def sent_tokenize_reviews(self):
                sentences = list()
                for review in self.reviews:
                        for __sentence in self.sent_tokenizer.tokenize(review[1]):
                                        __sentence = SolveEncoding.preserve_ascii(__sentence)
                                        sentences.append([review[0], __sentence])

                self.review_ids, self.sentences = zip(*sentences)
                return 
                        
        @print_execution
        def predict_tags(self):
                self.predicted_tags = self.tag_classifier.predict(self.sentences)
                return self.predicted_tags


        @print_execution
        def predict_sentiment(self):
                self.predicted_sentiment = self.sentiment_classifier.predict(self.c_sentences)
                return 

        @print_execution
        def predict_sub_tags(self):
                print "Going to predict ambience sub tags"
                self.service_tags = self.service_classifier.predict(self.c_sentences)
                return 


        @print_execution
        def make_sentences_dict(self):
                """
                Makes sentences_dict from self.c_sentences, self.predicted_sentiment, self.ambience_tags
                of the form 
                { "ambience-null": {"sentences": [(__sent, __sentiment), (__sent, __sentiment), .. ], 
                    "similar": None, 
                    "sentiment": ["positive", "negative", "super-positive", ]}, 
                    
                "decor": { }, }

                """
                self.sentences_dict = dict()
                for __sent, __sentiment, __category in zip(self.c_sentences, self.predicted_sentiment, self.service_tags):
                        if not self.sentences_dict.has_key(__category):
                                self.sentences_dict.update({
                                        __category: {"sentences": [(__sent, __sentiment)],
                                                        "similar": None,
                                                        "sentiment": [__sentiment]
                                                }})

                        else:
                                sentiment = self.sentences_dict.get(__category).get("sentiment")
                                sentiment.append(__sentiment)

                                sentences = self.sentences_dict.get(__category).get("sentences")
                                sentences.append((__sent, __sentiment))
                                self.sentences_dict.update({
                                            __category: {"sentences": sentences,
                                                        "similar": None,
                                                        "sentiment": sentiment,
                                                }})
                return 
                    

        @print_execution
        def normalize_sentiments(self):
                for __category in self.sentences_dict.keys():
                        normalized_sentiments = list()
                        for __e in self.sentences_dict[__category]["sentiment"]:
                                if __e.startswith("super"):
                                        normalized_sentiments.append(__e.split('-')[1])
                                        normalized_sentiments.append(__e.split('-')[1])
                                else:
                                        normalized_sentiments.append(__e)
                                
                                
                        sentiments = Counter(normalized_sentiments)
                        print __category
                        print sentiments, "\n\n"
                        self.clustered_nps.append({
                                        "name": __category,
                                        "sentences": self.sentences_dict[__category]["sentences"],
                                        "similar": [],
                                        "positive": (0, sentiments.get("positive"))[sentiments.get("positive") != None],
                                        "negative": (0, sentiments.get("negative"))[sentiments.get("negative") != None],
                                        "neutral": (0, sentiments.get("neutral"))[sentiments.get("neutral") != None],
                                        })


        @print_execution
        def convert_sentences(self, __object):
                return {"sentence": __object[0],
                        "sentiment": __object[1]}


        @print_execution
        def result_lambda(self, __dict):
                __dict.update({"sentences": map(self.convert_sentences, __dict.get("sentences"))})
                try:
                        i_likeness = "%.2f"%(float(__dict.get("positive")*100)/( __dict.get("negative") + __dict.get("positive")))
                except ZeroDivisionError:
                        i_likeness = '100'

                o_likeness =  "%.2f"%(float(__dict.get("positive")*self.total_positive + __dict.get("negative")*self.total_negative)/self.total)
                __dict.update({"i_likeness": i_likeness})
                __dict.update({"o_likeness": o_likeness})


        @print_execution
        def make_result(self):
                self.total_positive = sum([__dict.get("positive") for __dict in  self.clustered_nps])
                self.total_negative = sum([__dict.get("negative") for __dict in  self.clustered_nps])
                self.total = self.total_positive + self.total_negative

                map(self.result_lambda, self.clustered_nps)
                final_result = sorted(self.clustered_nps, reverse= True,
                                            key=lambda x: x.get("negative")+ x.get("positive") + x.get("neutral"))

                return final_result

        @print_execution
        def run(self):
                self.sent_tokenize_reviews() #Tokenize reviews, makes self.reviews_ids, self.sentences
                self.predict_tags()          #Predict tags, makes self.predict_tags
                        
                self.filtered_list = [e for e in zip(self.review_ids, self.sentences, self.predicted_tags) 
                                                                            if e[2] == self.category]
                self.c_review_ids, self.c_sentences, self.c_tags = zip(*self.filtered_list)
                self.predict_sentiment()
                self.predict_sub_tags()
                self.make_sentences_dict()
                self.normalize_sentiments()
                self.result = self.make_result()


