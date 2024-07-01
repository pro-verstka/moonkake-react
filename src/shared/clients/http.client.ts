import axios from 'axios'

import { API_URL } from '../utils'

export const httpClient = axios.create({
	baseURL: API_URL
})
