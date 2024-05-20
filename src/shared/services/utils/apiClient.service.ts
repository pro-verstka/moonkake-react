import axios from 'axios'
import { API_URL } from '../../utils'

export const apiClient = axios.create({
	baseURL: API_URL
})
