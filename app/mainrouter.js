define( [
  'backbone',
  'multipage-router'
],

function(Backbone, MultipageRouter) {

  return {
    launch: function() {
      console.log('application launch() started');
      
      var MainRouter = MultipageRouter.extend( {
        pages: {
          'article-page': {
            fragment: [ '', 'articles' ],
            el: '#article-vw',
            render: function() {
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
