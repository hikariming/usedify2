# 从 0 开始的基于 Dify 的智能体开发教程站点

这是一个使用 [Next.js](https://nextjs.org/) 与 [Nextra](https://nextra.site/) 构建的多语言（中英日）教程与博客站点，旨在帮助开发者从零开始打造基于 Dify 的智能体项目。

## 开发脚本

```bash
pnpm install # 或 npm install / yarn install
npm run dev   # 启动开发服务器
npm run build # 生产构建
npm run start # 启动生产服务器（会在首次启动前自动构建）
npm run lint  # 代码检查
```

## 内容结构

- `pages/index.mdx`：站点首页（含封面）
- `pages/tutorial/`：分步教程
- `pages/blog/`：博客文章
- `pages/resources/`：资源与文章
- `theme.config.tsx`：Nextra 主题配置与 SEO 设置

## 多语言

站点默认语言为英语，支持简体中文与日语，您可以在右上角切换语言。所有主要页面均提供 `en`、`zh` 与 `ja` 三份内容，可按需扩展。

## 许可证

MIT
