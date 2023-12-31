// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lodine Documentation",
  tagline: "Learn how to use our products and services",
  favicon: "img/favicon.ico",
  url: "https://docs.lodine.xyz",
  baseUrl: "/",

  organizationName: "lodine-software",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/lodine-software/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Lodine",
        logo: {
          alt: "Lodine logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "docs/introduction",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://lodine.xyz",
            position: "right",
            label: "lodine.xyz",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "X",
                href: "https://x.com/ldnsoft",
              },
              {
                label: "YouTube",
                href: "https://youtube.com/@ldnsoft",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/ldnsoft",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lodine`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark')
      },
    }),
}

module.exports = config
