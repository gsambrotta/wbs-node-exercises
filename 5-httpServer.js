import http from 'http'

const PORT = '5001'

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World\n')
})
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
