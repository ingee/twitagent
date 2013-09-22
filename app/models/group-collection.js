define([
  'backbone',
  'models/group-model'
],

function(Backbone, GroupModel) {

  var GroupCollection = Backbone.Collection.extend({
    model: GroupModel,
    url: 'api/get_group_list.php'
    //url: 'data/groups.json'
  });

  return GroupCollection;

});
