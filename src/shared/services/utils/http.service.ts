import { type AxiosRequestConfig, type AxiosInstance, type AxiosResponse } from 'axios'
import { httpClient } from '$shared/clients'
import { toast } from 'sonner'

/**
 * A service class for handling HTTP requests using Axios.
 */
class HttpService {
	private client: AxiosInstance

	/**
	 * Initializes a new instance of the HttpService class.
	 */
	constructor() {
		this.client = httpClient
	}

	/**
	 * Performs a DELETE request.
	 * @param url - The URL to send the request to.
	 * @param params - Optional query parameters.
	 * @param config - Optional Axios request configuration.
	 * @returns A promise that resolves with the response data or rejects with an error.
	 */
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

	/**
	 * Performs a GET request.
	 * @param url - The URL to send the request to.
	 * @param params - Optional query parameters.
	 * @param config - Optional Axios request configuration.
	 * @returns A promise that resolves with the response data or rejects with an error.
	 */
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

	/**
	 * Performs a PATCH request.
	 * @param url - The URL to send the request to.
	 * @param data - Optional data to send in the request body.
	 * @param config - Optional Axios request configuration.
	 * @returns A promise that resolves with the response data or rejects with an error.
	 */
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

	/**
	 * Performs a POST request.
	 * @param url - The URL to send the request to.
	 * @param data - Optional data to send in the request body.
	 * @param config - Optional Axios request configuration.
	 * @returns A promise that resolves with the response data or rejects with an error.
	 */
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

	/**
	 * Performs a PUT request.
	 * @param url - The URL to send the request to.
	 * @param data - Optional data to send in the request body.
	 * @param config - Optional Axios request configuration.
	 * @returns A promise that resolves with the response data or rejects with an error.
	 */
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

	/**
	 * Checks if the given error is an ApiError.
	 * @param error - The error to check.
	 * @returns True if the error is an ApiError, false otherwise.
	 */
	public isApiError(error: unknown): error is ApiError {
		const err = error as UnknownError

		return !!err?.title && !!err?.detail && !!err?.type
	}

	/**
	 * Handles the response from an API call.
	 * @param response - The Axios response object.
	 * @returns An object containing the success status, data, and error (if any).
	 * @private
	 */
	private responseHandler<Response, Error>(response: AxiosResponse<Response>) {
		if (this.isApiError(response.data)) {
			return {
				error: response.data as Error,
				success: false as const,
				data: null
			}
		}

		return {
			success: true as const,
			data: response.data,
			error: null
		}
	}

	/**
	 * Handles error messages and displays them using a toast notification.
	 * @param error - The error object.
	 * @private
	 */
	private errorMessageHandler(error: unknown) {
		const err = error as UnknownError
		const message = `${err?.message}` || 'Unknown error'

		// if (this.isApiError(error?.response?.data)) {
		// 	message = error?.response.data.detail
		// }

		toast.error(message)
	}

	/**
	 * Handles errors from API calls.
	 * @param error - The error object.
	 * @returns An object containing the error details.
	 * @private
	 */
	private errorHandler<Error>(error: unknown) {
		const err = error as UnknownError

		return {
			error: {
				description: err.message,
				title: err.name,
				type: 'error'
			} as Error,
			success: false as const,
			data: null
		}
	}
}

export const httpService = new HttpService()
