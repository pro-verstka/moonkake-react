module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'simple-import-sort'],
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
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error'
	},
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {
				"simple-import-sort/imports": [
					"error",
					{
						"groups": [
							// External packages.
							["^"],
							// Internal packages.
							["^@/"],
							// Side effect imports.
							["^\\u0000"],
							// Parent imports.
							["^\\.\\.(?!/?$)", "^\\.\\./?$"],
							// Other relative imports.
							["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
							// Style imports.
							["^.+\\.(scss|sass|css)$"]
						]
					}
				]
			}
		}
	]
}
