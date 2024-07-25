import { type ComponentProps, forwardRef } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

export type InputBaseProps = ComponentProps<'input'> & {
	isError?: boolean
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(({ isError, ...props }, ref) => {
	const classNames = {
		[styles.field_state_error]: isError,
		[styles.field]: true
	}

	return <input type="text" {...props} className={cn(classNames, props.className)} ref={ref} />
})
