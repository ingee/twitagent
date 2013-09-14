define([
  'backbone',
  'template!templates/group-page-view',
  'views/group-item-view',
  'models/twit-collection',
  'widget-listview'
],

function(
  Backbone, 
  GroupPageTemplate, 
  GroupItemView,
  TwitCollection,
  ListView
) {

  var GroupPageView = Backbone.View.extend({
    el: '#group-vw',
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
      this.$el.html(GroupPageTemplate());
      this.listView = new ListView({
        el: '#group-list',
        collection: new TwitCollection(),
        itemView: GroupItemView,
        optimization: false
      });
    }
  });

  return GroupPageView;

});
