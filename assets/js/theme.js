(function () {
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark'
                                  : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    document.dispatchEvent(new Event('themechange'));
  });
})();
