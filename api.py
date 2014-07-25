#!/usr/bin/env python
#-*- coding: utf-8 -*-


from flask import Flask
from flask import request, jsonify
from flask.ext import restful
from flask.ext.restful import reqparse
from flask import make_response, request, current_app
from functools import update_wrapper
from flask import jsonify
import hashlib
import subprocess
import shutil
import json
import os
from bson.json_util import dumps
from Text_Processing import ProcessingWithBlob, PosTags, Classifier
import time
from datetime import timedelta



app = Flask(__name__)



def crossdomain(origin=None, methods=None, headers=None, max_age=21600, attach_to_all=True, automatic_options=True):
	if methods is not None:
		methods = ', '.join(sorted(x.upper() for x in methods))
        
	if headers is not None and not isinstance(headers, basestring):
		headers = ', '.join(x.upper() for x in headers)
	
	if not isinstance(origin, basestring):
		origin = ', '.join(origin)
        
	if isinstance(max_age, timedelta):
		max_age = max_age.total_seconds()

	def get_methods():
		if methods is not None:
			return methods
		options_resp = current_app.make_default_options_response()
		return options_resp.headers['allow']

	def decorator(f):
		def wrapped_function(*args, **kwargs):
			if automatic_options and request.method == 'OPTIONS':
				resp = current_app.make_default_options_response()
			else:
				resp = make_response(f(*args, **kwargs))
				
			if not attach_to_all and request.method != 'OPTIONS':
				return resp
			
			h = resp.headers
			print h
			h['Access-Control-Allow-Origin'] = origin
			h['Access-Control-Allow-Methods'] = get_methods()
			h['Access-Control-Max-Age'] = str(max_age)
			h['Content-Type'] = "application/json"
			
			if headers is not None:
				print "headers files not empyt"
				h['Access-Control-Allow-Headers'] = headers
			print h
			return resp

		f.provide_automatic_options = False
		return update_wrapper(wrapped_function, f)
	return decorator

@app.route('/process_text', methods=['POST', 'OPTIONS'])
@crossdomain(origin='*', headers='Content-Type')
def return_processed_text():
		text = request.form["text"]
		print text
		if not bool(text):
			return jsonify({
				"error": True,
				"success": False,
				"error_code": 101,
				"messege": "Text field cannot be left empty"
				})


		text_classfication = Classifier(text)	
		noun_phrase = list()
		result = list() 
		for chunk in text_classfication.with_svm():
			element = dict()
			instance = ProcessingWithBlob(chunk[0])
			element["sentence"] = chunk[0]
			element["polarity"] = '%.2f'%instance.sentiment_polarity()
			element["noun_phrases"] = list(instance.noun_phrase())
			element["tag"] = chunk[1]
			result.append(element)
			noun_phrase.append(list(instance.noun_phrase()))

		return jsonify({
				"result": result,
				"success": True,
				"error": False,
				"overall_sentiment": '%.2f'%ProcessingWithBlob.new_blob_polarity(text),
				"noun_phrase": noun_phrase,
				})

@app.route('/update', methods=['POST', 'OPTIONS'])
@crossdomain(origin='*', headers='Content-Type')
def update_model():
	"""
	This method is used to update the files corresponding to the user decision that the displayed content belogs to a different category
	rather then the category displayed by the existing model"
	"""
	text = request.form["text"]
	tag = request.form["tag"]
	print text, tag
	return {"success":  True,
		"error": False,
		}



class cd:
        """Context manager for changing the current working directory"""
        def __init__(self, newPath):
                self.newPath = newPath

        def __enter__(self):
                self.savedPath = os.getcwd()
                os.chdir(self.newPath)

        def __exit__(self, etype, value, traceback):
                os.chdir(self.savedPath)
		

#api.add_resource(ProcessText , '/v1/process_text')



if __name__ == '__main__':
    app.run(port=8000, debug=True)

