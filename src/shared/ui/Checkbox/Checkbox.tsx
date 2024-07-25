import { type PropsWithChildren, type ComponentProps, forwardRef } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> & {
	isError?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
	({ children, isError, ...props }) => {
		const classNames = {
			[styles.checkbox_state_disabled]: props.disabled,
			[styles.checkbox_state_error]: isError,
			[styles.checkbox]: true
		}

		return (
			<label className={cn(classNames, props.className)}>
				<input type="checkbox" {...props} />

				<span className={styles.checkbox__status} />

				{children ? <span className={styles.checkbox__label}>{children}</span> : null}
			</label>
		)
	}
)
