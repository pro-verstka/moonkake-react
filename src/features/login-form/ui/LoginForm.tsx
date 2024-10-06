import { Button, Input, Form } from '@/shared/ui'

import { useLoginForm } from '../model/useLoginForm'

export const LoginForm = () => {
	const { actions, form } = useLoginForm()

	return (
		<Form.Root onSubmit={form.handleSubmit(actions.onValidSubmitHandler, actions.onInvalidSubmitHandler)}>
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
