import { type FormBuilderFormSchema, FormBuilder } from '@/widgets/form-builder'
import { createLazyFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import styles from './styles.module.scss'

export const Route = createLazyFileRoute('/')({
	component: IndexPage
})

const validateSchema = z.object({
	phone: z.string().min(10, 'Phone number must be at least 10 digits long'),
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	email: z.string().email('Invalid email format'),
	checkbox: z.literal(true),
	select: z.string()
})

const formSchema: FormBuilderFormSchema<keyof z.infer<typeof validateSchema>> = [
	[
		[
			{
				fieldPlaceholder: 'Enter your name',
				description: 'Enter your name',
				fieldType: 'text',
				fieldName: 'name',
				label: 'Name'
			},
			{
				fieldPlaceholder: 'Enter your email address',
				description: 'Enter your email address',
				fieldType: 'email',
				fieldName: 'email',
				label: 'Email'
			}
		],
		[
			{
				fieldPlaceholder: 'Enter your phone number',
				description: 'Enter your phone number',
				fieldName: 'phone',
				fieldType: 'tel',
				label: 'Phone'
			}
		],
		[
			{
				fieldPlaceholder: 'Enter your phone number',
				description: 'Enter your phone number',
				fieldType: 'checkbox',
				fieldName: 'checkbox',
				fieldChecked: true,
				label: 'checkbox'
			}
		],
		[
			{
				fieldOptions: [
					{ label: 'Option 1', value: 'value1' },
					{ label: 'Option 2', value: 'value2' },
					{ label: 'Option 3', value: 'value3' }
				],
				fieldPlaceholder: 'Enter your phone number',
				description: 'Enter your phone number',
				fieldValue: 'value2',
				fieldType: 'select',
				fieldName: 'select',
				label: 'select'
			}
		]
	]
]

function IndexPage() {
	return (
		<div className={styles.home}>
			<FormBuilder
				onInvalidSubmit={errors => {
					console.log(errors)
				}}
				onValidSubmit={data => {
					console.log(data)
				}}
				validateSchema={validateSchema}
				formSchema={formSchema}
			/>
		</div>
	)
}
