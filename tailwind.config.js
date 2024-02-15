/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue,tsx,jsx,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        'xs': '0px'
      },
      colors: {
        'soft-primary': 'rgb(132,209,135)',
        'primary': 'rgb(0,178,7)',
        'hard-primary': 'rgb(44,116,47)',
        'warning': 'rgb(255,138,0)',
        'danger': 'rgb(234,75,72)',
        'gray-9': 'rgb(25,25,25)',
        'gray-8': 'rgb(51,51,51)',
        'gray-7': 'rgb(76,76,76)',
        'gray-6': 'rgb(102,102,102)',
        'gray-5': 'rgb(128,128,128)',
        'gray-4': 'rgb(153,153,153)',
        'gray-3': 'rgb(179,179,179)',
        'gray-2': 'rgb(204,204,204)',
        'gray-1': 'rgb(230,230,230)',
        'gray-0': 'rgb(242,242,242)',
        'green-gray-9': 'rgb(0,38,3)',
        'green-gray-8': 'rgb(23,59,26)',
        'green-gray-7': 'rgb(43,87,46)',
        'green-gray-6': 'rgb(64,107,66)',
        'green-gray-5': 'rgb(97,128,98)',
        'green-gray-4': 'rgb(122,153,124)',
        'green-gray-3': 'rgb(150,178,151)',
        'green-gray-2': 'rgb(180,204,180)',
        'green-gray-1': 'rgb(218,229,218)',
        'green-gray-0': 'rgb(237,242,238)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

