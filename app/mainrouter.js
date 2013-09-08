define( [
  'backbone',
  'views/twit-page-view',
  'multipage-router'
],

function(Backbone, TwitPageView, MultipageRouter) {

  return {
    launch: function() {
      console.log('application launch() started');
      
      var MainRouter = MultipageRouter.extend( {
        pages: {
          'twit-page': {
            fragment: [ '', 'twits' ],
            el: '#twit-vw',
            render: function() {
              this.twitPageView.render();
            }
          },
          'group-page': {
            fragment: [ 'groups' ],
            el: '#group-vw'
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
        }
      } );
    
      new MainRouter();
      Backbone.history.start();
    }
  };

} );
