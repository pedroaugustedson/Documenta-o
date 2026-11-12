// Destaca no menu a norma que está na tela
(function () {
  var links = document.querySelectorAll('nav a');
  if (!('IntersectionObserver' in window)) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) {
          a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id);
          if (a.hasAttribute('aria-current')) a.setAttribute('aria-current', 'true');
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  document.querySelectorAll('section').forEach(function (s) { obs.observe(s); });
})();
