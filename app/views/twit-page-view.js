define([
  'backbone',
  'template!templates/twit-page-view',
  'views/twit-item-view',
  'models/twit-collection',
  'widget-listview'
],

function(
  Backbone, 
  TwitPageTemplate, 
  TwitItemView, 
  TwitCollection,
  ListView
) {

  var TwitPageView = Backbone.View.extend({
    el: '#twit-vw',

    isFirst: true,

    render: function() {
      var self = this;

      // this.listView가 존재하지 않은 경우만 new로 생성
      this.listView = this.listView || new ListView({
        el: '#twit-list',
        collection: new TwitCollection(),
        itemView: TwitItemView,
        optimization: false,
        scrollEndAction: function() {
          console.log("scrollEnd Callback");
          self.listView.render();
        }
      });

      // 최초에만 listView 렌더링 리스트뷰의 렌더링은 itemView를 계속 append.
      this.isFirst && this.listView.render();
      this.isFirst = false;
      return this;
    },

    initialize: function() {
      this.$el.html(TwitPageTemplate());
    }
  });

  return TwitPageView;

});
