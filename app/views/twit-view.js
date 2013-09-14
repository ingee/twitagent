define([
  'backbone',
  'template!templates/twit-item-view'
],

function(Backbone, TwitItemTemplate) {

  var TwitItemView = Backbone.View.extend({
    tagName: 'li',

    render: function() {
      this.$el.html(TwitItemTemplate(this.model.toJSON()));
      return this;
    }
  });

  return TwitItemView;

});
