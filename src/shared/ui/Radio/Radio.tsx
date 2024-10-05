import { type PropsWithChildren, type ComponentProps, forwardRef } from 'react'
import cn from 'clsx'

import styles from './styles.module.scss'

export type RadioProps = Omit<ComponentProps<'input'>, 'type'> & {
	isError?: boolean
}

export const Radio = forwardRef<HTMLInputElement, PropsWithChildren<RadioProps>>(({ children, isError, ...props }) => {
	const classNames = {
		[styles.radio_state_disabled]: props.disabled,
		[styles.radio_state_error]: isError,
		[styles.radio]: true
	}

	return (
		<label className={cn(classNames, props.className)}>
			<input type="checkbox" {...props} />

			<span className={styles.checkbox__status} />

			{children ? <span className={styles.checkbox__label}>{children}</span> : null}
		</label>
	)
})
