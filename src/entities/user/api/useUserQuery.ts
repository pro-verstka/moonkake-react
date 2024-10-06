import { useQuery } from '@tanstack/react-query'
import { apiService } from '@/shared/services'

export const QUERY_USER_KEY = 'user'

export const useUserQuery = (id: number) => {
	return useQuery({
		queryFn: () => apiService.user.getUser(id),
		queryKey: [QUERY_USER_KEY, id]
	})
}
