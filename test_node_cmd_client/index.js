let ws = new WebSocket('ws://localhost:3000')

ws.onopen = () => {
  console.log('client opened')
}

ws.onClose = () => {
  console.log('client closed')
}

//接收 Server 發送的訊息
ws.onmessage = event => {
  console.log(event)
}