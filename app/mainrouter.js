define( [
  'backbone',
  'views/twitvw',
  'multipage-router'
],

function(Backbone, TwitView, MultipageRouter) {

  return {
    launch: function() {
      console.log('application launch() started');
      
      var MainRouter = MultipageRouter.extend( {
        pages: {
          'article-page': {
            fragment: [ '', 'articles' ],
            el: '#article-vw',
            render: function() {
              var vw = new TwitView();
              vw.render();
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
        }
      } );
    
      new MainRouter();
      Backbone.history.start();
    }
  };

} );
