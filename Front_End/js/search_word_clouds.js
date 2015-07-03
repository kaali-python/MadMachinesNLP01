$(document).ready(function(){



App.TrendingView = Backbone.View.extend({
	intialize: function(){

	},
	render: function(){
		this.beforeRender();
		return this;	
	},

	beforeRender: function(){
		var jqhr = $.post(window.get_trending, {"location": null})	
		jqhr.done(function(data){
			var subview = new App.BarChart({"model": data.result})
		})
		 jqhr.fail(function(data){
			                                 bootbox.alert("fuckk you")
						                 });

		},


});

App.BarChart = Backbone.View.extend({
	initialize: function(options){
		d3.select("svg").remove()
		this.model = options.model
		this.BarLayout();
		},
	

	dataFunction: function(data, category){

		var newDataSet = [];

		if (category == "food"){
			$.each(data, function(i, __d){
				newDataSet.push({"name": __d.name, 
						"positive": __d.positive,
						"negative": __d.negative,
						"neutral": __d.neutral,
						"sentences": __d.sentences,
						"superpositive": __d.superpositive,
						"supernegative": __d.supernegative,
						"r": __d.totalsentiments,
						"categories": __d.categories,
						"series": __d.series,
						"subcategory": __d.eatery_name,
						"cumulative": __d.cumulative,
						}); }); 
		return newDataSet 
		}

			$.each(data, function(i, __d){
				newDataSet.push({"name": __d.eatery_name, 
						"positive": __d.positive,
						"negative": __d.negative,
						"neutral": __d.neutral,
						"sentences": __d.sentences,
						"superpositive": __d.superpositive,
						"supernegative": __d.supernegative,
						"r": __d.totalsentiments,
						"categories": __d.categories,
						"series": __d.series,
						"subcategory": __d.subcategory,
						"cumulative": __d.cumulative,
						}); }); 
		return newDataSet 

	},
			
	
	__HightChartLine: function(__categories, __series, __name, __subcategory, __cumulative){
		var self = this;
		$('.trending-bar-highchart').highcharts({
			chart: {
				type: "column"
					},
			credits: {
		            enabled: false
		        },

			title: {
				text: 'Time series for ' + __name +", "+ __subcategory,
				style: {"fontSize": ".9em" },
			},
			
			xAxis: {
				type: "datetime",
				categories: __categories,
				dateTimeLabelFormats: {
			                day: '%e of %b'
		            	},
				},

        		yAxis: {
				title: {
					text: 'Sentiment Frequency',},
			labels: {
				style: {
					fontWeight: "bold",
					fontSize: "0.4em" ,
                		}}
        			},
			legend: {
				align: 'right',
				x: -30,
				verticalAlign: 'top',
         			y: 25,
            			floating: true,
            			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            			borderColor: '#CCC',
            			borderWidth: 1,
            			shadow: false
        			},
        		tooltip: {
            			formatter: function () {
            			    return '<b>' + this.x + '</b><br/>' +
              			      this.series.name + ': ' + this.y + '<br/>' +
       			             'Total: ' + this.point.stackTotal;
            			}
        			},
			series: __cumulative,
		
			exporting: {
				buttons: {
					customButton: {
						text: 'Column',
						onclick: function () {
							self.__HightChartColumn(__categories, __series, __name, __subcategory, __cumulative)
                }
                },}}
		});
		},

	__HightChartColumn: function(__categories, __series, __name, __subcategory, __cumulative){
		var self = this;
		$('.trending-bar-highchart').highcharts({
			chart: {
				type: "column"
					},
			credits: {
		            enabled: false
		        },

			title: {
				text: 'Time series for ' + __name +", "+ __subcategory,
				style: {"fontSize": ".9em" },
			},
			
			xAxis: {
				type: "datetime",
				categories: __categories,
				dateTimeLabelFormats: {
			                day: '%e of %b'
		            	},
				},

        		yAxis: {
				title: {
					text: 'Sentiment Frequency',},
			labels: {
				style: {
					fontWeight: "bold",
					fontSize: "0.4em" ,
                		}}
        			},
			legend: {
				align: 'right',
				x: -30,
				verticalAlign: 'top',
         			y: 25,
            			floating: true,
            			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            			borderColor: '#CCC',
            			borderWidth: 1,
            			shadow: false
        			},
        		tooltip: {
            			formatter: function () {
            			    return '<b>' + this.x + '</b><br/>' +
              			      this.series.name + ': ' + this.y + '<br/>' +
       			             'Total: ' + this.point.stackTotal;
            			}
        			},
			series: __series,
		
			exporting: {
				buttons: {
					customButton: {
						text: 'Cumulative',
						onclick: function () {
						self.__HightChartLine(__categories, __series, __name, __subcategory, __cumulative)
                }
                },
        }
	}


		});
		},


	BarLayout: function(){
		function DATA(){return this.dataFunction(_data)}
		var self = this;	
		var width = $(".trending-bar-chart").width();
		var height = $(window).height()/2 ;

		console.log(this.model.food)
		food_data = this.dataFunction(this.model.food, "food")
		ambience_data = this.dataFunction(this.model.ambience, null)
		cost_data = this.dataFunction(this.model.service, null)
		service_data = this.dataFunction(this.model.service, null)


		empty_food = [{"name": "Trending in Food", "positive": 0, "negative": 0, "neutral": 0, "sentences": 0, "superpositive": 0, "supernegative": 0, "r": 0,}]
		empty_service = [{"name": "Trending in Service", "positive": 0, "negative": 0, "neutral": 0, "sentences": 0, "superpositive": 0, "supernegative": 0, "r": 0,}]
		empty_cost = [{"name": "Trending in Cost", "positive": 0, "negative": 0, "neutral": 0, "sentences": 0, "superpositive": 0, "supernegative": 0, "r": 0,}]
		empty_ambience = [{"name": "Trending in Ambience", "positive": 0, "negative": 0, "neutral": 0, "sentences": 0, "superpositive": 0, "supernegative": 0, "r": 0,}]

		data = empty_food.concat(food_data, empty_service, service_data, empty_ambience, ambience_data, empty_cost, cost_data)
		console.log(data)
		var margin = {
			 'top': 30,
			 'right': 10,
			 'bottom': 10,
			 'left': 50};
		
		var barHeight = (height -margin.top - margin.bottom)/data.length;

		var transitionTime = 300;
		var RScale = d3.scale.linear()
			 	.range([0, width-200])
				.domain([0, d3.max(data, function(d) { return d.r; })])
		
		var xScale = d3.scale.linear()
				.domain([0, d3.max(data, function(d) { return d.r; })])
			 	.range([0, width-200])


		function dblClick(d){
			d3.event.preventDefault();
			self.__HightChart(d.categories, d.cumulative, d.name, d.subcategory, "line")
			}
		var xAxis = d3.svg.axis()
				.scale(xScale)
				.ticks(25)
				.tickSize(2)
				.tickSubdivide(true)
				 .orient("bottom")

		var svg = d3.select(".trending-bar-chart").append("svg")
			.attr("width", width)
			.attr("height", height)
			.attr("class", "shadow")
			.style("shape-rendering", "crispEdges")	
			//.style("margin-top", height/15)	
			.attr("margin", margin)
	
		svg.append("g")
			 .attr("class", "x-axis")
			 .attr("transform", "translate(0," + (height -margin.top -margin.bottom)+ ")")        
			 .call(xAxis)
		
	 	 d3.selectAll("g.x-axis g.tick")
		 		.append("line")
				.classed("grid-line", true)
				.attr("x1", 0)
				.attr("y1", 0)
				.attr("x2", 0)
				.attr("y2", - (height - 2 * 25));		
		

		 d3.selectAll(".tick > text")
		 	.style("font-size", 10)	 
		 	.style("font-color", "blue");	 
	

		var bar = svg.selectAll("dishes")
				.data(data)
				.attr("class", "dishes")
			        .enter().append("g")
				//.style("stroke", function(d, i) { return d3.rgb(i).darker(); })
				.attr("class", function(d, i) { return d.name})
				.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })
				.on("click", function(d){console.log(d); self.__HightChartColumn(d.categories, d.series, d.name, d.subcategory, d.cumulative)})	
				.on("dblclick", dblClick)	

		bar
				.append("rect")
				.attr("class", "dishes")
				.style("fill", "green") 
				.attr("width", function(d) {return RScale(d.superpositive); })
				.transition().delay(function (d,i){ return i * transitionTime;}).duration(transitionTime)	
		  		.attr("height", barHeight - 1);
		
		bar
				.append("rect")
			.style("fill", "yellowgreen") 
			.attr("width", function(d) {return RScale(d.positive); })
				.transition().delay(function (d,i){ return i * transitionTime;}).duration(transitionTime)	
				      .attr("height", barHeight - 1)
			.attr("transform", function(d, i) { return "translate(" + RScale(d.superpositive) +", 0)"; });
		bar
				.append("rect")
			.style("fill", "PaleTurquoise") 
			.attr("width", function(d) {return RScale(d.neutral); })
				.transition().delay(function (d,i){ return i * transitionTime;}).duration(transitionTime)	
				      .attr("height", barHeight - 1)
		
			.attr("transform", function(d, i) { return "translate(" + RScale(d.superpositive+d.positive) +", 0)"; });
		bar
				.append("rect")
			.style("fill", "lightpink") 
			.attr("width", function(d) { console.log(RScale(d.r)); return RScale(d.negative); })
				.transition().delay(function (d,i){ return i * transitionTime;}).duration(transitionTime)	
				      .attr("height", barHeight - 1)
			.attr("transform", function(d, i) { return "translate(" + RScale(d.superpositive+d.positive+d.neutral) +", 0)"; });
		
		
		bar
				.append("rect")
			.style("fill", "red") 
			.style("-webkit-box-shadow", "10px 10px 30px 30px #ccc") 
			
			.attr("width", function(d) { console.log(RScale(d.r)); return RScale(d.supernegative); })
				.transition().delay(function (d,i){ return i * transitionTime;}).duration(transitionTime)	
				      .attr("height", barHeight - 1)
			.attr("transform", function(d, i) { return "translate(" + RScale(d.superpositive+d.positive+d.neutral+d.negative) +", 0)"; });
		
		bar.append("text")
				.transition().delay(function (d,i){ return i * transitionTime;}).duration(transitionTime)	
			          .attr("x", function(d) { return RScale(d.r) + 4; })
				        .attr("y", barHeight / 2)
					      .attr("dy", ".35em")
					            .text(function(d) { return d.name; })
						    .style("font-size", function(d){
							if (d.r == 0){
								
							return 	barHeight/2 + "px"
							}
							return barHeight/3 + "px"})
					.style("font-family", function(d){
							if (d.r == 0){
								return "'Indie Flower', cursive";
							}
						
							return "'Source Sans Pro', sans-serif"})
	},





})

})
