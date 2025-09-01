// Load libraries
import { writeFileSync, readFileSync } from 'node:fs'

// Create variable in native json format
const users = [{ name: 'Adam Ondra', email: 'adam.ondra@climb.ing' }]

// Convert json into string
const usersJson = JSON.stringify(users)

// Write our string version of json out as a file
writeFileSync('backend/users.json', usersJson)

// Create a json object from our written file
const readUsersJson = readFileSync('backend/users.json')

// Convert our json object to a string
const readUsers = JSON.parse(readUsersJson)

// Print the string
console.log(readUsers)
