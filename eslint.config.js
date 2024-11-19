import eslintConfigPrettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactHooks from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import globals from 'globals'

export default [
	perfectionist.configs['recommended-line-length'],
	eslintConfigPrettier,
	{
		files: ['**/*.{ts,tsx}']
	},
	{
		languageOptions: {
			globals: globals.browser
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			...reactHooks.configs.recommended.rules,
			'react/jsx-curly-brace-presence': [
				'error',
				{
					propElementValues: 'always',
					children: 'never',
					props: 'never'
				}
			],
			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true
				}
			],
			'@typescript-eslint/no-explicit-any': [
				'warn',
				{
					ignoreRestArgs: true
				}
			],
			'react-hooks/exhaustive-deps': 'error',
			'perfectionist/sort-imports': 'error',
			'perfectionist/sort-classes': "off",
			'perfectionist/sort-modules': "off",
			'no-mixed-spaces-and-tabs': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'react/prop-types': 'off',
			'no-extra-semi': 'warn'
		},
		plugins: {
			'react-refresh': reactRefresh,
			'react-hooks': reactHooks
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
]
