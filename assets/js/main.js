;(function () {

  'use strict';

  const wishlist = [
    { link: 'http://l.timw.co/2eHigg0', title: 'Alton Brown: EveryDayCook'},
    { link: 'http://l.timw.co/2eHfXda', title: 'India Pale Ale Experiment'},
    { link: 'http://l.timw.co/2eHmqot', title: 'Electric Tea Kettle'},
    { link: 'http://l.timw.co/2eHocpz', title: 'Glencairn Crystal'},
    { link: 'http://l.timw.co/2eHjAQ1', title: 'Rosewill Mechanical Keyboard (Cherry MX Brown)'},
    { link: '', title: ''}
  ];

  const wlCont = document.getElementById('wishlist');
  const template = data => {
    return `
      <li class="post">
        <h2><a target="_blank" href="${data.link}">${data.title}</a></h2>
      </li>
    `;
  };

  function init () {
    let html = '';
    wishlist.forEach( item => {
      html += template(item);
    });
    wlCont.innerHTML = html;
  }

  init();

}());