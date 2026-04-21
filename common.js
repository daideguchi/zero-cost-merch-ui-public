(function(){
  function normalizedBase(value) {
    value = String(value || '').trim().replace(/\/$/, '');
    if (!value || value === 'null') return '';
    return value;
  }
  function publicPath() {
    var prefix = String(window.ZERO_COST_PUBLIC_PATH_PREFIX || '').trim();
    var path = String(window.location.pathname || '/');
    if (prefix && path.indexOf(prefix) === 0) path = path.slice(prefix.length);
    if (!path) path = '/';
    if (path.charAt(0) !== '/') path = '/' + path;
    return path;
  }
  var appBase = normalizedBase(window.ZERO_COST_APP_BASE || window.ZERO_COST_API_BASE || '');
  var currentOrigin = normalizedBase(window.location.origin || '');
  if (appBase && currentOrigin && appBase !== currentOrigin) {
    try {
      var target = new URL(publicPath() + window.location.search + window.location.hash, appBase);
      if (target.toString() !== window.location.href) {
        window.location.replace(target.toString());
        return;
      }
    } catch (_) {}
  }
  var PAGE_LINKS = [
    {page:'index',    label:'ホーム',          href:'./index.html'},
    {page:'intake',   label:'④⑤ 写真·AI識別',  href:'./intake_cards.html'},
    {page:'ops',      label:'⑥ 出品準備',      href:'./ops.html'},
    {page:'channel_listings', label:'出品状況', href:'./channel_listings.html'},
    {page:'shipping', label:'⑧ 集荷',          href:'./shipping.html'},
    {page:'routing',  label:'販路',             href:'./routing.html'}
  ];
  function boxFromMid(mid) {
    var match = String(mid || '').trim().toUpperCase().match(/^(BOX-[A-Z0-9]+)-ITEM-/);
    return match ? match[1] : '';
  }
  function currentBoxId() {
    var boxId = '';
    try {
      var params = new URLSearchParams(window.location.search);
      boxId = params.get('box') || boxFromMid(params.get('mid') || '');
    } catch (_) {}
    if (!boxId) {
      try {
        boxId = window.localStorage ? (window.localStorage.getItem('zeroCostSelectedBox') || '') : '';
      } catch (_) {}
    }
    boxId = String(boxId || '').trim().toUpperCase();
    if (boxId) {
      try {
        if (window.localStorage) window.localStorage.setItem('zeroCostSelectedBox', boxId);
      } catch (_) {}
    }
    return boxId;
  }
  function appendBoxQuery(href, boxId) {
    if (!boxId || !href) return href;
    try {
      var target = new URL(href, window.location.href);
      target.searchParams.set('box', boxId);
      return target.pathname + target.search + target.hash;
    } catch (_) {
      return href;
    }
  }
  var current = document.documentElement.dataset.page || '';
  var header = document.querySelector('.hq-header');
  if (!header) return;
  var boxId = currentBoxId();
  var nav = document.createElement('nav');
  nav.className = 'hq-nav';
  nav.innerHTML = PAGE_LINKS.map(function(l){
    return '<a href="'+appendBoxQuery(l.href, boxId)+'"'+(l.page===current?' class="active"':'')+'>'+l.label+'</a>';
  }).join('');
  header.appendChild(nav);
})();
