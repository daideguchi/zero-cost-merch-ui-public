(function(){
  var PAGE_LINKS = [
    {page:'index',    label:'ホーム',          href:'./index.html'},
    {page:'intake',   label:'④⑤ 写真·AI識別',  href:'./intake_cards.html'},
    {page:'ops',      label:'⑥ 出品準備',      href:'./ops.html'},
    {page:'channel_listings', label:'出品状況', href:'./channel_listings.html'},
    {page:'shipping', label:'⑧ 集荷',          href:'./shipping.html'},
    {page:'routing',  label:'販路',             href:'./routing.html'}
  ];
  var current = document.documentElement.dataset.page || '';
  var header = document.querySelector('.hq-header');
  if (!header) return;
  var nav = document.createElement('nav');
  nav.className = 'hq-nav';
  nav.innerHTML = PAGE_LINKS.map(function(l){
    return '<a href="'+l.href+'"'+(l.page===current?' class="active"':'')+'>'+l.label+'</a>';
  }).join('');
  header.appendChild(nav);
})();
