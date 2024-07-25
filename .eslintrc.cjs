module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:perfectionist/recommended-line-length-legacy'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'perfectionist'],
	rules: {
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
		'no-extra-semi': 'warn',
		'no-mixed-spaces-and-tabs': 'off',
		'react-hooks/exhaustive-deps': 'error',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'never',
				propElementValues: 'always'
			}
		],
		'perfectionist/sort-imports': 'error'
	}
}
