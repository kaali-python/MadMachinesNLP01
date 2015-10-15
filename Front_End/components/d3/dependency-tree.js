// Generated by CoffeeScript 1.4.0
var dependencyDict, levelHeight, maximum, parseConll, tagDict, under, wordHeight, wordWidth;

wordWidth = 70;

wordHeight = 40;

levelHeight = function(level) {
  return 2 + Math.pow(level, 1.8) * 10;
};

window.drawTree = function(svgElement, conllData) {

  console.log(conllData);

  var arrows, data, dependencies, e, edge, edges, item, svg, tags, treeHeight, treeWidth, triangle, words, _i, _j, _k, _len, _len1, _len2;
  svg = d3.select(svgElement);

  data = conllData;
  edges = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      item = data[_i];
      if (item.id) {
        _results.push(item);
      }
    }
    return _results;
  })();

  console.log(edges);

  for (_i = 0, _len = edges.length; _i < _len; _i++) {
    edge = edges[_i];
    for (_j = 0, _len1 = edges.length; _j < _len1; _j++) {
      edge = edges[_j];
      edge.level = 1 + maximum((function() {
        var _k, _len2, _results;
        _results = [];
        for (_k = 0, _len2 = edges.length; _k < _len2; _k++) {
          e = edges[_k];
          if (under(edge, e)) {
            _results.push(e.level);
          }
        }
        return _results;
      })());
    }
  }
  treeWidth = wordWidth * data.length - wordWidth / 3;
  treeHeight = levelHeight(maximum((function() {
    var _k, _len2, _results;
    _results = [];
    for (_k = 0, _len2 = data.length; _k < _len2; _k++) {
      edge = data[_k];
      _results.push(edge.level);
    }
    return _results;
  })())) + 2 * wordHeight;
  for (_k = 0, _len2 = data.length; _k < _len2; _k++) {
    item = data[_k];
    item.bottom = treeHeight - 1.8 * wordHeight;
    item.top = item.bottom - levelHeight(item.level);
    item.left = item.id * wordWidth;
    item.right = item.parent * wordWidth;
    item.mid = (item.right + item.left) / 2;
    item.diff = (item.right - item.left) / 4;
    item.arrow = item.top + (item.bottom - item.top) * .25;
  }
  svg.selectAll('text, path').remove();
  svg.attr('xmlns', 'http://www.w3.org/2000/svg');
  svg.attr('width', treeWidth + 2 * wordWidth / 3).attr('height', treeHeight + wordHeight / 2);
  words = svg.selectAll('.word').data(data).enter().append('text').text(function(d) {
    return d.word;
  }).attr('class', function(d) {
    return "word w" + d.id;
  }).attr('x', function(d) {
    return (wordWidth * d.id) + wordWidth/3;
  }).attr('y', treeHeight - wordHeight).on('mouseover', function(d) {
    svg.selectAll('.word, .dependency, .edge, .arrow').classed('active', false);
    svg.selectAll('.tag').attr('opacity', 0);
    svg.selectAll(".w" + d.id).classed('active', true);
    return svg.select(".tag.w" + d.id).attr('opacity', 1);
  }).on('mouseout', function(d) {
    svg.selectAll('.word, .dependency, .edge, .arrow').classed('active', false);
    return svg.selectAll('.tag').attr('opacity', 0);
  }).attr('text-anchor', 'middle');
  tags = svg.selectAll('.tag').data(data).enter().append('text').text(function(d) {
    return d.tag;
  }).attr('class', function(d) {
    return "tag w" + d.id;
  }).attr('x', function(d) {
    return wordWidth * d.id;
  }).attr('y', treeHeight).attr('opacity', 0).attr('text-anchor', 'middle').attr('font-size', '90%');
  edges = svg.selectAll('.edge').data(data).enter().append('path').filter(function(d) {
    return d.id;
  }).attr('class', function(d) {
    return "edge w" + d.id + " w" + d.parent;
  }).attr('d', function(d) {
    // console.log(d);
     return "M" + (d.left + wordWidth/3) + "," + d.bottom + " C" + (d.mid - d.diff) + "," + d.top + " " + (d.mid + d.diff) + "," + d.top + " " + (d.right + wordWidth/3) + "," + d.bottom;
    // if(d.id && d.parent) {

    // } else {
    //   return "M" + d.left + "," + d.bottom + " C" + (d.mid - d.diff) + "," + d.top + " " + (d.mid + d.diff) + "," + d.top + " " + wordWidth/3 + "," + d.bottom;
    // }
  }).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', '1.5');
  dependencies = svg.selectAll('.dependency').data(data).enter().append('text').filter(function(d) {
    return d.id;
  }).text(function(d) {
    return d.dependency;
  }).attr('class', function(d) {
    return "dependency w" + d.id + " w" + d.parent;
  }).attr('x', function(d) {
    return d.mid;
  }).attr('y', function(d) {
    return d.arrow - 7;
  }).attr('text-anchor', 'middle').attr('font-size', '90%');
  triangle = d3.svg.symbol().type('triangle-up').size(5);
  return arrows = svg.selectAll('.arrow').data(data).enter().append('path').filter(function(d) {
    return d.id;
  }).attr('class', function(d) {
    return "arrow w" + d.id + " w" + d.parent;
  }).attr('d', triangle).attr('transform', function(d) {
    return "translate(" + d.mid + ", " + d.arrow + ") rotate(" + (d.id < d.parent ? '' : '-') + "90)";
  }).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', '1.5');
};

maximum = function(array) {
  return Math.max(0, Math.max.apply(null, array));
};

under = function(edge1, edge2) {
  var ma, mi, _ref;
  _ref = edge1.id < edge1.parent ? [edge1.id, edge1.parent] : [edge1.parent, edge1.id], mi = _ref[0], ma = _ref[1];
  return edge1.id !== edge2.id && edge2.id >= mi && edge2.parent >= mi && edge2.id <= ma && edge2.parent <= ma;
};

function makeData(el, sentence, input) {
	var op= {}, words= sentence.split(" "), _id= 0, result= [], maxWordSize= 0;

  op['ROOT']= {
		id: 0,
		word: 'ROOT',
		level: 0
	};

	result.push(op['ROOT']);

	words.forEach(function(word) {
    if(word === ".") {
      return ;
    }

    if(word.indexOf("'") > -1) {
      var semiWords= word.split("'");
      semiWords.forEach(function(semiWord, i) {
        var wordObj= {
          id: ++_id,
          level: 1,
        }

        if(i=== semiWords.length-1) {

          wordObj.word= "'"+semiWord;
        } else {
          wordObj.word= semiWord;
        }

        op[semiWord]= wordObj;
        result.push(op[semiWord]);
      });


    } else {
      var wordObj= {
        id: ++_id,
        level: 1,
        word: word,
        // parent: 0
      };

      op[word]= wordObj;

      result.push(op[word]);
    }
	});

	input.forEach(function(token) {
		var parent= token[1], child= token[2], dependency= token[0];

		var childWordObject= op[child], parentWordObject= op[parent];

    if(childWordObject) {
      childWordObject.parent= parentWordObject.id;
      childWordObject.dependency= dependency;
    }

	});

  // console.log(result);
  // console.log(el);
	// console.log(result);
	drawTree(el, result);
}