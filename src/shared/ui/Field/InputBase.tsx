import { type ComponentProps, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Field.module.scss'

export type InputBaseProps = ComponentProps<'input'>

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
	return <input type="text" {...props} ref={ref} className={cn(styles.field, props.className)} />
})
