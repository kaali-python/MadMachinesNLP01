#!/usr/bin/env python
#-*- coding: utf-8 -*-
import sys
import os
import time
import inspect
import itertools
import numpy as np
from sklearn.externals import joblib





#Changing path to the main directory where all the modules are lying
directory = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.join(directory))
from MainAlgorithms import InMemoryMainClassifier, timeit, cd, path_parent_dir, path_trainers_file, path_in_memory_classifiers




class TagClassifier(InMemoryMainClassifier):
	def __init__(self):
		tag_list = ["food", "ambience", "cost", "service", "overall", "null"]
		InMemoryMainClassifier.__init__(self, tag_list)  	

	@timeit
	def loading_all_classifiers_in_memory(self):
		with cd(path_in_memory_classifiers):
			for class_method in self.cls_methods_for_algortihms:
				classifier = eval("{0}.{1}()".format("self", class_method))
				joblib_name_for_classifier = "{0}_tag.lib".format(class_method)
				print classifier, joblib_name_for_classifier
	
				joblib.dump(classifier, joblib_name_for_classifier) 

if __name__ == "__main__":
	instance = TagClassifier()
	instance.loading_all_classifiers_in_memory()
