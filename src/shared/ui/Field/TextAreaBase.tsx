import cn from 'classnames'
import { type ComponentProps, forwardRef } from 'react'

import styles from './Field.module.scss'

export type TextAreaBaseProps = ComponentProps<'textarea'> & {
	isError?: boolean
}

export const TextAreaBase = forwardRef<HTMLTextAreaElement, TextAreaBaseProps>(({ isError, ...props }, ref) => {
	const classNames = {
		[styles.field]: true,
		[styles.field_state_error]: isError
	}

	return <textarea rows={3} {...props} ref={ref} className={cn(classNames, props.className)} />
})
