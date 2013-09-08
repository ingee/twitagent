define([
  'backbone',
  'models/twit-item-model'
],

function(Backbone, TwitItemModel) {

  var TwitCollection = Backbone.Collection.extend({
    model: TwitItemModel,
    url: '/data/twits.json'
  });

  return TwitCollection;

});
