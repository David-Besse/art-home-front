module.exports = {
  plugins: [
    ['postcss-preset-env', {
      // Options pour postcss-preset-env
      browsers: 'last 2 versions',
      autoprefixer: { grid: true }
    }],
    'cssnano'
  ]
};
