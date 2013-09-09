define([
  'backbone',
  'template!templates/twit-item-view'
],

function(Backbone, TwitItemTemplate) {

  var TwitItemView = Backbone.View.extend({
    tagName: 'li', // 부모 엘리먼트가 ul이므로 리스트 아이템은 li 엘리먼트로 변경

    render: function() {
      this.$el.html(TwitItemTemplate({ twit: this.model.toJSON() }));
      return this;
    }
  });

  return TwitItemView;

});
