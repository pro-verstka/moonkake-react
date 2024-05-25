import { type ComponentProps, forwardRef, type PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Checkbox.module.scss'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> & {
	isError?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
	({ children, isError, ...props }) => {
		const classNames = {
			[styles.checkbox]: true,
			[styles.checkbox_state_disabled]: props.disabled,
			[styles.checkbox_state_error]: isError
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
