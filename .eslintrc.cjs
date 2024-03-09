module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        "airbnb", "airbnb/hooks",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn"
    },
}
