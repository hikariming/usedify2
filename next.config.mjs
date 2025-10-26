import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true
});

const config = withNextra({
  i18n: {
    locales: ['en', 'zh', 'ja'],
    defaultLocale: 'en'
  },
  trailingSlash: true,
  reactStrictMode: true
});

export default config;
