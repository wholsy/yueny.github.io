# Install & Run

[home](https://theme-hope.vuejs.press/zh/get-started/content.html#markdown)

```
# Install Node.js
pnpm install

# use pnpm
corepack enable

# 创建项目模板
pnpm create vuepress-theme-hope grains/docs

# 启动开发服务器
pnpm run docs:dev
pnpm docs:dev

# 构建项目并输出
pnpm docs:build

# 清除缓存并启动开发服务器
pnpm docs:clean-dev
```

# vuepress cmd
## vuepress dev
vuepress dev [dir] 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。

## vuepress build
vuepress build [dir] 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。

# 升级版本

> pnpm dlx vp-update

# VuePress

VuePress 是以 Markdown 为中心的。
项目中的每一个 Markdown 文件都是一个单独的页面。
