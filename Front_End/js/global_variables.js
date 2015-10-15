var App = {};
window.App = App;
window.template = function (name) { return Mustache.compile($("#" + name + "-template").html()); };
window.make_request = function make_request(data) { url = window.process_text_url; return $.post(url, { "text": data }) }
//window.URL = "http://52.74.143.163:8080/"
window.URL = "http://localhost:8000/"

//window.URL = "http://ec2-54-68-29-37.us-west-2.compute.amazonaws.com:8080/"
window.get_start_date_for_restaurant = window.URL + "get_start_date_for_restaurant";
window.limited_eateries_list = window.URL + "limited_eateries_list";
window.get_word_cloud = window.URL + "get_word_cloud";
window.update_sentence = window.URL + "change_tag_or_sentiment";
window.resolve_query = window.URL + "resolve_query";
window.get_trending = window.URL + "get_trending";
window.nearest_eateries = window.URL + "nearest_eateries";
window.eatery_details = window.URL + "eatery_details";
window.eateries_on_character = window.URL + "eateries_on_character";
window.users_feedback = window.URL + "users_feedback";
window.users_details = window.URL + "users_details";
window.get_dish_suggestions = window.URL + "get_dish_suggestions";
window.get_eatery_suggestions = window.URL + "get_eatery_suggestions";
window.get_dishes = window.URL + "get_dishes";
window.get_eatery = window.URL + "get_eatery";