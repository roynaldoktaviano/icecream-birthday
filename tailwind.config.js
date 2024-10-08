/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        'spinn' : {
          '0%' :{
            transform: 'rotate(0deg)'
          },
          '100%' : {
            transform: 'rotate(-360deg)'
          }
        },
        'move' : {
          '0%' : {
            transform: 'translateX(-150px)'
          },
          '100%' : {
            transform: 'translateX(400px)'
          }
        }
      }
    },
    fontFamily : {
      'monts' : ['Montserrat'],
      'slopes' :['Slope']
    },
    animation: {
      'spin': 'spin 10s .5s linear infinite;',
      'spin-s': 'spinn 15s linear infinite;',
      'spin-s2': 'spin 20s .2s linear infinite;',
      'jalan': 'move 10s linear infinite;'


    }
  },
  plugins: [],
}