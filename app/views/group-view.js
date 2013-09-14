define([
  'backbone',
  'template!templates/group-item-view'
],

function(Backbone, GroupItemTemplate) {

  var GroupItemView = Backbone.View.extend({
    tagName: 'li',

    render: function() {
      this.$el.html(GroupItemTemplate(this.model.toJSON()));
      return this;
    }
  });

  return GroupItemView;

});
