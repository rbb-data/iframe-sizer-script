var rbbData = (function () {
  function clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
  }

  function resizeToFullHeight(
    iframe,
    onlyResizeBelowBreakpoint,
    minHeight,
    maxHeight
  ) {
    if (
      onlyResizeBelowBreakpoint &&
      onlyResizeBelowBreakpoint > window.innerWidth
    )
      return;

    var height = clamp(window.innerHeight, minHeight, maxHeight);
    iframe.style.height = height + "px";
  }

  function autoResize(iframe, defer) {
    window.addEventListener(
      "message",
      function (e) {
        // security checks
        var href = e.data["href"];
        if (iframe.src.indexOf(e.origin) !== 0) return;
        if (iframe.src.indexOf(href) !== 0) return;

        if (!e.data["height"]) return;

        if (defer) {
          queueMicrotask(() => {
            iframe.style.height = e.data["height"] + "px";
          });
        } else {
          iframe.style.height = e.data["height"] + "px";
        }
      },
      false
    );
  }

  function resizeIframe(id, options = {}) {
    // set default options
    var height = options.height || "auto";
    var defer = options.defer || false;
    var onlyResizeBelowBreakpoint = options.onlyResizeBelowBreakpoint || false;
    var minHeight = options.minHeight || 0;
    var maxHeight = options.maxHeight || Number.MAX_VALUE;

    var iframe = document.getElementById(id);
    if (!iframe) {
      console.warn(
        "[iframe resizer] Element with id " + id + " does not exist."
      );
    }

    if (height === "auto") {
      autoResize(iframe, defer);
    } else if (height === "full") {
      resizeToFullHeight(
        iframe,
        onlyResizeBelowBreakpoint,
        minHeight,
        maxHeight
      );
    } else {
      console.warn(
        "Keyword " +
          height +
          " is not allowed for parameter 'height'. " +
          "Allowed values are: 'auto', 'full'"
      );
    }
  }

  return { resizeIframe };
})();
