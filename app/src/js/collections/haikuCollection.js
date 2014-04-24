'use strict';

var Backbone = require('backbone');
var Haiku    = require('../models/haiku');
var env      = require('env');

module.exports = Backbone.Collection.extend({
  model: 'Haiku',
  urlRoot: env.serverUrl + '/haikus'
});
