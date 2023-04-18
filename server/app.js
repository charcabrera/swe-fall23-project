const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8001

app.use(bodyParser.json())

app.post('/register', (req, res) => {
	res.send({
		message: `Thank you for registering ${req.body.user}!`
	})
})

app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
})
