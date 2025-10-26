import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true
});

const config = withNextra({
  trailingSlash: true,
  reactStrictMode: true
});

export default config;
