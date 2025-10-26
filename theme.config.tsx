import { useRouter } from 'nextra/hooks';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';
const defaultDescription =
  'Multilingual tutorials, resources, and blogs that teach you how to build production-ready agents with Dify.';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700 }}>
      From Zero to Dify Agent
    </span>
  ),
  project: {
    link: 'https://github.com/'
  },
  chat: {
    link: 'https://discord.gg/'
  },
  docsRepositoryBase: 'https://github.com/',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '简体中文' },
    { locale: 'ja', text: '日本語' }
  ],
  primaryHue: 217,
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = `https://usedify.dev${asPath === '/' ? '' : asPath}`;
    const title = frontMatter.title
      ? `${frontMatter.title} – From Zero to Dify Agent`
      : 'From Zero to Dify Agent';
    const description = frontMatter.description ?? defaultDescription;
    const ogImage = `https://usedify.dev/og?title=${encodeURIComponent(frontMatter.title ?? 'From Zero to Dify Agent')}`;
    const hrefLang = locale ?? defaultLocale ?? 'en';

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content="Dify, AI agents, tutorial, blog, observability" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang={hrefLang} href={url} />
      </>
    );
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Usedify. Crafted with Nextra.
      </span>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
};

export default config;
