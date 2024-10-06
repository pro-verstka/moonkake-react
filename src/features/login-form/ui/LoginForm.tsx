import { type SubmitErrorHandler, type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Form } from '@/shared/ui'
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

export const LoginForm = () => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema)
	})

	const onValidSubmitHandler: SubmitHandler<FormData> = data => {
		console.log(data)
	}

	const onInvalidSubmitHandler: SubmitErrorHandler<FormData> = errors => {
		console.log(errors)
	}

	return (
		<Form.Root onSubmit={form.handleSubmit(onValidSubmitHandler, onInvalidSubmitHandler)}>
			<Form.FieldSet>
				<Form.Row>
					<Form.Col>
						<Form.Label>Email</Form.Label>
						<Input
							{...form.register('email')}
							isError={!!form.formState.errors.email}
							disabled={form.formState.isSubmitting}
							type="email"
						/>

						<Form.Error>{form.formState.errors.email?.message}</Form.Error>
					</Form.Col>
				</Form.Row>

				<Form.Row>
					<Form.Col>
						<Form.Label>Password</Form.Label>
						<Input
							{...form.register('password')}
							isError={!!form.formState.errors.password}
							disabled={form.formState.isSubmitting}
							type="password"
						/>

						<Form.Error>{form.formState.errors.password?.message}</Form.Error>
					</Form.Col>
				</Form.Row>
			</Form.FieldSet>

			<Form.FieldSet>
				<Form.Row>
					<Form.Col>
						<Button disabled={form.formState.isSubmitting} type="submit">
							Sing In
						</Button>
					</Form.Col>
				</Form.Row>
			</Form.FieldSet>
		</Form.Root>
	)
}
