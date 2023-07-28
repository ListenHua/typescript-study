import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";
import nav from "./configs/nav.js";
import sidebar from "./configs/sidebar";

export default defineConfig({
  // lang: 'en-US',
  title: "TypeScript学习",
  description: "使用 Vitepress 搭建组件库文档站点。",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  base: process.env.BASE || "/",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },

    theme: { light: "github-light", dark: "github-dark" },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: "less",
      });
    },
  },

  themeConfig: {
    outlineTitle: "本页目录",
    lastUpdatedText: "上次更新",
    home: "/",
    logo: "/logo.svg",

    // nav
    nav,

    // sidebar
    sidebar,

    editLink: {
      pattern:
        "https://github.com/ListenHua/typescript-study/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ListenHua/typescript-study" },
    ],
  },
});
