const axios = require('axios')

const doThing = () => {
	return axios.create({
		baseURL: 'http://localhost:8001'
	})
}
module.exports = {
	doThing
}
