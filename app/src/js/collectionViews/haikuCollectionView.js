'use strict';

var Backbone  = require('backbone');
var $         = require('jquery');
var HaikuView = require('../views/haikuView.js');

module.exports = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.addAll, this);
  },

  addHaiku: function(haiku) {
    var haikuView = new HaikuView({model: haiku});
    this.$el.append(haikuView.el);
  },

  addAll: function() {
    this.collection.forEach(this.addHaiku);
  },

  render: function() {
    this.addAll();
  }
});
