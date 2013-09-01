define([
],

function() {

  var TwitView = Backbone.View.extend({
    id: 'twitView',
    
    render: function() {
      var html = '<div class="twit-item">' +
                 '<div class="header">' +
                 '<img class="icon" src="twit_icon.jpg"></img>' +
                 '<strong class="user-full-name">Kim, InGee</strong>' +
                 '<small class="user-id">@ingeeKim</small>' +
                 '</div>' +
                 '<p class="text">' +
                 '런던의 숨은 보석, 코톨드 갤러리.. 정말이지 코톨드 갤러리는 \'보석\'이라는 칭송이 아깝지 않은, 인상파 화가들의 별처럼 빛나는  명작들을 모아 놓은 알찬 컬렉션이다. (런던 미술관 산책/ 전원경..)' +
                 '</p>' +
                 '<div class="footer">' +
                 '<small class="time">8월26일 23:05</small>' +
                 '</div>' +
                 '</div>';
      this.$el.html(html);
    }
  });

  return Router;

});
