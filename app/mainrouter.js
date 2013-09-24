﻿define( [
  'backbone',
  'views/twit-page-view',
  'views/group-page-view',
  'multipage-router',
  'widget-plugins'
],

function(
  Backbone,
  TwitPageView,
  GroupPageView,
  MultipageRouter
)
{

  return {
    launch: function() {
      console.log('application launch() started');

      var MainRouter = MultipageRouter.extend( {
        pages: {
          'twit-page': {
            fragment: [ '', 'twits', "groups/:id" ],
            el: '#twit-vw',
            render: function(groupID) {
              this.twitPageView.render(groupID);
            }
          },
          'group-page': {
            fragment: [ 'groups' ],
            el: '#group-vw',
            render: function() {
              this.groupPageView.render();
            }
          },
          'default': {
            el: '#default-vw'
          }
        },

        transitions: {
          'twit-page:group-page': 'flip',
          'twit-page:default': 'flip',
          'group-page:default': 'flip'
        },

        initialize: function() {
          console.log('router.initialize()');
          this.twitPageView = new TwitPageView();
          this.groupPageView = new GroupPageView();
        }
      } );

      new MainRouter();
      Backbone.history.start();
    }
  };

} );
