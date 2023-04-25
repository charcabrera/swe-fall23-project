const express = require('express')
const crypto = require('crypto')
// this allows me to
const bodyParser = require('body-parser')
// if i don't have this everything breaks but i don't get why i need it
const cors = require('cors')
const fs = require('fs')
const port = 8001
const path = __dirname + '/public/insecure.txt'

const app = express()
app.use(bodyParser.json())
app.use(cors())

const hashPass = (pw) => {
  return crypto.createHash('sha256').update(pw).digest('hex')
}
// all of this dirname nonsense is from stackoverflow
app.use('/public', express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public'))

const us_re = /^[a-zA-Z0-9]+$/

// login code
app.post('/login', (req, res) => {
  if(!req.body.user || !req.body.pass) {
    res.send({
      message: 'You must fill out both the user and pass fields.'
    })
    return
  }

  req.body.pass = hashPass(req.body.pass)
  console.log('Login attempt from user ' + req.body.user)
  if(!us_re.test(req.body.user)) {
    console.log(`User ${req.body.user} attempted login with an invalid username.`)
  }
  f = fs.readFileSync(path, 'utf8')

  if(f.includes(req.body.user + ',' + req.body.pass)) {
    res.send({
      message: `Login success!`
    })
    console.log(`Successful login by ${req.body.user}.`)
  } else {
    res.send({
      message: `Login failed!`
    })
    console.log(`Unsuccessful login by ${req.body.user}.`)
  }
})

// Registration code
app.post('/register', (req, res) => {
  // tests validity of fields
  if(!req.body.user || !req.body.pass) {
    res.send({
      message: 'You must fill out both the user and pass fields.'
    })
    return
  }

  req.body.pass = hashPass(req.body.pass)
  console.log('Registration attempt from user ' + req.body.user);
  // tests validity of username
  if(!us_re.test(req.body.user)) {
    res.send({
      message: `Invalid username. You must match this regular expression: ${us_re.toString()}`
    })
    return
  }

  f = fs.readFileSync(path, 'utf8')

  // tests if the user already exists
  if(f.includes(req.body.user + ',')) {
    res.send({
      message: `Error: User already exists.`
    })
    return
  }

  // if none of the checks fail, add the user to the file
  fs.appendFile(path, req.body.user + ',' + req.body.pass + ',' + '\n', err => {
    if (err) {
      console.error(err)
    }
  })
  console.log(`Registered new user ${req.body.user}`)

  res.send({
    message: 'User successfully created.'
  })
})

app.listen(port, () => {
	console.log('Starting UIM service.')
})
