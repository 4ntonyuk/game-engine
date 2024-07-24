/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-typescript',
      "@snowpack/plugin-sass"
    ],
  ],
  alias: {
    "@": "./src", 
    "@core": "./src/core",
    "@objects": "./src/objects",
    "@scenes": "./src/scenes",
  }
};
