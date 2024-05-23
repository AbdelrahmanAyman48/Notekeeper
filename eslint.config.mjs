/* eslint-disable jsx-a11y/rule-name */

import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';


export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    pluginReactConfig,
];