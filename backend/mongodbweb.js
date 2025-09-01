// Import libraries to create the server and connect to mongodb
import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

// the mongodb database server
const url = 'mongodb://localhost:27017/'

// the mongodb database
const dbName = 'mydb'

// Use client to connect to our mongodb database
const client = new MongoClient(url)

// Try connecting to our mongodb database server
try {
  await client.connect()
  console.log('Successfully connected to database!')
} catch (err) {
  console.error('Error connecting to database:', err)
}

// Create a webserver that will work with our mongodb database
const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  const usersList = await users.find().toArray()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

// Host our webserver will run on
const host = 'localhost'

// Port our webserver will run on
const port = 3000

// Open the actual webserver
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
