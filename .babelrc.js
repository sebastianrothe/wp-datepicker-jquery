var env = process.env.BABEL_ENV || process.env.NODE_ENV;

// inline plugin
module.exports = {
  plugins: [
    env === 'production' && ["transform-remove-console", { "exclude": [ "error", "warn"] }],
    env === 'test' && "transform-es2015-modules-commonjs"
  ].filter(Boolean)
};
