define([
  'backbone',
  'template!templates/twit-view'
],

function(Backbone, twitVwTemplate) {

  var TwitView = Backbone.View.extend({
    el: '#article-item-vw',

    render: function() {
      this.$el.html(twitVwTemplate({ twit: this.model.toJSON() }));
    }
  });

  return TwitView;

});
