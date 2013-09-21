define([
  'backbone',
  'models/twit-model'
],

function(Backbone, TwitModel) {

  var TwitCollection = Backbone.Collection.extend({
    model: TwitModel,
    url: 'api/get_home_timeline.php'
  });

  return TwitCollection;

});
