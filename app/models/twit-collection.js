define([
  'backbone',
  'models/twit-model'
],

function(Backbone, TwitModel) {

  var TwitCollection = Backbone.Collection.extend({
    model: TwitModel,
    url: 'data/twits.json'
  });

  return TwitCollection;

});
