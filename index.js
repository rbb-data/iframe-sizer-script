(function () {
  const scriptTag = document.querySelector('#rbb-datateam-iframeScript')

  const iframeId = scriptTag.dataset.iframeId
  const onlyResizeBelowBreakpoint = scriptTag.dataset.onlyResizeBelowBreakpoint || false
  const minHeight = scriptTag.dataset.minHeight || 0
  const maxHeight = scriptTag.dataset.maxHeight || Number.MAX_VALUE

  if (onlyResizeBelowBreakpoint && onlyResizeBelowBreakpoint > window.innerWidth) return

  const iframe = document.querySelector(`#${iframeId}`)
  let newHeight = window.innerHeight
  if (newHeight < minHeight) newHeight = minHeight
  if (newHeight > maxHeight) newHeight = maxHeight

  iframe.style.height = `${newHeight}px`
})()
