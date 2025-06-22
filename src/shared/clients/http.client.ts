import { API_URL } from '$libs'
import axios from 'axios'

export const httpClient = axios.create({
	baseURL: API_URL
})
