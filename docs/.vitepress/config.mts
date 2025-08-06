import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "家庭助理",
  description: "Home Assistant Windows Application",
  lang: "zh-CN",
  base: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://www.home-assistant.io/images/favicon-192x192.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '教程', link: '/guide' }
    ],

    sidebar: [
      {
        text: '使用教程',
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
    ]
  },
  lastUpdated: true,

})
