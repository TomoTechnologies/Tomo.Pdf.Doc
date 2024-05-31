import { DocusaurusConfig } from '@docusaurus/types';

const config: DocusaurusConfig = {
  // Other configurations
  title: 'TomoPDF Documentation',
  tagline: 'Comprehensive documentation for TomoPDF',
  url: 'https://yourusername.github.io',
  baseUrl: '/Tomo.Pdf.Doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TomoTechnologies', // GitHub org/user name.
  projectName: 'Tomo.Pdf.Doc', // GitHub repo name.

  themeConfig: {
    navbar: {
      title: 'TomoPDF Documentation',
      logo: {
        alt: 'TomoPDF Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/', // Serve the docs at the site's root
        },
      },
    ],
  ],
};

export default config;
