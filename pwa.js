// Registers the service worker and shows a small "Install app" button.
(function () {
  if ('serviceWorker' in navigator) {
    addEventListener('load', function () { navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).catch(function () {}); });
  }
  var standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) return;
  var deferred = null;
  var css = 'position:fixed;right:14px;bottom:14px;z-index:9999;font:800 14px Nunito,system-ui,sans-serif;background:#ff6b5b;color:#fff;border:0;border-radius:99px;padding:11px 18px;box-shadow:0 10px 24px -8px rgba(232,82,79,.7);cursor:pointer';
  function btn(label, onclick) {
    var b = document.createElement('button'); b.textContent = label; b.style.cssText = css; b.setAttribute('aria-label', label);
    b.onclick = onclick; document.body.appendChild(b); return b;
  }
  var dismissed = false; try { dismissed = localStorage.getItem('pwaHide') === '1'; } catch (e) {}
  if (dismissed) return;
  addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); deferred = e;
    var b = btn('Install app', function () { deferred.prompt(); deferred.userChoice.then(function () { b.remove(); deferred = null; }); });
  });
  addEventListener('appinstalled', function () { document.querySelectorAll('button[aria-label="Install app"]').forEach(function (x) { x.remove(); }); });
  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  if (ios) {
    var b = btn('Install app', function () {
      alert('To install: tap the Share button in Safari, then "Add to Home Screen".');
      try { localStorage.setItem('pwaHide', '1'); } catch (e) {} b.remove();
    });
  }
})();
