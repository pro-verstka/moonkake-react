const PATH = {
	PAGE: 'src/pages',
	WIDGET: 'src/widgets',
	FEATURE: 'src/features',
	ENTITY: 'src/entities',
	UI_COMPONENT: 'src/shared/ui'
}

export default function (plop) {
	plop.setGenerator('Page', {
		description: 'Create new page',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter page name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: `${PATH.PAGE}/{{kebabCase name}}/index.ts`,
				template: `export { {{pascalCase name}}Page } from './{{pascalCase name}}Page.tsx'
`
			},
			{
				type: 'add',
				path: `${PATH.PAGE}/{{kebabCase name}}/{{pascalCase name}}Page.tsx`,
				template: `import styles from './{{pascalCase name}}Page.module.scss'

export const {{pascalCase name}}Page = () => {
	return (
		<div>
			{{pascalCase name}}Page
		</div>
	)
}
`
			},
			{
				type: 'add',
				path: `${PATH.PAGE}/{{kebabCase name}}/{{pascalCase name}}Page.module.scss`,
				template: '.{{camelCase name}} {}'
			}
		]
	})

	plop.setGenerator('Widget', {
		description: 'Create new widget',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter widget name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: `${PATH.WIDGET}/{{kebabCase name}}/index.ts`,
				template: `export { {{pascalCase name}} } from './{{pascalCase name}}.tsx'
`
			},
			{
				type: 'add',
				path: `${PATH.WIDGET}/{{kebabCase name}}/{{pascalCase name}}.tsx`,
				template: `import styles from './{{pascalCase name}}.module.scss'

export const {{pascalCase name}} = () => {
	return (
		<div>
			{{pascalCase name}}
		</div>
	)
}
`
			},
			{
				type: 'add',
				path: `${PATH.WIDGET}/{{kebabCase name}}/{{pascalCase name}}.module.scss`,
				template: '.{{camelCase name}} {}'
			}
		]
	})

	plop.setGenerator('UI component', {
		description: 'Create new UI component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter component name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: `${PATH.UI_COMPONENT}/{{pascalCase name}}/index.ts`,
				template: `export { {{pascalCase name}}, type {{pascalCase name}}Props } from './{{pascalCase name}}.tsx'
`
			},
			{
				type: 'add',
				path: `${PATH.UI_COMPONENT}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
				template: `import type { ComponentProps } from 'react'
import cn from 'classnames'
import styles from './{{pascalCase name}}.module.scss'

export type {{pascalCase name}}Props = ComponentProps<'div'> & {

}

export const {{pascalCase name}} = ({ ...props }: {{pascalCase name}}Props) => {
	const classNames = {
		[styles.{{camelCase name}}]: true
	}

	return (
		<div {...props} className={cn(classNames, props.className)}>
			{{pascalCase name}}
		</div>
	)
}
`
			},
			{
				type: 'add',
				path: `${PATH.UI_COMPONENT}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
				template: '.{{camelCase name}} {}'
			}
		]
	})

	plop.setGenerator('Feature', {
		description: 'Create new feature',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter feature name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: `${PATH.FEATURE}/{{kebabCase name}}/index.ts`,
				template: `export { {{pascalCase name}} } from './ui/{{pascalCase name}}.tsx'
export { use{{pascalCase name}} } from './model/use{{pascalCase name}}.ts'
`
			},
			{
				type: 'add',
				path: `${PATH.FEATURE}/{{kebabCase name}}/ui/{{pascalCase name}}.tsx`,
				template: `import { use{{pascalCase name}} } from '../model/use{{pascalCase name}}.ts'
import styles from './{{pascalCase name}}.module.scss'
import cn from 'classnames'

export type {{pascalCase name}}Props = {

}

export const {{pascalCase name}} = ({ ...props }: {{pascalCase name}}Props) => {
	const classNames = {
		[styles.{{camelCase name}}]: true
	}

	const {{camelCase name}} = use{{pascalCase name}}()

	return (
		<div className={cn(classNames)}>
			{{pascalCase name}}
		</div>
	)
}
`
			},
			{
				type: 'add',
				path: `${PATH.FEATURE}/{{kebabCase name}}/model/use{{pascalCase name}}.ts`,
				template: `export type {{pascalCase name}}Props = {}

export const use{{pascalCase name}} = ({}: {{pascalCase name}}Props) => {
	return {}
}
`
			},
			{
				type: 'add',
				path: `${PATH.FEATURE}/{{kebabCase name}}/ui/{{pascalCase name}}.module.scss`,
				template: '.{{camelCase name}} {}'
			}
		]
	})
}
