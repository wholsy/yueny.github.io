import { navbar } from "vuepress-theme-hope";

// 图标 @see https://fontawesome.com/icons/bars?f=classic&s=solid
export default navbar([
  // 默认展示 .README.md 文件
  // "/",

  // // 菜单title 见 《post/demo/README.md》中的 title 属性
  // "/posts/demo/",

  {
    text: "博客",
    icon: "fa-solid fa-bars",
    link: "/blog.md"
  },
  {
    text: "进阶之路",
    icon: "laptop-code",
    link: "/home.md"
  },
  {
    text: "有意思的小工具",
    icon: "circle-info",
    link: "/tools/"
  },

  // {
  //   text: "附件资源",
  //   icon: "pen-to-square",
  //   children: [
  //     {
  //       text: "电脑软件安装包",
  //       icon: "software",
  //       link: "software/readme.md"
  //     },
  //     {
  //       text: "PDF下载",
  //       icon: "pen-to-square",
  //       prefix: "pdf/",
  //       children: [
  //         {
  //           text: "学习书籍",
  //           icon: "book",
  //           link: "books/readme.md",
  //         },
  //         {
  //           text: "数据库论文",
  //           icon: "paper",
  //           link: "paper/",
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
