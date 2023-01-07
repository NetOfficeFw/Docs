import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  srcDir: 'app',

  title: 'NetOffice',
  description: 'NetOffice Framework documentation.',
  lang: 'en-US',

  themeConfig: {
    nav: [
      {
        text: 'Office Add-in',
        link: '/addins/',
        activeMatch: '^/addins/'
      },
      {
        text: 'Tutorials',
        link: '/tutorials/',
        activeMatch: '^/tutorials/'
      },
      {
        text: 'Toolbox',
        link: '/toolbox/',
        activeMatch: '^/toolbox/'
      },
      {
        text: 'Documentation',
        link: '/documentation/',
        activeMatch: '^/documentation/'
      },
    ],

    sidebar: {
      '/tutorials/': [
        {
          text: 'NetOffice Tutorials',
          items: [
            { text: 'Understand COM Proxy Management', link: '/tutorials/tutorial01_en_cs' },
            { text: 'Efficient using Dispose', link: '/tutorials/tutorial02_en_cs' },
            { text: 'Using Dispose with event exporting Objects', link: '/tutorials/tutorial03_en_cs' },
            { text: 'Observable COM Proxy Count', link: '/tutorials/tutorial04_en_cs' },
            { text: 'Understanding COMObject', link: '/tutorials/tutorial05_en_cs' },
            { text: 'Understand Variant Type', link: '/tutorials/tutorial06_en_cs' },
            { text: 'Invoker', link: '/tutorials/tutorial07_en_cs' },
            { text: 'Check for a specific entity support at runtime', link: '/tutorials/tutorial08_en_cs' },
          ],
        }
      ]
    },

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
