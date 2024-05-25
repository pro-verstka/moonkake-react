import { type ComponentProps, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Field.module.scss'

export type InputBaseProps = ComponentProps<'input'> & {
	isError?: boolean
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(({ isError, ...props }, ref) => {
	const classNames = {
		[styles.field]: true,
		[styles.field_state_error]: isError
	}

	return <input type="text" {...props} ref={ref} className={cn(classNames, props.className)} />
})
