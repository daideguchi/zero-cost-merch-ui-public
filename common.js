(function(){
  function normalizedBase(value) {
    value = String(value || '').trim().replace(/\/$/, '');
    if (!value || value === 'null') return '';
    return value;
  }
  function publicPath() {
    var prefix = String(window.ZERO_COST_PUBLIC_PATH_PREFIX || '').trim().replace(/\/$/, '');
    var path = String(window.location.pathname || '/');
    if (prefix && path.indexOf(prefix + '/') === 0) path = path.slice(prefix.length);
    if (prefix && path === prefix) path = '/';
    if (!path || path === '/') return '/index.html';
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
    {page:'index',    label:'ホーム',          href:'index.html'},
    {page:'intake',   label:'④⑤ 写真・AI識別', href:'intake_cards.html'},
    {page:'ops',      label:'⑥ 出品準備',      href:'ops.html'},
    {page:'channel_listings', label:'出品状況', href:'channel_listings.html'},
    {page:'shipping', label:'⑧ 集荷',          href:'shipping.html'},
    {page:'routing',  label:'販路',             href:'routing.html'},
    {page:'roles',    label:'役割',             href:'roles.html'}
  ];
  var activeBoxId = '';

  function normalizeBoxId(value) {
    return String(value || '').trim().toUpperCase();
  }

  function boxFromMid(mid) {
    var match = String(mid || '').trim().toUpperCase().match(/^(BOX-[A-Z0-9]+)-ITEM-/);
    return match ? match[1] : '';
  }

  function boxFromHref(href) {
    try {
      var target = new URL(href, window.location.href);
      return normalizeBoxId(target.searchParams.get('box') || boxFromMid(target.searchParams.get('mid') || ''));
    } catch (_) {
      return '';
    }
  }

  function currentBoxId() {
    if (activeBoxId) return activeBoxId;
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
    boxId = normalizeBoxId(boxId);
    if (boxId) {
      try {
        if (window.localStorage) window.localStorage.setItem('zeroCostSelectedBox', boxId);
      } catch (_) {}
    }
    activeBoxId = boxId;
    return boxId;
  }

  function isLocalPageHref(href) {
    if (!href || href.charAt(0) === '#') return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;
    try {
      var target = new URL(href, window.location.href);
      if (target.origin !== window.location.origin) return false;
      return /(?:\/|\.html?)$/i.test(target.pathname || '');
    } catch (_) {
      return false;
    }
  }

  function appendBoxQuery(href, boxId) {
    if (!boxId || !href) return href;
    try {
      var target = new URL(href, window.location.href);
      target.searchParams.set('box', boxId);
      var path = String(window.location.pathname || '/');
      var baseDir = path.slice(0, path.lastIndexOf('/') + 1) || '/';
      if (target.origin === window.location.origin && target.pathname.indexOf(baseDir) === 0) {
        return './' + target.pathname.slice(baseDir.length) + target.search + target.hash;
      }
      return target.href;
    } catch (_) {
      return href;
    }
  }

  function setCurrentBoxId(boxId, options) {
    options = options || {};
    activeBoxId = normalizeBoxId(boxId);
    try {
      if (window.localStorage) {
        if (activeBoxId) window.localStorage.setItem('zeroCostSelectedBox', activeBoxId);
        else window.localStorage.removeItem('zeroCostSelectedBox');
      }
    } catch (_) {}
    if (options.updateUrl) {
      try {
        var params = new URLSearchParams(window.location.search);
        if (activeBoxId) params.set('box', activeBoxId);
        else params.delete('box');
        var query = params.toString();
        window.history.replaceState(null, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
      } catch (_) {}
    }
    syncBoxLinks(document);
    return activeBoxId;
  }

  function linkWithBox(href, boxId, options) {
    options = options || {};
    if (!isLocalPageHref(href)) return href;
    var normalized = normalizeBoxId(boxId || currentBoxId());
    if (!normalized) return href;
    if (!options.force) {
      var explicit = boxFromHref(href);
      if (explicit) normalized = explicit;
    }
    return appendBoxQuery(href, normalized);
  }

  function syncBoxLinks(root) {
    var boxId = currentBoxId();
    if (!boxId) return;
    var scope = root || document;
    Array.prototype.slice.call(scope.querySelectorAll('a[href][data-zero-cost-current-box="1"], .hq-nav a[href]')).forEach(function(link) {
      var href = link.getAttribute('href') || '';
      var midBox = '';
      try {
        var target = new URL(href, window.location.href);
        midBox = boxFromMid(target.searchParams.get('mid') || '');
      } catch (_) {}
      link.setAttribute('href', appendBoxQuery(href, midBox || boxId));
    });
  }

  var current = document.documentElement.dataset.page || '';
  var header = document.querySelector('.hq-header');
  if (!header) return;
  var boxId = currentBoxId();
  var nav = header.querySelector('.hq-nav') || document.createElement('nav');
  nav.className = 'hq-nav';
  nav.setAttribute('aria-label', '0円仕入れ物販 ナビゲーション');
  nav.innerHTML = PAGE_LINKS.map(function(l){
    return '<a data-zero-cost-current-box="1" href="'+appendBoxQuery(l.href, boxId)+'"'+(l.page===current?' class="active"':'')+'>'+l.label+'</a>';
  }).join('');
  if (!nav.parentNode) header.appendChild(nav);
  window.zeroCostCurrentBoxId = currentBoxId;
  window.zeroCostSetBoxId = setCurrentBoxId;
  window.zeroCostLinkWithBox = linkWithBox;
  window.zeroCostSyncBoxLinks = syncBoxLinks;
  document.addEventListener('click', function(event) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download')) return;
    var href = link.getAttribute('href') || '';
    if (!isLocalPageHref(href)) return;
    var targetBox = boxFromHref(href) || currentBoxId();
    if (!targetBox) return;
    var nextHref = appendBoxQuery(href, targetBox);
    if (nextHref === href) return;
    event.preventDefault();
    window.location.href = nextHref;
  }, true);
})();
