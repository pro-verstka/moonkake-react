import { type ComponentProps, forwardRef } from 'react'
import cn from 'clsx'

import styles from './styles.module.scss'

export type TextAreaBaseProps = ComponentProps<'textarea'> & {
	isError?: boolean
}

export const TextAreaBase = forwardRef<HTMLTextAreaElement, TextAreaBaseProps>(({ isError, ...props }, ref) => {
	const classNames = {
		[styles.field_state_error]: isError,
		[styles.field]: true
	}

	return <textarea rows={3} {...props} className={cn(classNames, props.className)} ref={ref} />
})
