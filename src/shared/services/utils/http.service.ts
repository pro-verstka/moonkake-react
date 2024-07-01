import { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

import { httpClient } from '@/shared/clients'

class HttpService {
	private client: AxiosInstance

	constructor() {
		this.client = httpClient
	}

	public isApiError(error: unknown): error is ApiError {
		const err = error as UnknownError

		return !!err?.title && !!err?.detail && !!err?.type
	}

	async get<Response, Error = ApiError>(url: string, params?: unknown, config?: AxiosRequestConfig) {
		return this.client
			.get<Response>(url, {
				...config,
				params
			})
			.then(response => {
				return this.responseHandler<Response, Error>(response)
			})
			.catch(error => {
				this.errorMessageHandler(error)
				return this.errorHandler<Error>(error)
			})
	}

	async post<Response, Error = ApiError>(url: string, data?: unknown, config?: AxiosRequestConfig) {
		return this.client
			.post<Response>(url, data, config)
			.then(response => {
				return this.responseHandler<Response, Error>(response)
			})
			.catch(error => {
				this.errorMessageHandler(error)
				return this.errorHandler<Error>(error)
			})
	}

	async put<Response, Error = ApiError>(url: string, data?: unknown, config?: AxiosRequestConfig) {
		return this.client
			.put<Response>(url, data, config)
			.then(response => {
				return this.responseHandler<Response, Error>(response)
			})
			.catch(error => {
				this.errorMessageHandler(error)
				return this.errorHandler<Error>(error)
			})
	}

	async patch<Response, Error = ApiError>(url: string, data?: unknown, config?: AxiosRequestConfig) {
		return this.client
			.patch<Response>(url, data, config)
			.then(response => {
				return this.responseHandler<Response, Error>(response)
			})
			.catch(error => {
				this.errorMessageHandler(error)
				return this.errorHandler<Error>(error)
			})
	}

	async delete<Response, Error = ApiError>(url: string, params?: unknown, config?: AxiosRequestConfig) {
		return this.client
			.delete<Response>(url, {
				...config,
				params
			})
			.then(response => {
				return this.responseHandler<Response, Error>(response)
			})
			.catch(error => {
				this.errorMessageHandler(error)
				return this.errorHandler<Error>(error)
			})
	}

	private responseHandler<Response, Error>(response: AxiosResponse<Response>) {
		if (this.isApiError(response.data)) {
			return {
				success: false as const,
				data: null,
				error: response.data as Error
			}
		}

		return {
			success: true as const,
			data: response.data,
			error: null
		}
	}

	private errorHandler<Error>(error: unknown) {
		const err = error as UnknownError

		return {
			success: false as const,
			data: null,
			error: {
				title: err.name,
				description: err.message,
				type: 'error'
			} as Error
		}
	}

	private errorMessageHandler(error: unknown) {
		const err = error as UnknownError
		const message = `${err?.message}` || 'Unknown error'

		// if (this.isApiError(error?.response?.data)) {
		// 	message = error?.response.data.detail
		// }

		toast.error(message)
	}
}

export const httpService = new HttpService()
