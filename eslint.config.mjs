import js_eslint from '@eslint/js';
import ts_eslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default ts_eslint.config(
	js_eslint.configs.recommended,
	...ts_eslint.configs.strict,
	...ts_eslint.configs.stylistic,
	{
		ignores: ['lib/**'],
	},
	{
		rules: {
			'quotes': ['error', 'single', {
				'allowTemplateLiterals': true
			}],
			'semi': 'error',
			/* Do not suggest to merge signatures with different types since argument name is lost */
			'@typescript-eslint/unified-signatures': 'off',
		}
	}
);
