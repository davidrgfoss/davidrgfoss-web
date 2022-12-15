// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Davidrg FOSS',
  tagline: 'En este sitio encontrarás diversos manuales y códigos desarrollados por mí.',
  url: 'https://www.davidrgfoss.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gitub/davidrgfoss', // Usually your GitHub org/user name.
  projectName: 'Davidrg FOSS', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/davidrgfoss/davidrgfoss/blob/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/davidrgfoss/davidrgfoss/blob/main/',
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
      algolia: {
      apiKey: '059ea2c29239c71abcdb0713fa265492',
      indexName: 'davidrgfoss',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: '2AY2P0EYAT',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
      navbar: {
        title: 'Davidrg FOSS',
        logo: {
          alt: 'Pagina web Davidrg FOSS',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Manuales',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/davidrgfoss',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Manuales',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Mis redes',
            items: [
              {
                label: 'Correo electronico',
                href: 'mailto:davidrg@davidrgfoss.com',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/davidrg',
              },
              {
              	label: 'GitHub',
              	href: 'https://github.com/davidrg28',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a> © ${new Date().getFullYear()} Davidrg FOSS, Inc. Built with Docusaurus.<br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">licencia de Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
