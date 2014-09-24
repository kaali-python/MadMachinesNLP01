$(document).ready(function(){

App.RootRowView = Backbone.View.extend({
	tagName: "fieldset",
	className: "well plan",
	template: window.template("root-row"),
	noun_phrases: function(){return this.model.text.noun_phrases},
	polarity_name: function(){return this.model.text.polarity.name},
	polarity_value: function(){return this.model.text.polarity.value},
	sentence: function(){return this.model.text.sentence},
	review_id: function(){ return this.model.review_id},
	tag: function(){return this.model.text.tag},
	
	initialize: function(options){
		var self = this;
		this.values = {"food": 1, "service": 2, "ambience": 3, "cost": 4, "null": 5, "overall": 6};
		this.polarity_tag = {"super-positive": 1, "positive": 2, "neutral": 3, "negative": 4, "super-negative": 5};
		console.log(this.polarity_tag[this.polarity_name()]+ "     " + self.polarity_value() + self.polarity_name());
		console.log(this.values[this.tag()]+ "     " + self.tag());
		this.model = options.model;
	},
	
	render: function(){
		this.$el.append(this.template(this));
		this.$("#ddpFilter option[value='" + this.values[this.tag()] + "']").attr("selected", "selected")
		this.$("#ddpFiltersentiment option[value='" + this.polarity_tag[this.polarity_name()] + "']").attr("selected", "selected")
		return this;
	},

	events: {
		    "change #ddpFilter" : "changeTag",
		    "change #ddpFiltersentiment" : "changeSentiment",
		    "change #ddpFilterError" : "changeError",
		    "change #ddpFilterCustomer" : "changeCustomer",
		    "change #ddpFilterWordCloud" : "uploadWordCloud",
	},


	uploadWordCloud: function(event){
		var self = this;
		event.preventDefault()
		sentence = self.sentence();
		grams = self.$('#ddpFilterWordCloud option:selected').text();
		var jqhr = $.post(window.get_ngrams, {"text": sentence, "grams": grams})	
		jqhr.done(function(data){
			if (data.success == true){
					var subView = new App.NgramsParent({model: {"result": data.result, "sentence": sentence, "grams": grams, parent: self}});
					self.$el.after(subView.render().el);	
			}
			else {
				bootbox.alert(data.messege)
			}	
		})
				
		jqhr.fail(function(){
			bootbox.alert("Either the api or internet connection is not working, Try again later")
			})
	},

	changeSentiment: function(event){
		var self = this;
		event.preventDefault()
		sentence = self.sentence();
		changed_polarity = self.$('#ddpFiltersentiment option:selected').text();
		var jqhr = $.post(window.update_model_url, {"sentence": sentence, "tag": changed_polarity, "review_id": self.review_id()})	
		jqhr.done(function(data){
			console.log(data.success)
			if (data.success == true){
				bootbox.alert(data.messege)
				}
			else {
				bootbox.alert(data.messege)
				}	
			})
				
		jqhr.fail(function(){
			bootbox.alert("Either the api or internet connection is not working, Try again later")
				})
	},
	
	changeError: function(event){
		/**********/
		//Take care of the interjection tag present in the database, add it to the backend
		/*********/
		var self = this;
		event.preventDefault()
				
		error = self.$('#ddpFilterError option:selected').val();
		
		if (error == 2){
		bootbox.prompt("Please enter error messege", function(error_messege) {                
			if (error_messege != null) {                                             
				
				sentence = self.sentence();
				error = self.$('#ddpFilterError option:selected').val();
				var jqhr = $.post(window.update_review_error, {"sentence": sentence, "is_error": error, "review_id": self.review_id(),"error_messege": error_messege})	
				jqhr.done(function(data){
					console.log(data.success)
					if (data.success == true){
						bootbox.alert(data.messege)
						}
					else {
						bootbox.alert(data.messege)
					}	
				})
				
				jqhr.fail(function(){
					bootbox.alert("Either the api or internet connection is not working, Try again later")
				})
				}	
				  
			});
		}
		else {
			sentence = self.sentence();
			interjection = self.$('#ddpFilterError option:selected').val();
			var jqhr = $.post(window.upload_interjection_error, {"sentence": sentence, "is_error": error, "review_id": self.review_id(),})	
			jqhr.done(function(data){
				console.log(data.success)
				if (data.success == true){
					bootbox.alert(data.messege)
					}
				else {
					bootbox.alert(data.messege)}	
				})
				
			jqhr.fail(function(){
				bootbox.alert("Either the api or internet connection is not working, Try again later")})
				
		}	
	},
	
	
	changeCustomer: function(event){
		var self = this;
		event.preventDefault()
				sentence = self.sentence();
				customer = self.$('#ddpFilterCustomer option:selected').val();
				var jqhr = $.post(window.update_customer, {"text": sentence, "is_repeated": customer, "review_id": self.review_id()})	
				jqhr.done(function(data){
					console.log(data.success)
					if (data.success == true){
						bootbox.alert(data.messege)
						}
					else {
						bootbox.alert(data.messege)
					}	
				})
				
				jqhr.fail(function(){
					bootbox.alert("Either the api or internet connection is not working, Try again later")
				})
	},

	changeTag: function(event){
		var self = this;
		event.preventDefault()
		changed_tag = self.$('#ddpFilter option:selected').text();
		sentence = self.sentence();

		var jqhr = $.post(window.update_model_url, {"sentence": sentence, "tag": changed_tag, "review_id": self.review_id()})	
		jqhr.done(function(data){
			if (data.success == true){
				bootbox.alert(data.messege)
			}
			else {
				bootbox.alert(data.messege)
				}	
			})
				
		jqhr.fail(function(){
				bootbox.alert("Either the api or internet connection is not working, Try again later")
			})
			
	},
});
});
