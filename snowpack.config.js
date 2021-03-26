// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const ecmaVersion = "es2018";

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "public": { url: "/", static: true, resolve: false },
    "src": "/dist",
  },
  buildOptions: {
    minify: false,
  },
  plugins: [
    "@snowpack/plugin-dotenv",
  "@snowpack/plugin-postcss",
  ['snowpack-plugin-terser', {
    terserOptions: {
      compress: {
        ecma: ecmaVersion
      },
      format: {
        ecma: ecmaVersion
      }
    },
  }]
],
  optimize: {
    entrypoints: [
      "src/index.js",
    ],
    bundle: true,
    minify: false,
    treeshake: true,
    target: ecmaVersion,
  }
};
