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

    render: function() {
      this.$el.html(TwitPageTemplate());

      this.listView = new ListView({
        el: '#twit-list',
        collection: new TwitCollection(),
        itemView: TwitItemView,
        optimization: false
      });
      this.listView.render();

      return this;
    },

    initialize: function() {
    }
  });

  return TwitPageView;

});
