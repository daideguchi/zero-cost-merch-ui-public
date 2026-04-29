(function(){
  var PAGE_LINKS = [
    {page:'index',            kicker:'箱の入口',   label:'箱を選ぶ',     href:'index.html'},
    {page:'intake',           kicker:'写真確認',   label:'AIと実物',     href:'intake_cards.html'},
    {page:'ops',              kicker:'出品前',     label:'出品準備',     href:'ops.html'},
    {page:'channel_listings', kicker:'公開管理',   label:'出品状況',     href:'channel_listings.html'},
    {page:'shipping',         kicker:'発送',       label:'集荷と追跡',   href:'shipping.html'},
    {page:'routing',          kicker:'販路比較',   label:'販路判断',     href:'routing.html'},
    {page:'roles',            kicker:'担当',       label:'役割分担',     href:'roles.html'}
  ];
  var STORAGE_BOX_SCOPE_KEY = 'zeroCostSelectedBoxScope';
  var STORAGE_BOX_ID_KEY = 'zeroCostSelectedBox';
  var STORAGE_BOX_LABEL_KEY = 'zeroCostSelectedBoxLabel';
  var STORAGE_BOX_SUMMARIES_KEY = 'zeroCostBoxSummariesV1';
  var activeScopeId = '';
  var activeBoxLabel = '';
  var cachedBoxSummaries = null;

  function normalizeBoxScope(value) {
    return String(value || '').trim().toUpperCase();
  }

  function isAllScope(scopeId) {
    return normalizeBoxScope(scopeId) === 'ALL';
  }

  function normalizeBoxId(value) {
    var scopeId = normalizeBoxScope(value);
    return scopeId && !isAllScope(scopeId) ? scopeId : '';
  }

  function normalizeBoxLabel(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function boxFromMid(mid) {
    var match = String(mid || '').trim().toUpperCase().match(/^(BOX-[A-Z0-9]+)-ITEM-/);
    return match ? match[1] : '';
  }

  function numberFromPrice(value) {
    if (value == null) return null;
    var text = String(value).trim();
    if (!text) return null;
    var cleaned = text.replace(/[^\d.-]/g, '');
    if (!cleaned) return null;
    var parsed = Number(cleaned);
    return isFinite(parsed) && !isNaN(parsed) ? parsed : null;
  }

  function formatYen(value) {
    var parsed = Number(value || 0);
    if (!isFinite(parsed) || isNaN(parsed)) return '未集計';
    return '¥' + Math.round(parsed).toLocaleString('ja-JP');
  }

  function priceFromItem(item) {
    var commerce = item && item.commerce || {};
    var resolved = item && item.resolved || {};
    return numberFromPrice(
      commerce.market_floor_price
      || item && item.market_floor_price
      || item && item.minimum_price
      || commerce.listing_price
      || item && item.listing_price
      || resolved.price_override
    );
  }

  function summarizeItems(items) {
    var prices = [];
    (items || []).forEach(function(item) {
      var price = priceFromItem(item);
      if (price == null || price <= 0) return;
      prices.push(price);
    });
    prices.sort(function(a, b) { return b - a; });
    var totalValue = prices.reduce(function(sum, price) { return sum + price; }, 0);
    var topSixValue = prices.slice(0, 6).reduce(function(sum, price) { return sum + price; }, 0);
    return {
      totalItems: (items || []).length,
      pricedItems: prices.length,
      totalValue: totalValue,
      topSixValue: topSixValue,
      averageValue: prices.length ? Math.round(totalValue / prices.length) : 0
    };
  }

  function intakeBoxes(snapshot) {
    if (!snapshot || typeof snapshot !== 'object') return [];
    if (Array.isArray(snapshot.boxes) && snapshot.boxes.length) return snapshot.boxes.slice();
    if (snapshot.box_id) return [snapshot];
    return [];
  }

  function writeStoredSummaries(summaryMap) {
    cachedBoxSummaries = summaryMap || null;
    try {
      if (!window.localStorage) return;
      if (summaryMap) window.localStorage.setItem(STORAGE_BOX_SUMMARIES_KEY, JSON.stringify(summaryMap));
      else window.localStorage.removeItem(STORAGE_BOX_SUMMARIES_KEY);
    } catch (_) {}
  }

  function buildSummaryMapFromSnapshot(snapshot) {
    var boxes = intakeBoxes(snapshot);
    if (!boxes.length) return null;
    var summaryMap = {};
    var allItems = [];
    boxes.forEach(function(box) {
      var boxId = normalizeBoxScope(box && box.box_id || '');
      if (!boxId) return;
      var items = Array.isArray(box && box.items) ? box.items.slice() : [];
      allItems = allItems.concat(items);
      summaryMap[boxId] = summarizeItems(items);
    });
    summaryMap.ALL = summarizeItems(allItems);
    return summaryMap;
  }

  function readStoredSummaries() {
    if (cachedBoxSummaries) return cachedBoxSummaries;
    try {
      if (!window.localStorage) return null;
      var raw = window.localStorage.getItem(STORAGE_BOX_SUMMARIES_KEY);
      if (!raw) return null;
      cachedBoxSummaries = JSON.parse(raw);
      return cachedBoxSummaries;
    } catch (_) {
      return null;
    }
  }

  function ensureBoxSummaries() {
    var liveSummary = buildSummaryMapFromSnapshot(window.ZERO_COST_INTAKE);
    if (liveSummary) {
      writeStoredSummaries(liveSummary);
      return liveSummary;
    }
    return readStoredSummaries();
  }

  function boxSummaryForScope(scopeId) {
    var summaryMap = ensureBoxSummaries();
    if (!summaryMap) return null;
    var normalizedScope = normalizeBoxScope(scopeId);
    if (normalizedScope && summaryMap[normalizedScope]) return summaryMap[normalizedScope];
    if (isAllScope(normalizedScope) && summaryMap.ALL) return summaryMap.ALL;
    return null;
  }

  function renderSummaryStats(summary) {
    if (!summary || !summary.totalItems) return '';
    var parts = [
      '<span class="hq-box-stat"><span class="hq-box-stat-label">点数</span><span class="hq-box-stat-value">' + summary.totalItems + '点</span></span>'
    ];
    if (summary.pricedItems) {
      parts.push('<span class="hq-box-stat"><span class="hq-box-stat-label">相場下限</span><span class="hq-box-stat-value">' + formatYen(summary.totalValue) + '</span></span>');
      parts.push('<span class="hq-box-stat"><span class="hq-box-stat-label">上位6点</span><span class="hq-box-stat-value">' + formatYen(summary.topSixValue) + '</span></span>');
    }
    return '<div class="hq-box-stats">' + parts.join('') + '</div>';
  }

  function renderSummaryHeadline(summary) {
    if (!summary || !summary.totalItems) return '';
    var parts = [summary.totalItems + '点'];
    if (summary.pricedItems) {
      parts.push('相場下限 ' + formatYen(summary.totalValue));
      parts.push('上位6点 ' + formatYen(summary.topSixValue));
    }
    return '<div class="hq-box-summary-line">' + parts.join(' / ') + '</div>';
  }

  function inferBoxLabel(scopeId) {
    var normalizedScope = normalizeBoxScope(scopeId);
    if (isAllScope(normalizedScope)) return '全商品';
    var boxId = normalizeBoxId(normalizedScope);
    if (!boxId) return '';
    var match = boxId.match(/^BOX-([A-Z]+|\d+)$/i);
    if (!match) return boxId;
    var code = String(match[1] || '').toUpperCase();
    return /^[A-Z]+$/.test(code) ? ('英字箱 ' + code) : ('数字箱 ' + code);
  }

  function boxFromHref(href) {
    try {
      var target = new URL(href, window.location.href);
      return normalizeBoxId(target.searchParams.get('box') || boxFromMid(target.searchParams.get('mid') || ''));
    } catch (_) {
      return '';
    }
  }

  function readStoredState() {
    try {
      if (!window.localStorage) return { scopeId: '', boxId: '', label: '' };
      return {
        scopeId: normalizeBoxScope(window.localStorage.getItem(STORAGE_BOX_SCOPE_KEY) || ''),
        boxId: normalizeBoxId(window.localStorage.getItem(STORAGE_BOX_ID_KEY) || ''),
        label: normalizeBoxLabel(window.localStorage.getItem(STORAGE_BOX_LABEL_KEY) || '')
      };
    } catch (_) {
      return { scopeId: '', boxId: '', label: '' };
    }
  }

  function persistBoxState(scopeId, label) {
    var normalizedScope = normalizeBoxScope(scopeId);
    var normalizedBoxId = normalizeBoxId(normalizedScope);
    var normalizedLabel = normalizeBoxLabel(label) || inferBoxLabel(normalizedScope);
    try {
      if (!window.localStorage) return;
      if (normalizedScope) window.localStorage.setItem(STORAGE_BOX_SCOPE_KEY, normalizedScope);
      else window.localStorage.removeItem(STORAGE_BOX_SCOPE_KEY);
      if (normalizedBoxId) window.localStorage.setItem(STORAGE_BOX_ID_KEY, normalizedBoxId);
      else window.localStorage.removeItem(STORAGE_BOX_ID_KEY);
      if (normalizedLabel) window.localStorage.setItem(STORAGE_BOX_LABEL_KEY, normalizedLabel);
      else window.localStorage.removeItem(STORAGE_BOX_LABEL_KEY);
    } catch (_) {}
  }

  function currentBoxState() {
    if (activeScopeId || activeBoxLabel) {
      return {
        scopeId: activeScopeId,
        boxId: normalizeBoxId(activeScopeId),
        label: activeBoxLabel || inferBoxLabel(activeScopeId)
      };
    }
    var scopeId = '';
    var label = '';
    try {
      var params = new URLSearchParams(window.location.search);
      scopeId = params.get('box') || boxFromMid(params.get('mid') || '');
    } catch (_) {}
    scopeId = normalizeBoxScope(scopeId);
    if (!scopeId) {
      var stored = readStoredState();
      scopeId = stored.scopeId || stored.boxId || '';
      label = stored.label || '';
    }
    if (!label) label = inferBoxLabel(scopeId);
    activeScopeId = scopeId;
    activeBoxLabel = label;
    if (scopeId || label) {
      persistBoxState(scopeId, label);
    }
    return {
      scopeId: scopeId,
      boxId: normalizeBoxId(scopeId),
      label: label
    };
  }

  function currentBoxId() {
    return currentBoxState().boxId;
  }

  function currentBoxLabel() {
    return currentBoxState().label;
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
    activeScopeId = normalizeBoxScope(boxId);
    activeBoxLabel = normalizeBoxLabel(options.label) || inferBoxLabel(activeScopeId);
    persistBoxState(activeScopeId, activeBoxLabel);
    if (options.updateUrl) {
      try {
        var params = new URLSearchParams(window.location.search);
        if (activeScopeId) params.set('box', activeScopeId);
        else params.delete('box');
        var query = params.toString();
        window.history.replaceState(null, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
      } catch (_) {}
    }
    syncBoxLinks(document);
    renderBoxContext(header);
    updateStickyOffset(header);
    return currentBoxId();
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

  function boxPickerHref() {
    var boxId = currentBoxId();
    return boxId ? appendBoxQuery('index.html', boxId) : 'index.html';
  }

  function renderBoxContext(targetHeader) {
    if (!targetHeader) return;
    var state = currentBoxState();
    var summary = boxSummaryForScope(state.scopeId);
    var boxContext = targetHeader.querySelector('.hq-box-context') || document.createElement('div');
    boxContext.className = 'hq-box-context'
      + (state.boxId ? '' : ' is-empty')
      + (isAllScope(state.scopeId) ? ' is-all' : '');
    var title = state.boxId
      ? '選択中の箱'
      : (isAllScope(state.scopeId) ? '全商品表示中' : '箱未選択');
    var name = state.label || (isAllScope(state.scopeId) ? '全商品' : '箱を選ぶ');
    var meta = state.boxId
      ? (state.boxId + ' ・ 次の画面にもこの箱を引き継ぎます')
      : (isAllScope(state.scopeId)
        ? '箱をまたぐ表示です。箱を固定すると画面ごとの判断がそろいます。'
        : 'まず箱を固定すると、出品準備から発送まで同じ箱で追えます。');
    var actionLabel = state.boxId ? '箱を切り替える' : '箱を選ぶ';
    boxContext.innerHTML = ''
      + '<div class="hq-box-copy">'
      + '<div class="hq-box-kicker">' + title + '</div>'
      + '<div class="hq-box-main">'
      + '<span class="hq-box-name">' + name + '</span>'
      + (state.boxId ? '<span class="hq-box-id">' + state.boxId + '</span>' : '')
      + '</div>'
      + renderSummaryHeadline(summary)
      + '<div class="hq-box-meta">' + meta + '</div>'
      + renderSummaryStats(summary)
      + '</div>'
      + '<a class="hq-box-action" href="' + boxPickerHref() + '">'
      + actionLabel
      + '</a>';
    if (!boxContext.parentNode) targetHeader.appendChild(boxContext);
  }

  function updateStickyOffset(targetHeader) {
    if (!targetHeader || !document.documentElement || !document.documentElement.style) return;
    window.requestAnimationFrame(function() {
      var height = Math.max(48, Math.ceil(targetHeader.getBoundingClientRect().height || 0));
      document.documentElement.style.setProperty('--hq-sticky-offset', height + 'px');
    });
  }

  var current = document.documentElement.dataset.page || '';
  var header = document.querySelector('.hq-header');
  if (!header) return;
  var boxState = currentBoxState();
  var boxId = boxState.boxId;
  var nav = header.querySelector('.hq-nav') || document.createElement('nav');
  nav.className = 'hq-nav';
  nav.setAttribute('aria-label', '0円仕入れ物販 ナビゲーション');
  nav.innerHTML = PAGE_LINKS.map(function(l){
    return '<a data-zero-cost-current-box="1" href="' + appendBoxQuery(l.href, boxId) + '"' + (l.page === current ? ' class="active"' : '') + '>'
      + '<span class="hq-nav-kicker">' + l.kicker + '</span>'
      + '<span class="hq-nav-label">' + l.label + '</span>'
      + '</a>';
  }).join('');
  if (!nav.parentNode) header.appendChild(nav);
  renderBoxContext(header);
  updateStickyOffset(header);
  window.zeroCostCurrentBoxId = currentBoxId;
  window.zeroCostCurrentBoxLabel = currentBoxLabel;
  window.zeroCostCurrentBoxScope = function() { return currentBoxState().scopeId; };
  window.zeroCostSetBoxId = setCurrentBoxId;
  window.zeroCostLinkWithBox = linkWithBox;
  window.zeroCostSyncBoxLinks = syncBoxLinks;
  window.zeroCostGetBoxSummary = boxSummaryForScope;
  window.addEventListener('resize', function() {
    updateStickyOffset(header);
  });
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
