const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8001
			fs = require('fs')

app.use(bodyParser.json())
app.use(cors())
app.use('/public', express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public'))

app.post('/register', (req, res) => {
  if(!req.body.user || !req.body.pass) {
    res.send({
      message: 'You must fill out both the user and pass fields.'
    })
    return
  }
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  if(!re.test(req.body.pass)) {
    res.send({
      message: `Invalid password. You must match this regular expression: ${re.toString()}`
    })
    return
  }
  userString = req.body.user + ',' + req.body.pass + '\n'
  path = __dirname + '/public/secure.txt'
  f = fs.readFileSync(__dirname + '/public/secure.txt', 'utf8')
  if(RegExp(req.body.user + ',').test(f)) {
    res.send({
      message: `Error: User already exists.`
    })
    return
  }
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
