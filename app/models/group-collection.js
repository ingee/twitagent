define([
  'backbone',
  'models/group-model'
],

function(Backbone, GroupModel) {

  var GroupCollection = Backbone.Collection.extend({
    model: GroupModel,
    url: 'data/groups.json'
  });

  return GroupCollection;

});
