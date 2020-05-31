module.exports = {
  title: 'React Native Bootstrap',
  tagline: 'Bootstrap components built for React Native',
  url: 'https://react-native-bootstrap.github.io',
  baseUrl: '/',
  favicon: 'img/rnb.png',
  organizationName: 'react-native-bootstrap', // Usually your GitHub org/user name.
  projectName: 'react-native-bootstrap', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Native Bootstrap',
      logo: {
        alt: 'React Native Bootstrap Logo',
        src: 'img/rnb.png',
      },
      links: [
        {
          to: 'docs/getting-started/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'docs/components/alert',
          label: 'Components',
          position: 'right',
        },
        {
          href:
            'https://github.com/react-native-bootstrap/react-native-bootstrap',
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
              label: 'Getting Started',
              to: 'docs/getting-started/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/alexakasanjeev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href:
                'https://github.com/react-native-bootstrap/react-native-bootstrap',
            },
            {
              label: 'Demo App',
              href:
                'https://github.com/react-native-bootstrap/react-native-bootstrap-app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Native Bootstrap Open Source`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: '${repoUrl}/tree/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
