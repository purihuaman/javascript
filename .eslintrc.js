module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		quotes: ['error', 'double'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'only-multiline'],
		'space-before-function-paren': ['error', 'never'],
		'no-unused-vars': 'warn',
		'react/prop-types': 'off',
	},
};
