import { type ComponentProps } from 'react'
import cn from 'clsx'

import styles from './styles.module.scss'

export type ButtonProps = {
	variant?: 'outline' | 'ghost' | 'fill'
	appearance?: 'secondary' | 'primary'
} & ComponentProps<'button'>

export const ButtonBase = ({ appearance = 'primary', variant = 'fill', children, ...props }: ButtonProps) => {
	const classNames = {
		[styles[`button_appearance_${appearance}`]]: !!appearance,
		[styles[`button_variant_${variant}`]]: !!variant,
		[styles.button]: true
	}

	return (
		<button {...props} className={cn(classNames, props.className)}>
			{children}
		</button>
	)
}
