import { Checkbox, Button, Input, Radio, Form } from '@/shared/ui'
import { type FieldPath, useForm } from 'react-hook-form'
import { type infer as ZodInfer, ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ReactElement, useMemo } from 'react'

import type { FormBuilderProps } from './model'

export const FormBuilder = <FormFields extends ZodSchema>({
	onInvalidSubmit,
	validateSchema,
	onValidSubmit,
	formSchema
}: FormBuilderProps<FormFields>) => {
	const defaultValues = useMemo(() => {
		const values: ZodInfer<FormFields> = {}

		for (const fieldset of formSchema) {
			for (const group of fieldset) {
				for (const field of group) {
					if (field.fieldValue) {
						values[field.fieldName] = field.fieldValue
					}

					if (field.fieldType === 'checkbox' && field.fieldChecked) {
						values[field.fieldName] = field.fieldChecked
					}
				}
			}
		}

		return values
	}, [formSchema])

	const form = useForm<ZodInfer<FormFields>>({
		resolver: zodResolver(validateSchema),
		defaultValues
	})

	return (
		<Form.Root onSubmit={form.handleSubmit(onValidSubmit, onInvalidSubmit)}>
			{formSchema.map((fieldset, fieldsetIndex) => {
				return (
					<Form.FieldSet disabled={form.formState.isSubmitting} key={fieldsetIndex}>
						{fieldset.map((group, groupIndex) => {
							return (
								<Form.Row key={groupIndex}>
									{group.map(field => {
										let component: ReactElement

										const type = field.fieldType
										const name = field.fieldName as FieldPath<ZodInfer<FormFields>>
										const fieldError = form.formState.errors[name]?.message as undefined | string

										switch (type) {
											case 'checkbox':
												component = (
													<Checkbox
														{...form.register(name)}
														disabled={form.formState.isSubmitting}
														isError={Boolean(fieldError)}
													>
														{field.label}
													</Checkbox>
												)

												break

											case 'select':
												component = (
													<select {...form.register(name)} disabled={form.formState.isSubmitting}>
														{field.fieldOptions.map(option => (
															<option value={option.value} key={option.value}>
																{option.label}
															</option>
														))}
													</select>
												)

												break

											case 'radio':
												component = (
													<Radio
														{...form.register(name)}
														disabled={form.formState.isSubmitting}
														isError={Boolean(fieldError)}
													>
														{field.label}
													</Radio>
												)

												break

											case 'email':
											case 'text':
											case 'date':
											case 'tel':
												component = (
													<Input
														{...form.register(name)}
														disabled={form.formState.isSubmitting}
														placeholder={field.fieldPlaceholder}
														isError={Boolean(fieldError)}
														type={field.fieldType}
													/>
												)

												break

											default:
												throw new Error(`Unsupported fieldType: ${type}`)
										}

										return (
											<Form.Col key={name}>
												{type !== 'checkbox' && type !== 'radio' ? <Form.Label>{field.label}</Form.Label> : null}

												{component}

												<Form.Description>{field.description}</Form.Description>
												<Form.Error>{fieldError}</Form.Error>
											</Form.Col>
										)
									})}
								</Form.Row>
							)
						})}
					</Form.FieldSet>
				)
			})}

			<Form.FieldSet>
				<Form.Row>
					<Form.Col>
						<Button disabled={form.formState.isSubmitting} type="submit">
							Submit
						</Button>
					</Form.Col>
				</Form.Row>
			</Form.FieldSet>
		</Form.Root>
	)
}