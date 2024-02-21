import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

import pluginRemarkCodeTitle from 'remark-code-title'

const config: Config = {
  title: 'track-time-cli',
  tagline: 'A Powerful CLI Time Tracking Utility',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'f3rno64', // Usually your GitHub org/user name.
  projectName: 'track-time-cli', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-tailwindcss'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          remarkPlugins: [pluginRemarkCodeTitle]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Track Time CLI Docs',
      items: [
        { to: '/docs/install', label: 'Install', position: 'left' },
        {
          to: '/docs/category/basic-concepts',
          label: 'Basic Concepts',
          position: 'left'
        },
        { to: '/docs/category/commands', label: 'Commands', position: 'left' },
        {
          href: 'https://www.npmjs.com/package/track-time-cli',
          label: 'NPM',
          position: 'right'
        },
        {
          href: 'https://github.com/f3rno64/track-time-cli',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { to: '/docs/install', label: 'Install' },
            { to: '/docs/category/basic-concepts', label: 'Basic Concepts' },
            { to: '/docs/category/commands', label: 'Commands' }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/f3rno64/track-time-cli',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/track-time-cli',
            }
          ]
        }
      ]
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.synthwave84,
    }
  } satisfies Preset.ThemeConfig
}

export default config
