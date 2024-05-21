import { type ComponentProps, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Field.module.scss'

export type TextAreaBaseProps = ComponentProps<'textarea'>

export const TextAreaBase = forwardRef<HTMLTextAreaElement, TextAreaBaseProps>((props, ref) => {
	return <textarea rows={3} {...props} ref={ref} className={cn(styles.field, props.className)} />
})
