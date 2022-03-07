(function () {
  var throttledPostMessage = throttle((message) => {
    window.parent.postMessage(message, "*");
  }, 100);

  var resizeObserver = new ResizeObserver((entries) => {
    if (!Array.isArray(entries)) return;
    if (!entries.length) return;

    var entry = entries[0];
    var message = {
      href: window.location.href,
      height: entry.contentRect.height,
    };

    throttledPostMessage(message);
  });

  resizeObserver.observe(document.body);
})();
