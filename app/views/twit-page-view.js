define([
  'backbone',
  'template!templates/twit-page-view',
  'views/twit-view',
  'models/twit-collection',
  'widget-listview'
],

function(
  Backbone, 
  TwitPageTemplate, 
  TwitView, 
  TwitCollection,
  ListView
) {

  var TwitPageView = Backbone.View.extend({
    el: '#twit-vw',
    isFirst: true,
    groupID: 0,

    render: function(groupID) {
      if (this.groupID != groupID) {
        this.$el.html(TwitPageTemplate());
        
        var twitCol = new TwitCollection();
        twitCol.initUrl(groupID);
        this.listView = new ListView({
          el: '#twit-list',
          collection: twitCol,
          itemView: TwitView,
          optimization: false
        });

        this.listView.render();
        console.log("TwitPageView.render( groupID="+ groupID+ " ) called");
        this.groupID = groupID;
      }
      return this;
    }
  });

  return TwitPageView;

});
