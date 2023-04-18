import Api from '@/services/Api'

export default {
	register(credentials) {
		return Api().post('register', credentials)
	}
}

Auth.register({
	user: 'gay',
	pass: 'penis'
})
