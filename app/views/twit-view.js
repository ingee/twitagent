define([
  'backbone',
  'template!templates/twit-view'
],

function(Backbone, TwitViewTemplate) {

  var TwitView = Backbone.View.extend({
    tagName: 'li',

    render: function() {
      this.$el.html(TwitViewTemplate(this.model.toJSON()));
      return this;
    }
  });

  return TwitView;

});
