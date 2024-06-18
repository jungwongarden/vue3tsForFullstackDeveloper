module.exports = {
  pages: {
    index: {
      entry: 'src/pages/home.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home'
    },
    about: {
      entry: 'src/pages/about.ts',
      template: 'public/about.html',
      filename: 'about.html',
      title: 'About'
    },
    community: {
      entry: 'src/pages/community.ts',
      template: 'public/community.html',
      filename: 'community.html',
      title: 'Community'
    },
    product: {
      entry: 'src/pages/product.ts',
      template: 'public/product.html',
      filename: 'product.html',
      title: 'Product'
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}