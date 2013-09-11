define([
  'backbone',
  'template!templates/group-page-view',
  'widget-listview'
],

function(
  Backbone, 
  GroupPageTemplate, 
  ListView
) {

  var GroupPageView = Backbone.View.extend({
    el: '#group-vw',

    render: function() {
      //this.listView.render();
      return this;
    },

    initialize: function() {
      this.$el.html(GroupPageTemplate());
      /*
      this.listView = new ListView({
        el: '#twit-list',
        collection: new TwitCollection(),
        itemView: TwitItemView,
        optimization: false
      });
      */
    }
  });

  return GroupPageView;

});
