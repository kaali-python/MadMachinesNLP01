

Sample Ui can be accesses from the link mentioned below

Api Documentation

/suggestions, Suggestion
Type:  Post
Args:


Result:

/textsearch, TextSearch
Type:  Post
Args:


Result:
Case 1: type: cusines
List of dictionaries(object) will be returned, where each object will be a restaurant which serves this cuisine 

[{u'ambience': {u'ambience-overall': {u'average': 10,
    u'excellent': 65,
    u'good': 54,
    u'mixed': 0,
    u'poor': 5,
    u'terrible': 0,
    u'total_sentiments': 134}},
  u'cost': {u'expensive': {u'average': 5,
    u'excellent': 2,
    u'good': 11,
    u'mixed': 0,
    u'poor': 19,
    u'terrible': 0,
    u'total_sentiments': 37}},
  u'eatery_address': u'1,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Zo',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 11,
     u'good': 3,
     u'name': u'chicken steak i',
     u'poor': 2,
     u'terrible': 0,
     u'total_sentiments': 20},
    {u'average': 5,
     u'excellent': 4,
     u'good': 7,
     u'name': u'shish taouk',
     u'poor': 0,
     u'terrible': 0,
     u'total_sentiments': 16},
    {u'average': 4,
     u'excellent': 4,
     u'good': 3,
     u'name': u'verde pizza',
     u'poor': 3,
     u'terrible': 0,
     u'total_sentiments': 14}]},
  u'location': [28.5552055556, 77.1949833333],
  u'menu': {u'average': 5,
   u'excellent': 3,
   u'good': 11,
   u'mixed': 0,
   u'poor': 22,
   u'terrible': 0,
   u'total_sentiments': 41},
  u'overall': {u'average': 17,
   u'excellent': 104,
   u'good': 136,
   u'mixed': 0,
   u'poor': 40,
   u'terrible': 4,
   u'total_sentiments': 301},
  u'service': {u'service-overall': {u'average': 6,
    u'excellent': 32,
    u'good': 24,
    u'mixed': 0,
    u'poor': 15,
    u'terrible': 0,
    u'total_sentiments': 77}}},
 {u'ambience': {u'ambience-overall': {u'average': 14,
    u'excellent': 106,
    u'good': 86,
    u'mixed': 0,
    u'poor': 11,
    u'terrible': 1,
    u'total_sentiments': 218}},
  u'cost': {u'expensive': {u'average': 11,
    u'excellent': 2,
    u'good': 12,
    u'mixed': 0,
    u'poor': 34,
    u'terrible': 1,
    u'total_sentiments': 60}},
  u'eatery_address': u'1st Floor, DDA Shopping Complex, Aurobindo Place,Hauz Khas, New Delhi',
  u'eatery_name': u'Summer House Cafe',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 7,
     u'good': 2,
     u'name': u'cottage cheese fingers',
     u'poor': 3,
     u'terrible': 0,
     u'total_sentiments': 16},
    {u'average': 5,
     u'excellent': 3,
     u'good': 3,
     u'name': u'veg mezze',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 12},
    {u'average': 3,
     u'excellent': 3,
     u'good': 2,
     u'name': u'pepperoni pizza',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 9}]},
  u'location': [28.5524444444, 77.2037361111],
  u'menu': {u'average': 2,
   u'excellent': 8,
   u'good': 23,
   u'mixed': 0,
   u'poor': 17,
   u'terrible': 1,
   u'total_sentiments': 51},
  u'overall': {u'average': 49,
   u'excellent': 189,
   u'good': 324,
   u'mixed': 0,
   u'poor': 145,
   u'terrible': 32,
   u'total_sentiments': 739},
  u'service': {u'service-overall': {u'average': 13,
    u'excellent': 33,
    u'good': 39,
    u'mixed': 0,
    u'poor': 60,
    u'terrible': 11,
    u'total_sentiments': 156}}},
 {u'ambience': {u'ambience-overall': {u'average': 22,
    u'excellent': 83,
    u'good': 60,
    u'mixed': 0,
    u'poor': 5,
    u'terrible': 0,
    u'total_sentiments': 170}},
  u'cost': {u'expensive': {u'average': 4,
    u'excellent': 2,
    u'good': 11,
    u'mixed': 0,
    u'poor': 27,
    u'terrible': 2,
    u'total_sentiments': 46}},
  u'eatery_address': u'12,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Smoke House Deli',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 8,
     u'good': 13,
     u'name': u'smokehouse deli',
     u'poor': 7,
     u'terrible': 0,
     u'total_sentiments': 32},
    {u'average': 10,
     u'excellent': 10,
     u'good': 4,
     u'name': u'cottage cheese',
     u'poor': 0,
     u'terrible': 0,
     u'total_sentiments': 24},
    {u'average': 0,
     u'excellent': 4,
     u'good': 12,
     u'name': u'bread basket',
     u'poor': 4,
     u'terrible': 0,
     u'total_sentiments': 20}]},
  u'location': [28.55404, 77.194329],
  u'menu': {u'average': 4,
   u'excellent': 10,
   u'good': 16,
   u'mixed': 0,
   u'poor': 16,
   u'terrible': 0,
   u'total_sentiments': 46},
  u'overall': {u'average': 37,
   u'excellent': 153,
   u'good': 186,
   u'mixed': 0,
   u'poor': 57,
   u'terrible': 5,
   u'total_sentiments': 438},
  u'service': {u'service-overall': {u'average': 14,
    u'excellent': 44,
    u'good': 38,
    u'mixed': 0,
    u'poor': 23,
    u'terrible': 0,
    u'total_sentiments': 119}}},
 {u'ambience': {u'ambience-overall': {u'average': 25,
    u'excellent': 49,
    u'good': 58,
    u'mixed': 0,
    u'poor': 10,
    u'terrible': 0,
    u'total_sentiments': 142}},
  u'cost': {u'expensive': {u'average': 5,
    u'excellent': 0,
    u'good': 6,
    u'mixed': 0,
    u'poor': 20,
    u'terrible': 2,
    u'total_sentiments': 33}},
  u'eatery_address': u'26 A, 2nd Floor,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Elf Cafe &amp; Bar',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 2,
     u'good': 6,
     u'name': u'chicken finger',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 13},
    {u'average': 5,
     u'excellent': 2,
     u'good': 5,
     u'name': u'dahi kebab',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 13},
    {u'average': 5,
     u'excellent': 4,
     u'good': 2,
     u'name': u'paneer tikka',
     u'poor': 2,
     u'terrible': 0,
     u'total_sentiments': 13}]},
  u'location': [28.5543861111, 77.1946333333],
  u'menu': {u'average': 6,
   u'excellent': 4,
   u'good': 8,
   u'mixed': 0,
   u'poor': 12,
   u'terrible': 0,
   u'total_sentiments': 30},
  u'overall': {u'average': 34,
   u'excellent': 92,
   u'good': 178,
   u'mixed': 0,
   u'poor': 79,
   u'terrible': 12,
   u'total_sentiments': 395},
  u'service': {u'service-overall': {u'average': 17,
    u'excellent': 37,
    u'good': 35,
    u'mixed': 0,
    u'poor': 31,
    u'terrible': 8,
    u'total_sentiments': 128}}},
 {u'ambience': {u'ambience-overall': {u'average': 17,
    u'excellent': 39,
    u'good': 60,
    u'mixed': 0,
    u'poor': 7,
    u'terrible': 0,
    u'total_sentiments': 123}},
  u'cost': {u'expensive': {u'average': 5,
    u'excellent': 3,
    u'good': 14,
    u'mixed': 0,
    u'poor': 27,
    u'terrible': 1,
    u'total_sentiments': 50}},
  u'eatery_address': u'1A, 3rd Floor,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Bootlegger',
  u'food': {u'dishes': [{u'average': 2,
     u'excellent': 2,
     u'good': 4,
     u'name': u'chicken wings',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 9},
    {u'average': 4,
     u'excellent': 0,
     u'good': 4,
     u'name': u'honey chilli potatoes',
     u'poor': 0,
     u'terrible': 0,
     u'total_sentiments': 8},
    {u'average': 3,
     u'excellent': 0,
     u'good': 3,
     u'name': u'barbeque chicken pizza',
     u'poor': 0,
     u'terrible': 0,
     u'total_sentiments': 6}]},
  u'location': [28.5544777778, 77.1948166667],
  u'menu': {u'average': 2,
   u'excellent': 1,
   u'good': 5,
   u'mixed': 0,
   u'poor': 14,
   u'terrible': 0,
   u'total_sentiments': 22},
  u'overall': {u'average': 35,
   u'excellent': 80,
   u'good': 166,
   u'mixed': 0,
   u'poor': 64,
   u'terrible': 13,
   u'total_sentiments': 358},
  u'service': {u'service-overall': {u'average': 10,
    u'excellent': 20,
    u'good': 40,
    u'mixed': 0,
    u'poor': 47,
    u'terrible': 8,
    u'total_sentiments': 125}}}]


Case 2: type: "eatery"
A list of eateries will be reuterned whose names will be similar to the query returned by the user, 
If a user chooses a eatery that has been selected from the output that results from suggestion
Program mathes the exact result so only one eatery will be returned


[{u'ambience': {u'ambience-overall': {u'average': 2,
    u'excellent': 4,
    u'good': 15,
    u'mixed': 0,
    u'poor': 6,
    u'terrible': 0,
    u'total_sentiments': 27}},
  u'cost': {u'expensive': {u'average': 1,
    u'excellent': 1,
    u'good': 2,
    u'mixed': 0,
    u'poor': 9,
    u'terrible': 0,
    u'total_sentiments': 13}},
  u'eatery_address': u'Shop 307, 2nd Floor, DLF Promenade Mall, Vasant Kunj, New Delhi',
  u'eatery_name': u'Veda Cafe',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 2,
     u'good': 2,
     u'name': u'dahi kebab',
     u'poor': 0,
     u'terrible': 0,
     u'total_sentiments': 8},
    {u'average': 2,
     u'excellent': 1,
     u'good': 3,
     u'name': u'sigri tikka',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 7},
    {u'average': 3,
     u'excellent': 2,
     u'good': 1,
     u'name': u'dal makhani',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 7}]},
  u'location': [28.542285, 77.15613],
  u'menu': {u'average': 2,
   u'excellent': 1,
   u'good': 10,
   u'mixed': 0,
   u'poor': 8,
   u'terrible': 0,
   u'total_sentiments': 21},
  u'overall': {u'average': 11,
   u'excellent': 21,
   u'good': 52,
   u'mixed': 0,
   u'poor': 20,
   u'terrible': 2,
   u'total_sentiments': 106},
  u'service': {u'service-overall': {u'average': 1,
    u'excellent': 9,
    u'good': 10,
    u'mixed': 0,
    u'poor': 15,
    u'terrible': 5,
    u'total_sentiments': 40}}},
 {u'ambience': {u'ambience-overall': {u'average': 5,
    u'excellent': 39,
    u'good': 38,
    u'mixed': 0,
    u'poor': 4,
    u'terrible': 0,
    u'total_sentiments': 86}},
  u'cost': {u'expensive': {u'average': 2,
    u'excellent': 4,
    u'good': 4,
    u'mixed': 0,
    u'poor': 10,
    u'terrible': 1,
    u'total_sentiments': 21}},
  u'eatery_address': u'H 2, Second Floor &amp; Third Floor, Above Ogaan,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Coast Cafe',
  u'food': {u'dishes': [{u'average': 14,
     u'excellent': 22,
     u'good': 23,
     u'name': u'malabar parathas',
     u'poor': 3,
     u'terrible': 0,
     u'total_sentiments': 62},
    {u'average': 8,
     u'excellent': 9,
     u'good': 11,
     u'name': u'mutton sukkha',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 29},
    {u'average': 7,
     u'excellent': 5,
     u'good': 8,
     u'name': u'prawn moilee',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 21}]},
  u'location': [28.554721, 77.195182],
  u'menu': {u'average': 5,
   u'excellent': 7,
   u'good': 21,
   u'mixed': 0,
   u'poor': 10,
   u'terrible': 0,
   u'total_sentiments': 43},
  u'overall': {u'average': 20,
   u'excellent': 91,
   u'good': 115,
   u'mixed': 0,
   u'poor': 40,
   u'terrible': 5,
   u'total_sentiments': 271},
  u'service': {u'service-overall': {u'average': 6,
    u'excellent': 27,
    u'good': 19,
    u'mixed': 0,
    u'poor': 21,
    u'terrible': 1,
    u'total_sentiments': 74}}},
 {u'ambience': {u'ambience-overall': {u'average': 2,
    u'excellent': 18,
    u'good': 25,
    u'mixed': 0,
    u'poor': 2,
    u'terrible': 0,
    u'total_sentiments': 47}},
  u'cost': {u'expensive': {u'average': 3,
    u'excellent': 3,
    u'good': 1,
    u'mixed': 0,
    u'poor': 7,
    u'terrible': 0,
    u'total_sentiments': 14}},
  u'eatery_address': u'T 49, Ground Floor,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Kunzum Travel Cafe',
  u'food': {u'dishes': [{u'average': 1,
     u'excellent': 1,
     u'good': 1,
     u'name': u'travel cafe',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 4},
    {u'average': 0,
     u'excellent': 1,
     u'good': 1,
     u'name': u'tea coffee',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 3},
    {u'average': 0,
     u'excellent': 2,
     u'good': 0,
     u'name': u'cafe i',
     u'poor': 0,
     u'terrible': 0,
     u'total_sentiments': 2}]},
  u'location': [28.5538388889, 77.1945111111],
  u'menu': {u'average': 0,
   u'excellent': 0,
   u'good': 2,
   u'mixed': 0,
   u'poor': 6,
   u'terrible': 0,
   u'total_sentiments': 8},
  u'overall': {u'average': 10,
   u'excellent': 95,
   u'good': 117,
   u'mixed': 0,
   u'poor': 24,
   u'terrible': 1,
   u'total_sentiments': 247},
  u'service': {u'service-overall': {u'average': 0,
    u'excellent': 4,
    u'good': 6,
    u'mixed': 0,
    u'poor': 2,
    u'terrible': 0,
    u'total_sentiments': 12}}},
 {u'ambience': {u'ambience-overall': {u'average': 25,
    u'excellent': 49,
    u'good': 58,
    u'mixed': 0,
    u'poor': 10,
    u'terrible': 0,
    u'total_sentiments': 142}},
  u'cost': {u'expensive': {u'average': 5,
    u'excellent': 0,
    u'good': 6,
    u'mixed': 0,
    u'poor': 20,
    u'terrible': 2,
    u'total_sentiments': 33}},
  u'eatery_address': u'26 A, 2nd Floor,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Elf Cafe &amp; Bar',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 2,
     u'good': 6,
     u'name': u'chicken finger',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 13},
    {u'average': 5,
     u'excellent': 2,
     u'good': 5,
     u'name': u'dahi kebab',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 13},
    {u'average': 5,
     u'excellent': 4,
     u'good': 2,
     u'name': u'paneer tikka',
     u'poor': 2,
     u'terrible': 0,
     u'total_sentiments': 13}]},
  u'location': [28.5543861111, 77.1946333333],
  u'menu': {u'average': 6,
   u'excellent': 4,
   u'good': 8,
   u'mixed': 0,
   u'poor': 12,
   u'terrible': 0,
   u'total_sentiments': 30},
  u'overall': {u'average': 34,
   u'excellent': 92,
   u'good': 178,
   u'mixed': 0,
   u'poor': 79,
   u'terrible': 12,
   u'total_sentiments': 395},
  u'service': {u'service-overall': {u'average': 17,
    u'excellent': 37,
    u'good': 35,
    u'mixed': 0,
    u'poor': 31,
    u'terrible': 8,
    u'total_sentiments': 128}}},
 {u'ambience': {u'ambience-overall': {u'average': 14,
    u'excellent': 106,
    u'good': 86,
    u'mixed': 0,
    u'poor': 11,
    u'terrible': 1,
    u'total_sentiments': 218}},
  u'cost': {u'expensive': {u'average': 11,
    u'excellent': 2,
    u'good': 12,
    u'mixed': 0,
    u'poor': 34,
    u'terrible': 1,
    u'total_sentiments': 60}},
  u'eatery_address': u'1st Floor, DDA Shopping Complex, Aurobindo Place,Hauz Khas, New Delhi',
  u'eatery_name': u'Summer House Cafe',
  u'food': {u'dishes': [{u'average': 4,
     u'excellent': 7,
     u'good': 2,
     u'name': u'cottage cheese fingers',
     u'poor': 3,
     u'terrible': 0,
     u'total_sentiments': 16},
    {u'average': 5,
     u'excellent': 3,
     u'good': 3,
     u'name': u'veg mezze',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 12},
    {u'average': 3,
     u'excellent': 3,
     u'good': 2,
     u'name': u'pepperoni pizza',
     u'poor': 1,
     u'terrible': 0,
     u'total_sentiments': 9}]},
  u'location': [28.5524444444, 77.2037361111],
  u'menu': {u'average': 2,
   u'excellent': 8,
   u'good': 23,
   u'mixed': 0,
   u'poor': 17,
   u'terrible': 1,
   u'total_sentiments': 51},
  u'overall': {u'average': 49,
   u'excellent': 189,
   u'good': 324,
   u'mixed': 0,
   u'poor': 145,
   u'terrible': 32,
   u'total_sentiments': 739},
  u'service': {u'service-overall': {u'average': 13,
    u'excellent': 33,
    u'good': 39,
    u'mixed': 0,
    u'poor': 60,
    u'terrible': 11,
    u'total_sentiments': 156}}}]



Case 3: type: "dish"
A list of dictionaries will be returned, which will have the etails of the eatery serving this dish and also
the details of the dishes

[{u'__eatery_id': u'6b942e0dc1717b69266422c40c1c04e30036530d240df3b7c3604defd20202cf',
  u'average': 0,
  u'eatery_address': u'29 A,Hauz Khas Village, New Delhi',
  u'eatery_name': u'The Pink Room',
  u'excellent': 2,
  u'good': 0,
  u'location': [77.1944583333, 28.5542972222],
  u'name': u'italian twist',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 2},
 {u'__eatery_id': u'7803afebee19443434135981aee68dd7c7fc7a8e499ac722ae949fec46730180',
  u'average': 0,
  u'eatery_address': u'1,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Zo',
  u'excellent': 0,
  u'good': 2,
  u'location': [77.1949833333, 28.5552055556],
  u'name': u'italian food',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 2},
 {u'__eatery_id': u'6e5805b3ee54cadac65fac361022d0cb0247ba1cf2c9f289f84e8ab9d80de945',
  u'average': 1,
  u'eatery_address': u'E 249, Rama Market, Nelson Manndela Marg, Vasant Vihar, New Delhi',
  u'eatery_name': u'Slice of Italy',
  u'excellent': 0,
  u'good': 1,
  u'location': [77.170634, 28.558888],
  u'name': u'italia salad',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 2},
 {u'__eatery_id': u'c11914fab8577eaee8da91c765044ba3db974f7597307d56daf0fa740e234c2b',
  u'average': 0,
  u'eatery_address': u'2nd Floor, 50A,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Yeti - The Himalayan Kitchen',
  u'excellent': 1,
  u'good': 2,
  u'location': [77.1941222222, 28.5537055556],
  u'name': u'1 star',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 3},
 {u'__eatery_id': u'6b942e0dc1717b69266422c40c1c04e30036530d240df3b7c3604defd20202cf',
  u'average': 0,
  u'eatery_address': u'29 A,Hauz Khas Village, New Delhi',
  u'eatery_name': u'The Pink Room',
  u'excellent': 0,
  u'good': 3,
  u'location': [77.1944583333, 28.5542972222],
  u'name': u'bar staff',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 3},
 {u'__eatery_id': u'bcde867533dd90969f8db1b988a8b5d9d24c144f74927b9095c6a18c91b07767',
  u'average': 2,
  u'eatery_address': u'30, 2nd Floor, Powerhouse Buliding,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Garage Inc.',
  u'excellent': 0,
  u'good': 0,
  u'location': [77.1942972222, 28.5539944444],
  u'name': u'veg starter',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 2},
 {u'__eatery_id': u'bad81d7839e057e68c7b28ed612b7036a3951a450b9fa971a672e676d854f410',
  u'average': 2,
  u'eatery_address': u'26 A, 2nd Floor,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Elf Cafe &amp; Bar',
  u'excellent': 0,
  u'good': 1,
  u'location': [77.1946333333, 28.5543861111],
  u'name': u'starters i',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 3},
 {u'__eatery_id': u'c11914fab8577eaee8da91c765044ba3db974f7597307d56daf0fa740e234c2b',
  u'average': 0,
  u'eatery_address': u'2nd Floor, 50A,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Yeti - The Himalayan Kitchen',
  u'excellent': 0,
  u'good': 2,
  u'location': [77.1941222222, 28.5537055556],
  u'name': u'chicken starter',
  u'poor': 0,
  u'terrible': 0,
  u'total_sentiments': 2},
 {u'__eatery_id': u'604e28c3f07763f5d2608ae11523419e2c1c7b50f79b963d1d56c3d7a4690ddf',
  u'average': 0,
  u'eatery_address': u'2nd Floor, Munshilal Building, Block N, Outer Circle,Connaught Place, New Delhi',
  u'eatery_name': u'Barbeque Nation',
  u'excellent': 0,
  u'good': 1,
  u'location': [77.2206888889, 28.6301944444],
  u'name': u'paneer starter',
  u'poor': 1,
  u'terrible': 0,
  u'total_sentiments': 2},
 {u'__eatery_id': u'a746dcbbf0d3e715b28bf232cc2982fd829cc2a228bb76b7ded4b63ed770cfaf',
  u'average': 1,
  u'eatery_address': u'50-A, 3rd &amp; 4th Floor,Hauz Khas Village, New Delhi',
  u'eatery_name': u'Mia Bella',
  u'excellent': 1,
  u'good': 0,
  u'location': [77.1939555556, 28.5535],
  u'name': u'italian folks',
  u'poor': 1,
  u'terrible': 0,
  u'total_sentiments': 3}]








/gettrending, GetTrending
Type:  Post
Args:


Result:

/nearesteateries, NearestEateries
Type:  Post
Args:


Result:

/usersdetails, UsersDetails
Type:  Post
Args:


Result:

/usersfeedback, UsersFeedback
Type:  Post
Args:


Result:

/get_eatery, GetEatery

ce': {u'management': {u'poor': 20, u'good': 5, u'total_sentiments': 38, u'average': 7, u'terrible': 1, u'excellent': 5, u'mixed': 0}, u'service-overall': {u'poor': 110, u'good': 61, u'total_sentiments': 284, u'average': 26, u'terrible': 18, u'excellent': 69, u'mixed': 0}, u'service-charges': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'serivce-null': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'servic-overall': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'service-null': {u'poor': 232, u'good': 79, u'total_sentiments': 386, u'average': 41, u'terrible': 11, u'excellent': 23, u'mixed': 0}, u'waiting-hours': {u'poor': 6, u'good': 0, u'total_sentiments': 6, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'presentation': {u'poor': 3, u'good': 5, u'total_sentiments': 11, u'average': 0, u'terrible': 0, u'excellent': 3, u'mixed': 0}, u'booking': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'staff': {u'poor': 48, u'good': 47, u'total_sentiments': 139, u'average': 1, u'terrible': 11, u'excellent': 32, u'mixed': 0}}, u'food': [{u'poor': 3, u'good': 9, u'name': u'mia bella', u'total_sentiments': 29, u'average': 9, u'terrible': 0, u'excellent': 8}, {u'poor': 5, u'good': 11, u'name': u'peri peri chicken', u'total_sentiments': 27, u'average': 6, u'terrible': 1, u'excellent': 4}, {u'poor': 4, u'good': 8, u'name': u'pesto chicken pasta', u'total_sentiments': 18, u'average': 5, u'terrible': 0, u'excellent': 1}, {u'poor': 1, u'good': 4, u'name': u'pizza i', u'total_sentiments': 15, u'average': 8, u'terrible': 1, u'excellent': 1}, {u'poor': 1, u'good': 5, u'name': u'chicken dhokha', u'total_sentiments': 13, u'average': 0, u'terrible': 0, u'excellent': 7}, {u'poor': 2, u'good': 5, u'name': u'pita breads', u'total_sentiments': 13, u'average': 3, u'terrible': 0, u'excellent': 3}, {u'poor': 1, u'good': 2, u'name': u'veg mezze', u'total_sentiments': 13, u'average': 10, u'terrible': 0, u'excellent': 0}, {u'poor': 3, u'good': 2, u'name': u'beer chicken', u'total_sentiments': 11, u'average': 4, u'terrible': 0, u'excellent': 2}, {u'poor': 4, u'good': 4, u'name': u'i', u'total_sentiments': 11, u'average': 0, u'terrible': 0, u'excellent': 3}, {u'poor': 3, u'good': 1, u'name': u'mix sauce pasta', u'total_sentiments': 11, u'average': 4, u'terrible': 0, u'excellent': 3}, {u'poor': 3, u'good': 1, u'name': u'ladies night', u'total_sentiments': 10, u'average': 2, u'terrible': 1, u'excellent': 3}, {u'poor': 2, u'good': 3, u'name': u'chicken peri peri', u'total_sentiments': 10, u'average': 2, u'terrible': 0, u'excellent': 3}, {u'poor': 1, u'good': 4, u'name': u'chicken', u'total_sentiments': 10, u'average': 2, u'terrible': 0, u'excellent': 3}, {u'poor': 2, u'good': 2, u'name': u'veg caesar salad', u'total_sentiments': 10, u'average': 5, u'terrible': 0, u'excellent': 1}, {u'poor': 3, u'good': 3, u'name': u'thai chicken satay', u'total_sentiments': 9, u'average': 1, u'terrible': 0, u'excellent': 2}, {u'poor': 1, u'good': 3, u'name': u'garlic bread', u'total_sentiments': 9, u'average': 2, u'terrible': 1, u'excellent': 2}, {u'poor': 4, u'good': 3, u'name': u'paneer tikka', u'total_sentiments': 9, u'average': 2, u'terrible': 0, u'excellent': 0}, {u'poor': 2, u'good': 1, u'name': u'peri', u'total_sentiments': 8, u'average': 2, u'terrible': 1, u'excellent': 2}, {u'poor': 0, u'good': 2, u'name': u'lady killer drink', u'total_sentiments': 8, u'average': 2, u'terrible': 0, u'excellent': 4}, {u'poor': 1, u'good': 1, u'name': u'cottage cheese', u'total_sentiments': 8, u'average': 5, u'terrible': 0, u'excellent': 1}], u'menu': {u'poor': 38, u'good': 28, u'total_sentiments': 83, u'average': 7, u'terrible': 0, u'excellent': 10, u'mixed': 0}, u'overall': {u'poor': 155, u'good': 391, u'total_sentiments': 908, u'average': 76, u'terrible': 43, u'excellent': 243, u'mixed': 0}, u'cost': {u'vfm': {u'poor': 7, u'good': 19, u'total_sentiments': 36, u'average': 6, u'terrible': 1, u'excellent': 3, u'mixed': 0}, u'cost-null': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'cheap': {u'poor': 5, u'good': 7, u'total_sentiments': 14, u'average': 1, u'terrible': 0, u'excellent': 1, u'mixed': 0}, u'not worth': {u'poor': 1, u'good': 0, u'total_sentiments': 4, u'average': 0, u'terrible': 3, u'excellent': 0, u'mixed': 0}, u'expensive': {u'poor': 69, u'good': 22, u'total_sentiments': 120, u'average': 18, u'terrible': 6, u'excellent': 5, u'mixed': 0}}, u'ambience': {u'smoking-zone': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'decor': {u'poor': 11, u'good': 41, u'total_sentiments': 81, u'average': 8, u'terrible': 0, u'excellent': 21, u'mixed': 0}, u'ambience-null': {u'poor': 23, u'good': 77, u'total_sentiments': 181, u'average': 39, u'terrible': 0, u'excellent': 42, u'mixed': 0}, u'ambience-overall': {u'poor': 25, u'good': 114, u'total_sentiments': 289, u'average': 43, u'terrible': 1, u'excellent': 106, u'mixed': 0}, u'in-seating': {u'poor': 6, u'good': 12, u'total_sentiments': 35, u'average': 10, u'terrible': 0, u'excellent': 7, u'mixed': 0}, u'crowd': {u'poor': 2, u'good': 7, u'total_sentiments': 12, u'average': 1, u'terrible': 0, u'excellent': 2, u'mixed': 0}, u'open-area': {u'poor': 3, u'good': 14, u'total_sentiments': 44, u'average': 11, u'terrible': 0, u'excellent': 16, u'mixed': 0}, u'dancefloor': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'music': {u'poor': 31, u'good': 40, u'total_sentiments': 99, u'average': 6, u'terrible': 2, u'excellent': 20, u'mixed': 0}, u'location': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'romantic': {u'poor': 2, u'good': 16, u'total_sentiments': 35, u'average': 1, u'terrible': 0, u'excellent': 16, u'mixed': 0}, u'sports': {u'poor': 0, u'good': 0, u'total_sentiments': 0, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'live-matches': {u'poor': 0, u'good': 1, u'total_sentiments': 1, u'average': 0, u'terrible': 0, u'excellent': 0, u'mixed': 0}, u'view': {u'poor': 11, u'good': 126, u'total_sentiments': 380, u'average': 34, u'terrible': 0, u'excellent': 209, u'mixed': 0}}}
