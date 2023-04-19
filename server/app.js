const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const port = 8001

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/public', express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public'))

app.post('/register', (req, res) => {
  // tests validity of fields
  if(!req.body.user || !req.body.pass) {
    res.send({
      message: 'You must fill out both the user and pass fields.'
    })
    return
  }

  // tests validity of username
  const us_re = /^[a-zA-Z[0-9]+$/
  if(!us_re.test(req.body.user)) {
    res.send({
      message: `Invalid username. You must match this regular expression: ${us_re.toString()}`
    })
    return
  }

  // tests validity of password
  const pw_re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  if(!pw_re.test(req.body.pass)) {
    res.send({
      message: `Invalid password. You must match this regular expression: ${pw_re.toString()}`
    })
    return
  }

  path = __dirname + '/public/secure.txt'
  f = fs.readFileSync(__dirname + '/public/secure.txt', 'utf8')

  // tests if the user already exists
  if(f.includes(req.body.user + ',')) {
    res.send({
      message: `Error: User already exists.`
    })
    return
  }

  // if none of the checks fail, add the user to the file
  fs.appendFile(path, userString, err => {
    if (err) {
      console.error(err);
    }
  })
  res.send({
    message: 'User successfully created.'
  })
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
