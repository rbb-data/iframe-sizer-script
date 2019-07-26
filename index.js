(function () {
  var scriptTag = document.querySelector('#rbb-data-iframe-script')

  var iframeId = scriptTag.dataset.iframeId
  var onlyResizeBelowBreakpoint = scriptTag.dataset.onlyResizeBelowBreakpoint || false
  var minHeight = scriptTag.dataset.minHeight || 0
  var maxHeight = scriptTag.dataset.maxHeight || Number.MAX_VALUE

  if (onlyResizeBelowBreakpoint && onlyResizeBelowBreakpoint > window.innerWidth) return

  var iframe = document.querySelector(`#${iframeId}`)
  var newHeight = window.innerHeight
  if (newHeight < minHeight) newHeight = minHeight
  if (newHeight > maxHeight) newHeight = maxHeight

  iframe.style.height = `${newHeight}px`
})()
