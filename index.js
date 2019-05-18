var copy = require('clipboard-copy')

function RemoveSoftHyphensWhenTextIsCopied() {
  var text = window.getSelection().toString()
  var text_without_soft_hyphens = text.replace(/\u00AD/g, '')
  copy(text_without_soft_hyphens)
}
document.addEventListener('copy', RemoveSoftHyphensWhenTextIsCopied)
