// Import library to create http server
import { createServer } from 'node:http'

// Import library to read files
import { readFileSync } from 'node:fs'

// Create a server with specific paramaters
// A statusCode of 200 means success
// We are returning a special application json format, not html
// We respond with the contents of our json file
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('backend/users.json'))
})

// Define the host and port that the server will run ong
const host = 'localhost'
const port = 3000

// Launch the port and write a messge the the console letting us know
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
