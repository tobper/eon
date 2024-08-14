import js_eslint from '@eslint/js';
import ts_eslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default ts_eslint.config(
	js_eslint.configs.recommended,
	...ts_eslint.configs.strict,
	...ts_eslint.configs.stylistic,
	{
		ignores: ['dist/**'],
	},
	{
		rules: {
			quotes: ['error', 'single', {
				'allowTemplateLiterals': true
			}],
			semi: 'error',
		}
	}
);
