import { type ComponentProps } from 'react'
import cn from 'clsx'

import styles from './styles.module.scss'

export type InputBaseProps = ComponentProps<'input'> & {
	isError?: boolean
}

export const InputBase = ({ isError, ...props }: InputBaseProps) => {
	const classNames = {
		[styles.field_state_error]: isError,
		[styles.field]: true
	}

	return <input type="text" {...props} className={cn(classNames, props.className)} />
}
