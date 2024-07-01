import cn from 'classnames'
import { type ComponentProps, forwardRef, type PropsWithChildren } from 'react'

import styles from './ButtonBase.module.scss'

export type ButtonProps = ComponentProps<'button'> & {
	appearance?: 'primary' | 'secondary'
	variant?: 'fill' | 'outline' | 'ghost'
}

export const ButtonBase = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
	({ children, appearance = 'primary', variant = 'fill', ...props }, ref) => {
		const classNames = {
			[styles.button]: true,
			[styles[`button_appearance_${appearance}`]]: !!appearance,
			[styles[`button_variant_${variant}`]]: !!variant
		}

		return (
			<button {...props} ref={ref} className={cn(classNames, props.className)}>
				{children}
			</button>
		)
	}
)
