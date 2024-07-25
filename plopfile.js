const PATH = {
	UI_COMPONENT: 'src/shared/ui',
	FEATURE: 'src/features',
	ENTITY: 'src/entities',
	WIDGET: 'src/widgets',
	PAGE: 'src/pages'
}

export default function (plop) {
	plop.setGenerator('Page', {
		actions: [
			{
				template: `export { {{pascalCase name}}Page } from './{{pascalCase name}}Page.tsx'
`,
				path: `${PATH.PAGE}/{{kebabCase name}}/index.ts`,
				type: 'add'
			},
			{
				template: `import styles from './styles.module.scss'

export const {{pascalCase name}}Page = () => {
	return (
		<div>
			{{pascalCase name}}Page
		</div>
	)
}
`,
				path: `${PATH.PAGE}/{{kebabCase name}}/{{pascalCase name}}Page.tsx`,
				type: 'add'
			},
			{
				path: `${PATH.PAGE}/{{kebabCase name}}/styles.module.scss`,
				template: '.{{camelCase name}} {}',
				type: 'add'
			}
		],
		prompts: [
			{
				message: 'Enter page name:',
				type: 'input',
				name: 'name'
			}
		],
		description: 'Create new page'
	})

	plop.setGenerator('Widget', {
		actions: [
			{
				template: `export { {{pascalCase name}} } from './{{pascalCase name}}.tsx'
`,
				path: `${PATH.WIDGET}/{{kebabCase name}}/index.ts`,
				type: 'add'
			},
			{
				template: `import styles from './styles.module.scss'

export const {{pascalCase name}} = () => {
	return (
		<div>
			{{pascalCase name}}
		</div>
	)
}
`,
				path: `${PATH.WIDGET}/{{kebabCase name}}/{{pascalCase name}}.tsx`,
				type: 'add'
			},
			{
				path: `${PATH.WIDGET}/{{kebabCase name}}/styles.module.scss`,
				template: '.{{camelCase name}} {}',
				type: 'add'
			}
		],
		prompts: [
			{
				message: 'Enter widget name:',
				type: 'input',
				name: 'name'
			}
		],
		description: 'Create new widget'
	})

	plop.setGenerator('UI component', {
		actions: [
			{
				template: `export { {{pascalCase name}}, type {{pascalCase name}}Props } from './{{pascalCase name}}.tsx'
`,
				path: `${PATH.UI_COMPONENT}/{{pascalCase name}}/index.ts`,
				type: 'add'
			},
			{
				template: `import type { ComponentProps } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

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
`,
				path: `${PATH.UI_COMPONENT}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
				type: 'add'
			},
			{
				path: `${PATH.UI_COMPONENT}/{{pascalCase name}}/styles.module.scss`,
				template: '.{{camelCase name}} {}',
				type: 'add'
			}
		],
		prompts: [
			{
				message: 'Enter component name:',
				type: 'input',
				name: 'name'
			}
		],
		description: 'Create new UI component'
	})

	plop.setGenerator('Feature', {
		actions: [
			{
				template: `export { {{pascalCase name}} } from './ui/{{pascalCase name}}.tsx'
export { use{{pascalCase name}} } from './model/use{{pascalCase name}}.ts'
`,
				path: `${PATH.FEATURE}/{{kebabCase name}}/index.ts`,
				type: 'add'
			},
			{
				template: `import { use{{pascalCase name}} } from '../model/use{{pascalCase name}}.ts'
import styles from './styles.module.scss'
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
`,
				path: `${PATH.FEATURE}/{{kebabCase name}}/ui/{{pascalCase name}}.tsx`,
				type: 'add'
			},
			{
				template: `export type {{pascalCase name}}Props = {}

export const use{{pascalCase name}} = ({}: {{pascalCase name}}Props) => {
	return {}
}
`,
				path: `${PATH.FEATURE}/{{kebabCase name}}/model/use{{pascalCase name}}.ts`,
				type: 'add'
			},
			{
				path: `${PATH.FEATURE}/{{kebabCase name}}/ui/styles.module.scss`,
				template: '.{{camelCase name}} {}',
				type: 'add'
			}
		],
		prompts: [
			{
				message: 'Enter feature name:',
				type: 'input',
				name: 'name'
			}
		],
		description: 'Create new feature'
	})
}
