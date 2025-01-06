import type { ReactElement } from 'react'

import {
	type SubmitErrorHandler,
	type FieldPathValue,
	type SubmitHandler,
	type FieldPath,
	Controller,
	useForm
} from 'react-hook-form'
import { Checkbox, Button, Input, Radio, Form } from '@/shared/ui'
import { type infer as ZodInfer, ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type BaseFormField<FieldName = string> = {
	fieldPlaceholder?: string
	fieldName: FieldName
	description?: string
	fieldValue?: string
	label?: string
}

type TextField = {
	fieldType: 'text'
}

type EmailField = {
	fieldType: 'email'
}

type TelField = {
	fieldType: 'tel'
}

type DateField = {
	fieldType: 'date'
}

type CheckboxField = {
	fieldChecked?: boolean
	fieldType: 'checkbox'
}

type RadioField = {
	fieldChecked?: boolean
	fieldType: 'radio'
}

type AllFields = CheckboxField | EmailField | RadioField | TextField | DateField | TelField

export type FormBuilderFormSchema<FieldName> = (BaseFormField<FieldName> & AllFields)[][][]

export type FormBuilderProps<ValidateSchema extends ZodSchema> = {
	formSchema: FormBuilderFormSchema<keyof ZodInfer<ValidateSchema>>
	onInvalidSubmit?: SubmitErrorHandler<ZodInfer<ValidateSchema>>
	onValidSubmit: SubmitHandler<ZodInfer<ValidateSchema>>
	validateSchema: ValidateSchema
}

export const FormBuilder = <FormFields extends ZodSchema>({
	onInvalidSubmit,
	validateSchema,
	onValidSubmit,
	formSchema
}: FormBuilderProps<FormFields>) => {
	const form = useForm<ZodInfer<FormFields>>({
		resolver: zodResolver(validateSchema)
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
													<Controller
														render={props => (
															<Checkbox
																{...props.field}
																disabled={form.formState.isSubmitting}
																defaultChecked={field.fieldChecked}
																isError={Boolean(fieldError)}
															/>
														)}
														defaultValue={field.fieldChecked as FieldPathValue<ZodInfer<FormFields>, typeof name>}
														control={form.control}
														name={name}
													/>
												)

												break

											case 'radio':
												component = (
													<Controller
														render={props => (
															<Radio
																{...props.field}
																disabled={form.formState.isSubmitting}
																defaultChecked={field.fieldChecked}
																isError={Boolean(fieldError)}
															/>
														)}
														defaultValue={field.fieldChecked as FieldPathValue<ZodInfer<FormFields>, typeof name>}
														control={form.control}
														name={name}
													/>
												)

												break

											case 'email':
											case 'text':
											case 'date':
											case 'tel':
												component = (
													<Controller
														render={props => (
															<Input
																{...props.field}
																disabled={form.formState.isSubmitting}
																placeholder={field.fieldPlaceholder}
																isError={Boolean(fieldError)}
																type={field.fieldType}
															/>
														)}
														defaultValue={field.fieldValue as FieldPathValue<ZodInfer<FormFields>, typeof name>}
														control={form.control}
														name={name}
													/>
												)

												break

											default:
												throw new Error(`Unsupported fieldType: ${type}`)
										}

										return (
											<Form.Col key={name}>
												<Form.Label>{field.label}</Form.Label>

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
