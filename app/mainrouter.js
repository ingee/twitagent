define( [
  'backbone',
  'models/twit-model',
  'views/twit-view',
  'multipage-router'
],

function(Backbone, TwitModel, TwitView, MultipageRouter) {

  return {
    launch: function() {
      console.log('application launch() started');
      
      var MainRouter = MultipageRouter.extend( {
        pages: {
          'article-page': {
            fragment: [ '', 'articles' ],
            el: '#article-vw',
            render: function() {
              this.twitView.render();
            }
          },
          'list-page': {
            fragment: [ 'lists' ],
            el: '#list-vw',
            render: function() {
            }
          },
          'default': {
            el: '#def-vw'
          }
        },
        
        transitions: {
          'article-page:list-page': 'flip',
          'article-page:default': 'flip',
          'list-page:default': 'flip'
        },
        
        initialize: function() {
          console.log('router.initialize()');
          this.twitModel = new TwitModel();
          this.twitView = new TwitView({ model: this.twitModel });
        }
      } );
    
      new MainRouter();
      Backbone.history.start();
    }
  };

} );
