/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  alias: {
    "@": "./src",
  },
  plugins: [
    [
      '@snowpack/plugin-typescript',
      "@snowpack/plugin-sass"
    ],
  ]
};
