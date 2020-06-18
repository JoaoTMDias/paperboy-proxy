module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ["plugin:@typescript-eslint/recommended", "airbnb", "prettier"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"@typescript-eslint/interface-name-prefix": [2, "always"],
		"@typescript-eslint/class-name-casing": 2,
		"@typescript-eslint/explicit-member-accessibility": 0,
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-var-requires": 0,
		"no-underscore-dangle": 0,
		"import/imports-first": ["error", "absolute-first"],
		"import/newline-after-import": "error",
		"import/prefer-default-export": 0,
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				ts: "never",
			},
		],
		"no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["draftState"] }],
		"no-unused-expressions": 0,
		"no-console": 0,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts"],
		},
		"import/resolver": {
			typescript: {
				directory: "./",
			},
			node: {
				extensions: [".js", ".ts"],
				moduleDirectory: ["node_modules", "./"],
			},
		},
	},
};
