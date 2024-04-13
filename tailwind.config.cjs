/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    transparent: 'transparent',
    current: 'currentColor',
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16'
    },
    extend: {
      colors: {
        text: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d'
        },
        background: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d'
        },
        primary: {
          50: '#fdf7e7',
          100: '#fbefd0',
          200: '#f7dfa1',
          300: '#f4cf71',
          400: '#f0bf42',
          500: '#ecae13',
          600: '#bd8c0f',
          700: '#8e690b',
          800: '#5e4608',
          900: '#2f2304',
          950: '#181102'
        },
        secondary: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d'
        },
        accent: {
          50: '#fbfae9',
          100: '#f7f6d4',
          200: '#f0eca8',
          300: '#e8e37d',
          400: '#e0d952',
          500: '#d9d026',
          600: '#ada61f',
          700: '#827d17',
          800: '#57530f',
          900: '#2b2a08',
          950: '#161504'
        },
        // DEFAULTS
        // colors: {
        //   'text': '#121212',
        //   'background': '#e6e6e6',
        //   'primary': '#edb21d',
        //   'secondary': '#363636',
        //   'accent': '#c3bb22',
        //  },

        // brandOLD: {
        //   faint: '#eff6ff', // blue-50
        //   muted: '#bfdbfe', // blue-200
        //   subtle: '#60a5fa', // blue-400
        //   DEFAULT: '#3b82f6', // blue-500
        //   emphasis: '#1d4ed8', // blue-700
        //   inverted: '#ffffff' // white
        // },
        // backgroundOLD: {
        //   muted: '#f9fafb', // gray-50
        //   subtle: '#f3f4f6', // gray-100
        //   DEFAULT: '#ffffff', // white
        //   emphasis: '#374151' // gray-700
        // },
        // borderOLD: {
        //   DEFAULT: '#e5e7eb' // gray-200
        // },
        // ringOLD: {
        //   DEFAULT: '#e5e7eb' // gray-200
        // },
        // contentOLD: {
        //   subtle: '#9ca3af', // gray-400
        //   DEFAULT: '#6b7280', // gray-500
        //   emphasis: '#374151', // gray-700
        //   strong: '#111827', // gray-900
        //   inverted: '#ffffff' // white
        // }
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' }
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' }
          }
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
    // import("@tailwindcss/line-clamp"),
  ]
};
