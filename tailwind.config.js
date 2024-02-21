module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      40: '10rem',
      60: '15rem',
      80: '20rem',
      100: '25rem',
    },
    maxWidth: {
      120: '30rem',
      160: '40rem',
      200: '50rem',
    },
  },
  variants: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      //'cyberpunk',
      {
        mytheme: {
          primary: '#ff00a0',
          secondary: '#00e500',
          accent: '#00e3ff',
          neutral: '#0f1514',
          'base-100': '#223131',
          info: '#00d7ff',
          success: '#00e68b',
          warning: '#eb8b00',
          error: '#cb002f',
          fontFamily: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem",

        },
      },
      'emerald',
    ],
  },
};
