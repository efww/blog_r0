/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        claude: {
          light: {
            bg: '#FFFFFF',
            surface: '#F7F7F8', 
            sidebar: '#EFEFEF',
            border: '#E5E5E5',
            primary: '#5745F2',
            'primary-hover': '#4938E0',
            text: '#141619',
            'text-secondary': '#585962',
            'text-tertiary': '#8B8C95',
            accent: '#F2F2F6',
            code: '#F0F0F0',
            'code-border': '#E0E0E0',
          },
          dark: {
            bg: '#141619',
            surface: '#1B1D21',
            sidebar: '#2D2E33',
            border: '#35373E',
            primary: '#5745F2',
            'primary-hover': '#685CF7',
            text: '#F7F7F8',
            'text-secondary': '#9B9BA7',
            'text-tertiary': '#6B6C75',
            accent: '#2B2D36',
            code: '#24262b',
            'code-border': '#35373E',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'claude-light': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'claude-dark': '0 2px 8px rgba(0, 0, 0, 0.2)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.claude.light.primary'),
              '&:hover': {
                color: theme('colors.claude.light.primary-hover'),
              },
            },
            code: {
              backgroundColor: theme('colors.claude.light.code'),
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.claude.dark.text'),
            a: {
              color: theme('colors.claude.dark.primary'),
              '&:hover': {
                color: theme('colors.claude.dark.primary-hover'),
              },
            },
            strong: {
              color: theme('colors.claude.dark.text'),
            },
            h1: {
              color: theme('colors.claude.dark.text'),
            },
            h2: {
              color: theme('colors.claude.dark.text'),
            },
            h3: {
              color: theme('colors.claude.dark.text'),
            },
            h4: {
              color: theme('colors.claude.dark.text'),
            },
            code: {
              backgroundColor: theme('colors.claude.dark.code'),
            },
            blockquote: {
              color: theme('colors.claude.dark.text-secondary'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
