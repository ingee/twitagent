define([
  'backbone'
],

function(Backbone) {

  var GroupModel = Backbone.Model.extend({
    defaults: {
      name: 'group-name',
      memberCount: 0,
      groupID: 0
    }
  });

  return GroupModel;

});
