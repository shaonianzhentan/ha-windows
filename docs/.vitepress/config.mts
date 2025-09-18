import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "家庭助理",
  description: "Home Assistant Windows Application",
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: 'https://www.home-assistant.io/images/favicon-192x192.png' }]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://www.home-assistant.io/images/favicon-192x192.png',
    outlineTitle: '页面导航',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Application', link: '/guide' }
    ],

    sidebar: [
      {
        text: 'Application',
        items: [
          { text: '应用介绍', link: '/guide' },
          { text: '消息推送', link: '/notify' },
          { text: '磁贴显示', link: '/tile' }
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shaonianzhentan/ha-windows' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  lastUpdated: true,

})
