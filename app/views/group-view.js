define([
  'backbone',
  'template!templates/group-view'
],

function(Backbone, GroupViewTemplate) {

  var GroupView = Backbone.View.extend({
    tagName: 'li',

    render: function() {
      this.$el.html(GroupViewTemplate(this.model.toJSON()));
      return this;
    }
  });

  return GroupView;

});
