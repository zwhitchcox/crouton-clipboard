document.addEventListener('copy', onCopy)

function onCopy(e) {
  chrome.runtime.sendMessage({
    event: 'copy',
    data: document.getSelection().toString()
  })
}
