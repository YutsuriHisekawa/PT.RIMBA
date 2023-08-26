/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
      'tetsuya': ['Monomaniac One',],
      'logo' : ['Gloria Hallelujah'],
      'japan': ['Aoboshi One'],
      'japan2' : ['Tsukimi Rounded']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

