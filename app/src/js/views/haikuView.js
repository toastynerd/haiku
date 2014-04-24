'use strict';

var Backbone = require('backbone');
var Haiku    = require('../models/haiku');
var $        = require('jquery');
Backbone.$   = $;

module.exports = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var haikuAttributes = this.model.toJSON();
    var template = require('../../templates/haiku.hbs');
    this.$el.html(template(haikuAttributes));
    return this;
  }
});
