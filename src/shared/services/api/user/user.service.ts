import { httpService } from '../../utils'

import type { GetUserResponse } from './user.model.ts'

export class UserService {
	getUser(id: number) {
		return httpService.get<GetUserResponse>(`/user/${id}`)
	}
}
