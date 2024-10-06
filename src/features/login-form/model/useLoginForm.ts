import { type SubmitErrorHandler, type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schema = z.object({
	password: z
		.string({
			message: 'Password is required'
		})
		.min(8, {
			message: 'Password must be at least 8 characters'
		}),
	email: z
		.string({
			message: 'Email is required'
		})
		.email({
			message: 'Email is invalid'
		})
})

type FormData = z.infer<typeof schema>

export const useLoginForm = () => {
  const form = useForm<FormData>({
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
      onInvalidSubmitHandler,
      onValidSubmitHandler
    },
    form
  }
}
