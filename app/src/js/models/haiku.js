'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    title: '',
    line1: '',
    line2: '',
    line3: '',
    author: 'Anonymous'
  }
});
