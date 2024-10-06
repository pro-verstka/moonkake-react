import type { PropsWithChildren, ComponentProps } from 'react'

import cn from 'clsx'

import styles from './styles.module.scss'

export type RootProps = ComponentProps<'form'>

export const Root = ({ children, ...props }: PropsWithChildren<RootProps>) => {
	return (
		<form {...props} className={cn(styles.form, props.className)}>
			{children}
		</form>
	)
}

export type FieldSetProps = ComponentProps<'fieldset'>

export const FieldSet = ({ children, ...props }: FieldSetProps) => {
	return (
		<fieldset {...props} className={cn(styles.form__fieldset, props.className)}>
			{children}
		</fieldset>
	)
}

export type RowProps = ComponentProps<'div'>

export const Row = ({ children, ...props }: PropsWithChildren<RowProps>) => {
	return (
		<div {...props} className={cn(styles.form__row, props.className)}>
			{children}
		</div>
	)
}

export type ColProps = ComponentProps<'div'>

export const Col = ({ children, ...props }: PropsWithChildren<ColProps>) => {
	return (
		<div {...props} className={cn(styles.form__col, props.className)}>
			{children}
		</div>
	)
}

export type LabelProps = ComponentProps<'label'>

export const Label = ({ children, ...props }: PropsWithChildren<LabelProps>) => {
	return (
		<label {...props} className={cn(styles.form__label, props.className)}>
			{children}
		</label>
	)
}

export type DescriptionProps = ComponentProps<'div'>

export const Description = ({ children, ...props }: PropsWithChildren<DescriptionProps>) => {
	return (
		<div {...props} className={cn(styles.form__description, props.className)}>
			{children}
		</div>
	)
}

export type ErrorProps = ComponentProps<'div'>

export const Error = ({ children, ...props }: PropsWithChildren<ErrorProps>) => {
	if (!children) {
		return null
	}

	return (
		<div {...props} className={cn(styles.form__error, props.className)}>
			{children}
		</div>
	)
}
