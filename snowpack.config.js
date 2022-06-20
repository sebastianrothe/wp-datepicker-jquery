// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

// CAUTION: needs to be "es2018", because import.meta needs to be transformed for non-ESM build
const ecmaVersion = "es2018"

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true, resolve: false },
    src: "/dist",
  },
  buildOptions: {
    minify: false,
  },
  plugins: ["@snowpack/plugin-dotenv", "@snowpack/plugin-postcss"],
  optimize: {
    entrypoints: ["src/index.js"],
    bundle: true,
    minify: true,
    treeshake: true,
    target: ecmaVersion,
  },
}
