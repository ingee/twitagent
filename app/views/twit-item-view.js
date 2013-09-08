define([
  'backbone',
  'template!templates/twit-item-view'
],

function(Backbone, TwitItemTemplate) {

  var TwitItemView = Backbone.View.extend({
    tagName: 'div',

    render: function() {
      this.$el.html(TwitItemTemplate({ twit: this.model.toJSON() }));
      return this;
    }
  });

  return TwitItemView;

});
