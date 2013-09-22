define([
  'backbone',
  'models/twit-model'
],

function(Backbone, TwitModel) {

  var TwitCollection = Backbone.Collection.extend({
    model: TwitModel,
    url: 'api/get_home_timeline.php',
    
    initUrl: function(groupID) {
      if (groupID) {
        //this.url = "data/group-twits.json";
        this.url = "api/get_group_timeline.php?group_id="+ groupID;
      }
      else {
        //this.url = "data/twits.json";
        this.url = "api/get_home_timeline.php";
      }
    }
  });

  return TwitCollection;

});
