import { UserService } from './api'

class ApiService {
	user: UserService

	constructor() {
		this.user = new UserService()
	}
}

export const apiService = new ApiService()
