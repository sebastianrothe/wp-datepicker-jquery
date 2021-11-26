const cssnano = require("cssnano")
const reporter = require("postcss-fail-on-warn")
const presetEnv = require("postcss-preset-env")({
  features: {
    "nesting-rules": true,
  },
})
const stylelint = require("stylelint")

const globalPlugins = [stylelint, presetEnv, reporter]

const plugins =
  process.env.NODE_ENV === "production"
    ? [...globalPlugins, cssnano]
    : globalPlugins

module.exports = { plugins }
