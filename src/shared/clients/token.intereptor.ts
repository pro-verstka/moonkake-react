import { sessionStore } from '../stores/session'
import { httpClient } from './http.client'

httpClient.interceptors.request.use(config => {
	const token = sessionStore.getState().token

	if (token) {
		config.headers.set('Authorization', `Bearer ${token}`)
	}

	return config
})
