#!/usr/bin/env python
#-*- coding: utf-8 -*-

import BeautifulSoup
import time
from Testing_colored_print import bcolors
import hashlib

class ZomatoReviews(object):

	def __init__(self, soup, area_or_city):
		self.soup = soup
		self.area_or_city = area_or_city
		try:
			self.reviews_list = self.soup.findAll("div" ,{"class": "res-review clearfix js-activity-root mbot   item-to-hide-parent stupendousact"})
			# self.reviews_list = self.soup.select("div.res-review.clearfix.js-activity-root.mbot.item-to-hide-parent.stupendousact")
		except Exception as e:
			raise StandardError("Couldnt find the div tag that was specified.")
		
                self.reviews_data=[]

		self.reviews()

	def reviews(self):
		for review in self.reviews_list:
			reviews = dict()
			reviews["user_name"] = self.user_name(review)
			reviews["user_id"] = self.user_id(review)
			reviews["user_url"] = self.user_url(review)
			reviews["user_reviews"] = self.user_reviews(review)
			reviews["user_followers"] = self.user_followers(review)
			reviews["review_url"] = self.review_url(review)
			reviews["user_rating"] = self.user_rating(review)
			reviews["review_time"] = self.review_time(review)
			reviews["review_text"] = self.review_text(review)
			reviews["review_likes"] = self.review_likes(review)
			reviews["review_id"] = self.review_id(review)
			reviews["eatery_id"] = self.eatery_id(review)
			reviews["scraped_epoch"] = int(time.time())			
			reviews["converted_epoch"] = self.converted_to_epoch(review)
			reviews["area_or_city"] = self.area_or_city
			reviews["management_response"] = self.review_management_response(review)
			reviews["readable_review_year"] = self.review_year(review)
			reviews["readable_review_month"] = self.review_month(review)
			reviews["readable_review_day"] = self.review_day(review)
			reviews["__review_id"]=hashlib.sha256(str(reviews["review_id"])+str(reviews["review_text"])).hexdigest()

			self.reviews_data.append(reviews)
		print "\n\n\n Here is the length of reviews %s\n\n\n"%len(self.reviews_data)
                return

	def exception_handling(func):
		def deco(self, review):
			try:
				return func(self, review)
			
			except ValueError as e:
				print "{color} ERROR <{error}> in function <{function}>".format(color=bcolors.FAIL, error=e, function=func.__name__)
				return None

			except Exception as e:
				print "{color} ERROR <{error}> in function <{function}>".format(color=bcolors.FAIL, error=e, function=func.__name__)
				return None
		return deco

	@exception_handling
	def converted_to_epoch(self, review):
		"""
		This is the time in epoch, when the reviewws was wrtitten by the user, This is just the review time converted in epoch in 
		order to make search query easy and fast.
		Now the time_string is in the form : 2014-04-10 16:57:07 and it will be converted to 1401525098
		"""
		time_stamp = review.find("a", {"class": "res-review-date"}).time.get("datetime")
		return time.mktime(time.strptime(time_stamp, "%Y-%m-%d %H:%M:%S"))

	@exception_handling
	def review_year(self, review):
		epoch = self.converted_to_epoch(review)
		return time.strftime("%Y", time.localtime(int(epoch)))

	@exception_handling
	def review_month(self, review):
		epoch = self.converted_to_epoch(review)
		return time.strftime("%m", time.localtime(int(epoch)))
		
	@exception_handling
	def review_day(self, review):
		epoch = self.converted_to_epoch(review)
		return time.strftime("%d", time.localtime(int(epoch)))
	
	@exception_handling
	def eatery_id(self, review):
		return review.find("div", {"class": "res-review-body clearfix"})["data-res_id"]

	@exception_handling
	def review_id(self, review):
		return review["data-review_id"]

	@exception_handling
	def user_name(self, review):
		return review.find("div" , {"class": "snippet__name"}).find("a").text

	@exception_handling
	def user_id(self, review):
		return review.find("a" , {"class": "snippet__link"})["data-entity_id"]

	@exception_handling
	def user_url(self, review):
		return review.find("div" , {"class": "snippet__head"}).find("a")["href"]

	@exception_handling
	def user_reviews(self, review):
		# return review.find("span" , {"class": "snippet__reviews"}).text  #chnaged something
		try:
			return review.find("span" , {"class": "snippet__reviews"}).text
		except Exception:
			return review.find("span" , {"class": "snippet__expertise"}).text

	@exception_handling
	def user_followers(self, review):
		try:
			return review.find("span" , {"class": "snippet__followers"}).text
		except Exception:
			return review.find("span" , {"class": "snippet__expertise"}).text

	@exception_handling
	def review_url(self, review):
		return review.find("a", {"class": "res-review-date"}).get("href")

	@exception_handling
	def review_time(self, review):
		return review.find("a", {"class": "res-review-date"}).time.get("datetime")

	
        @exception_handling
	def review_text(self, review):
	        if review.find("div", {"class": "rev-text hidden"}):
			review_dom = review.find("div", {"class": "rev-text hidden"})
		else:
			review_dom = review.find("div", {"class": "rev-text"})
		
                for num in [1,2,3,4,5,6,7,8,9]:
			try:
				review.find("div",{"class" : "ttupper fs12px left bold zdhl2 tooltip icon-font-level-"+str(num)}).extract()
			except Exception,e:
				pass
                return review_dom.text 
        


	@exception_handling
	def review_management_response(self, review):
		try:
			return review.find("div", {"class": "review-reply-text "}).text
		except Exception:
			return None

	@exception_handling
	def review_likes(self, review):
		return review.find("a", {"class": "left thank-btn js-btn-thank "}).get("data-likes")

	def user_rating(self, review):
		for num in [1,2,3,4,5,6,7,8,9]:
			try:
				result = review.find("div",{"class" : "ttupper fs12px left bold zdhl2 tooltip icon-font-level-"+str(num)}).get("title")
				return result
			except Exception,e:
				pass


