(function () {
  var nav = document.querySelector('nav'), mb = document.getElementById('menu-btn');
  if (!mb) return;
  function setMenu(open) { nav.classList.toggle('open', open); mb.setAttribute('aria-expanded', open); }
  mb.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  document.querySelectorAll('#site-menu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
})();
