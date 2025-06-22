import { type SubmitErrorHandler, type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { z } from 'zod/v4'

const schema = z.object({
	password: z
		.string({
			message: 'Password is required'
		})
		.min(8, {
			message: 'Password must be at least 8 characters'
		}),
	email: z.email({
		message: 'Email is required'
	})
})

type FormData = z.infer<typeof schema>

export const useLoginForm = () => {
	const form = useForm<FormData>({
		defaultValues: {
			password: '',
			email: ''
		},
		resolver: zodResolver(schema)
	})

	const onValidSubmitHandler: SubmitHandler<FormData> = data => {
		console.log('@data', data)
	}

	const onInvalidSubmitHandler: SubmitErrorHandler<FormData> = errors => {
		console.log('@errors', errors)

		toast.error('Fill in the fields correctly')
	}

	return {
		actions: {
			onSubmit: form.handleSubmit(onValidSubmitHandler, onInvalidSubmitHandler)
		},
		form
	}
}
