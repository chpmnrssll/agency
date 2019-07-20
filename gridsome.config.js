/* eslint no-param-reassign: "error" */

module.exports = {
  siteName: 'Agency',
  siteDescription: 'Agency site built in Gridsome',
  siteUrl: 'https://agency-gridsome.netlify.com/',
  metaData: {
    siteName: 'Agency',
    siteDescription: 'Agency site built in Gridsome',
    siteUrl: 'https://agency-gridsome.netlify.com/',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: 'src/admin/index.js',
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss', './src/**/*.md'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900,
      },
    },
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        };

        return options;
      });

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      scss: {},
    },
  },
};
