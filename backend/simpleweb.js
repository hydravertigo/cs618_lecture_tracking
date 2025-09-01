// Import library to create http server
import { createServer } from 'node:http'

// Create a server with specific paramaters
// A statusCode of 200 means success
// We are returning plain text, not html
// We respond with "Hello HTTP world!"
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello HTTP world!')
})

// Define the host and port that the server will run ong
const host = 'localhost'
const port = 3000

// Launch the port and write a messge the the console letting us know
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
