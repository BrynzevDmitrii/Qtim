const eslintPluginVue = require('eslint-plugin-vue');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');
const vueParser = require('vue-eslint-parser');

module.exports = [
  {
    ignores: ['node_modules/', 'dist/', '.nuxt/', '.output/', 'eslint-rules/'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptEslintParser,
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        definePageMeta: 'readonly',
        $fetch: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        onMounted: 'readonly',
        onBeforeUnmount: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useFetch: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      vue: eslintPluginVue,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // @features layer - может импортировать только из @entities и @shared
  {
    files: ['app/features/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@features/*'],
              message:
                '❌ @features не может импортировать из других @features. Используйте @entities или @shared',
            },
            {
              group: ['@widgets/*'],
              message: '❌ @features не может импортировать из @widgets',
            },
            {
              group: ['@pages/*'],
              message: '❌ @features не может импортировать из @pages',
            },
          ],
        },
      ],
    },
  },

  // @widgets layer - может импортировать только из @entities и @shared
  {
    files: ['app/widgets/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@features/*'],
              message: '❌ @widgets не может импортировать из @features',
            },
            {
              group: ['@pages/*'],
              message: '❌ @widgets не может импортировать из @pages',
            },
          ],
        },
      ],
    },
  },

  // @entities layer - может импортировать только из @shared
  {
    files: ['app/entities/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@features/*'],
              message: '❌ @entities не может импортировать из @features',
            },
            {
              group: ['@widgets/*'],
              message: '❌ @entities не может импортировать из @widgets',
            },
            {
              group: ['@pages/*'],
              message: '❌ @entities не может импортировать из @pages',
            },
          ],
        },
      ],
    },
  },

  // @shared layer - не может импортировать из других слоёв
  {
    files: ['app/shared/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@features/*'],
              message: '❌ @shared не может импортировать из @features',
            },
            {
              group: ['@widgets/*'],
              message: '❌ @shared не может импортировать из @widgets',
            },
            {
              group: ['@entities/*'],
              message: '❌ @shared не может импортировать из @entities',
            },
            {
              group: ['@pages/*'],
              message: '❌ @shared не может импортировать из @pages',
            },
          ],
        },
      ],
    },
  },
];
