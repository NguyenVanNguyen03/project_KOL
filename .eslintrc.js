module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	"extends": ["airbnb-base", "plugin:prettier/recommended"],
	"plugins": ["prettier"],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		"no-console": "off",
	}
};
