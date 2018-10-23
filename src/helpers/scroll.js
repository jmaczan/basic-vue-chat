export function scrollToBottom () {
  setTimeout(function () {
    var scrollContainer = document.getElementById('window__messages__container')
    var isScrolledToBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight <= scrollContainer.scrollTop + 1
    if (!isScrolledToBottom) { scrollContainer.scrollTop = scrollContainer.scrollHeight }
  }, 201)
}
