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
      borderWidth: {
        '3': '3px',
      },
      colors: {
        claude: {
          light: {
            bg: '#ffffff',
            surface: '#ffffff',
            sidebar: '#ffffff',
            border: '#e2e8f0',
            primary: '#c2410c',
            'primary-hover': '#f97316',
            text: '#1a202c',
            'text-secondary': '#2d3748',
            'text-tertiary': '#a0aec0',
            accent: '#ffeadb',
            highlight: '#fff3ec',
            code: '#f0f0f0',
            'code-border': '#e2e8f0',
          },
          dark: {
            bg: '#1a202c',
            surface: '#1a202c',
            sidebar: '#2d3748',
            border: '#4a5568',
            primary: '#f97316',
            'primary-hover': '#ed8936',
            text: '#f7fafc',
            'text-secondary': '#e2e8f0',
            'text-tertiary': '#718096',
            accent: '#553c30',
            highlight: '#744c3a',
            code: '#2d3748',
            'code-border': '#4a5568',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SFMono-Regular', 'JetBrains Mono', 'monospace'],
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
