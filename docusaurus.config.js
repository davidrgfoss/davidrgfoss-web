// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');

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

  plugins: [
      '@docusaurus/theme-live-codeblock',
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 100,
          max: 1920,
          min: 400,
          steps: 17,
          disableInDev: false,
        },
      ],
  ],

  scripts: [
    {
      src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
      async: true,
      'data-name': 'BMC-Widget',
      'data-id': 'davidrgfoss',
      'data-description': 'Apoyame comprandome un cafe!!',
      'data-message': 'Apoyame comprandome un cafe!!',
      'data-color': '#40DCA5',
      'data-position': 'Right',
      'data-x_margin': '18',
      'data-y_margin': '18',
    },
    {
      src: 'https://uptime.betterstack.com/widgets/announcement.js',
      async: true,
      'data-id': '171061',
      type: 'text/javascript',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/davidrgfoss/davidrgfoss-web/blob/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/davidrgfoss/davidrgfoss-web/blob/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          blogTitle: 'Blog',
          blogDescription: 'Un lugar escondido de la red donde encontrar información de calidad :)',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Todos los posts',
          routeBasePath: 'blog',
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
      apiKey: '6090c7ca1dd724ed02a9d58ea222bad4',
      indexName: 'davidrgfoss',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'MEUBDLA2H4',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
      colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
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
          {
            href: 'https://status.davidrgfoss.com/',
            label: 'Status',
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
                href: 'https://gitlab.com/davidrgfoss',
              },
              {
              	label: 'GitHub',
              	href: 'https://github.com/davidrgfoss',
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
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json', 'jsx', 'javascript', 'cpp', 'markup', 'git', 'markdown', 'sql', 'python', 'typescript', 'yaml', 'css', 'makefile'],
      },
         liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    }),
};

module.exports = config;
