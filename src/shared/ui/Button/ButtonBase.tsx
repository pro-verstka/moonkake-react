import { type PropsWithChildren, type ComponentProps, forwardRef } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

export type ButtonProps = {
	variant?: 'outline' | 'ghost' | 'fill'
	appearance?: 'secondary' | 'primary'
} & ComponentProps<'button'>

export const ButtonBase = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
	({ appearance = 'primary', variant = 'fill', children, ...props }, ref) => {
		const classNames = {
			[styles[`button_appearance_${appearance}`]]: !!appearance,
			[styles[`button_variant_${variant}`]]: !!variant,
			[styles.button]: true
		}

		return (
			<button {...props} className={cn(classNames, props.className)} ref={ref}>
				{children}
			</button>
		)
	}
)
