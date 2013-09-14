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

    render: function() {
      // 최초에만 listView 렌더링 리스트뷰의 렌더링은 itemView를 계속 append.
      if (this.isFirst) {
        this.listView.render();
        this.isFirst = false;
      }
      return this;
    },

    initialize: function() {
      this.$el.html(TwitPageTemplate());
      this.listView = new ListView({
        el: '#twit-list',
        collection: new TwitCollection(),
        itemView: TwitView,
        optimization: false
      });
    }
  });

  return TwitPageView;

});
