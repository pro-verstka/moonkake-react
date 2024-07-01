import { httpService } from '../../utils'

import type { GetUserResponse } from './user.model.ts'

/**
 * Service class for handling user-related operations.
 */
export class UserService {
	/**
	 * Retrieves user information by ID.
	 *
	 * @param id - The unique identifier of the user.
	 * @returns A promise that resolves to the user's information.
	 */
	getUser(id: number) {
		return httpService.get<GetUserResponse>(`/user/${id}`)
	}
}
