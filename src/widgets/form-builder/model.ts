import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'

type BaseFormField<FieldName = string> = {
	fieldPlaceholder?: string
	fieldName: FieldName
	description?: string
	fieldValue?: string
	label?: string
}

type TextField = {
	fieldValue?: string
	fieldType: 'text'
}

type EmailField = {
	fieldValue?: string
	fieldType: 'email'
}

type TelField = {
	fieldValue?: string
	fieldType: 'tel'
}

type DateField = {
	fieldValue?: string
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

type SelectField = {
	fieldOptions: Array<{
		value: string
		label: string
	}>
	fieldValue?: string
	fieldType: 'select'
}

type AllFields = CheckboxField | SelectField | EmailField | RadioField | TextField | DateField | TelField

export type FormBuilderFormSchema<FieldName> = (BaseFormField<FieldName> & AllFields)[][][]

export type FormBuilderProps<ValidateSchema extends z.ZodSchema> = {
	formSchema: FormBuilderFormSchema<keyof z.infer<ValidateSchema>>
	onInvalidSubmit?: SubmitErrorHandler<z.infer<ValidateSchema>>
	onValidSubmit: SubmitHandler<z.infer<ValidateSchema>>
	validateSchema: ValidateSchema
}
