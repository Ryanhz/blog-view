module.exports = {
  ident: 'postcss',
  plugins: [
    require('autoprefixer')({
      browsers: [
        // 加这个后可以出现额外的兼容性前缀
        "> 0.01%",
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    })
  ]
}