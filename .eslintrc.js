const mod = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    "airbnb",
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'react/prop-types': ['error'],
    'class-methods-use-this': 'warn',
    'no-useless-constructor': 'warn',

    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-filename-extension': ['error', {
      "extensions": [
        ".tsx", '.jsx', '.js', '.ts'
      ]
    }],
    'react/function-component-definition': [
      'error', {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],

    'import/extensions': ['off'],

    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "@types"]
      },
      typescript: {}  // this loads <rootdir>/tsconfig.json to eslint
    }
  },
};

module.exports = mod;
