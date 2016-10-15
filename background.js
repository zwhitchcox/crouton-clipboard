chrome.runtime.onMessage.addListener(onMsg)
var PORT = 3396

var ws = new WebSocket('ws://localhost:' + PORT)
createListener(ws)
var timeout;

function onMsg(msg) {
  if (msg.event === 'copy') {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    } 
    if (~[2,3].indexOf(ws.readyState)) {
      timeout = setTimeout(() => {
        ws = new WebSocket('ws://localhost:' + PORT)
        createListener(ws)
        ws.onopen = () => {
          ws.send(msg.data)
        }
      },300)
    } else {
      ws.send(msg.data)
    }
  }
}

function createListener(ws) {
  ws.onmessage = msg => {
    if (msg.data instanceof Blob)
    reader = new FileReader()
    reader.onload = () => copyTextToClipboard(reader.result)
    reader.readAsText(event.data)
  }
}


function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}
