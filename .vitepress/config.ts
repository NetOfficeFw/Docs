import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  srcDir: 'app',
  cleanUrls: 'with-subfolders',

  title: 'NetOffice',
  description: 'NetOffice Framework documentation.',
  lang: 'en-US',

  themeConfig: {
    nav: [
      { text: 'Office Add-ins', link: '/addins/'},
      { text: 'Tutorials', link: '/tutorials/'},
      { text: 'Toolbox', link: '/toolbox/'},
      { text: 'Documentation', link: '/documentation/'}
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NetOfficeFw/NetOffice' },
      { icon: 'twitter', link: 'https://twitter.com/NetOfficeFw' },
    ],

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2016-2023 NetOffice Framework. Documentation licensed under <a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a>.`
    },
  },
})
