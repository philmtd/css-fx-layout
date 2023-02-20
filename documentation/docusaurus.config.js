// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'css-fx-layout',
  tagline: 'A responsive and modular SCSS flexbox library 📚',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://philmtd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'philmtd', // Usually your GitHub org/user name.
  projectName: 'css-fx-layout', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      hashed: true,
    }]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      /** image: 'img/docusaurus-social-card.jpg', */
      navbar: {
        title: 'css-fx-layout',
        /**logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },**/
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Docs',
          },
          /** {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/philmtd/css-fx-layout',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About the project',
                to: '/docs/about'
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/philmtd/css-fx-layout',
              },
            ],
          },
          {
            title: 'Me',
            items: [
              {
                label: 'Web',
                href: 'https://philmtd.de'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/philmtd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/philmtd',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} authors of css-fx-layout. Docs built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
