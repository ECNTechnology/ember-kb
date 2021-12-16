const getChildren = require('./childScript')

module.exports = {
  title: 'Ember  |  Knowledge Base',
  description: '',
  plugins: [
    '@vuepress/back-to-top',
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     'ga': 'UA-107905087-8' // UA-00000000-0
    //   }
    // ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    logo: '/images/ember_logo.svg',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Guides',
      link: '/guides/ember/'
    },
    ],
    sidebar: {
      '/guides/ember/': [{
        title: 'Ember',
        children: getChildren('./guides/ember/')
      }],
    },
    activeHeaderLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated:', // string | boolean
  },
};