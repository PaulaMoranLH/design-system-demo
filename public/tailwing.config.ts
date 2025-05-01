import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#62534B',
        surface: '#FFFBF9',
      },
      fontFamily: {
        'founders': ['Founders Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  plugins: [],
}

export default config