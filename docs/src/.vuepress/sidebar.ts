import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/tools/": [
    {
      text: "图片转换",
      // prefix: "conversion/",
      collapsible: true,
      children: [
        {
          text: "png-to-svg",
          icon: "person-chalkboard",
          link: "https://www.aconvert.com/cn/image/png-to-svg/",
        },
        {
          text: "图片转卡通",
          icon: "person-chalkboard",
          link: "https://www.insmind.com/zh-cn/photo-to-cartoon/",
        },
        {
          text: "图片转黑白",
          icon: "person-chalkboard",
          link: "https://www.gaitubao.com/color2gray",
        },
        {
          text: "图片无损压缩",
          icon: "person-chalkboard",
          link: "https://freecompress.com/zh-cn/compress-image",
        },
      ],
    },
    "info",
  ],

  // 必须放在最后面
  "/": [
    // 主页
    "",
    {
      text: "前言",
      link: "home",
      icon: "fa-solid fa-terminal"
    },

    {
      text: "密码学",
      icon: "fa-solid fa-shield-halved",
      collapsible: true,
      prefix: "posts/cryptography/",
      children: [
        {
          prefix: "java/",
          text: "Java 加解密那些事",
          collapsible: true,
          children: [
            "readme.md",

          ],
        },
        {
          prefix: "js/",
          text: "JS 加解密",
          // collapsible: true,
          children: "structure",
        },
      ],
    },

    {
      text: "RUST",
      // collapsible: true,
      prefix: "posts/rust/",
      children: "structure",
    },

    {
      text: "JAVA",
      // collapsible: true,
      prefix: "posts/java/",
      children: [
        {
          text: "Java基础",
          // collapsible: true,
          // 控制显示的菜单
          prefix: "posts/java",
          children: [
            // // readme小写一定要带上.md，否则找不到
            // {
            //   prefix: "overview/",
            //   text: "2.1 Java概述及环境配置",
            //   collapsible: true,
            //   children: [
            //     "readme.md",
            //     "what-is-java",
            //     "jdk-install-config",
            //     "IDEA-install-config",
            //     "hello-world",
            //   ],
            // },
            // {
            //   text: "2.2 Java语法基础",
            //   collapsible: true,
            //   children: [
            //     "basic-extra-meal/48-keywords",
            //     "basic-grammar/javadoc",
            //     "basic-grammar/basic-data-type",
            //     "basic-grammar/type-cast",
            //     "basic-extra-meal/int-cache",
            //     "basic-grammar/operator",
            //     "basic-grammar/flow-control",
            //     "basic-grammar/basic-exercise",
            //   ],
            // },
            // {
            //   text: "2.3 数组&字符串",
            //   collapsible: true,
            //   children: [
            //     "array/array",
            //     "array/double-array",
            //     "array/print",
            //     "string/string-source",
            //     "string/immutable",
            //     "string/constant-pool",
            //     "string/intern",
            //     "string/builder-buffer",
            //     "string/equals",
            //     "string/join",
            //     "string/split",
            //   ],
            // },
            // {
            //   text: "2.4 面向对象编程",
            //   collapsible: true,
            //   children: [
            //     "oo/object-class",
            //     "oo/package",
            //     "oo/var",
            //     "oo/method",
            //     "basic-extra-meal/varables",
            //     "oo/native-method",
            //     "oo/construct",
            //     "oo/access-control",
            //     "oo/code-init",
            //     "oo/abstract",
            //     "oo/interface",
            //     "oo/inner-class",
            //     "oo/encapsulation-inheritance-polymorphism",
            //     "oo/this-super",
            //     "oo/static",
            //     "oo/final",
            //     "basic-extra-meal/instanceof",
            //     "basic-extra-meal/immutable",
            //     "basic-extra-meal/override-overload",
            //     "basic-extra-meal/annotation",
            //     "basic-extra-meal/enum",
            //   ],
            // },
            // {
            //   text: "2.5 集合框架（容器）",
            //   collapsible: true,
            //   prefix: "collection/",
            //   children: [
            //     "gailan",
            //     "arraylist",
            //     "linkedlist",
            //     "stack",
            //     "hashmap",
            //     "linkedhashmap",
            //     "treemap",
            //     "arraydeque",
            //     "PriorityQueue",
            //     "time-complexity",
            //     "list-war-2",
            //     "generic",
            //     "iterator-iterable",
            //     "fail-fast",
            //     "comparable-omparator",
            //     "WeakHashMap",
            //   ],
            // },
            // {
            //   text: "2.6 Java IO",
            //   collapsible: true,
            //   prefix:"io/",
            //   children: [
            //     "shangtou",
            //     "file-path",
            //     "stream",
            //     "reader-writer",
            //     "buffer",
            //     "char-byte",
            //     "serialize",
            //     "Serializbale",
            //     "transient",
            //     "print",
            //   ],
            // },
            // {
            //   text: "2.7 异常处理",
            //   collapsible: true,
            //   prefix:"exception/",
            //   children: [
            //     "gailan",
            //     "try-with-resources",
            //     "shijian",
            //     "npe",
            //     "try-catch-xingneng",
            //   ],
            // },
            // {
            //   text: "2.8 常用工具类",
            //   collapsible: true,
            //   prefix:"common-tool/",
            //   children: [
            //     "scanner",
            //     "arrays",
            //     "StringUtils",
            //     "Objects",
            //     "collections",
            //     "hutool",
            //     "guava",
            //     "utils",
            //   ],
            // },
            // {
            //   text: "2.9 Java新特性",
            //   prefix: "java8/",
            //   link: "/java8/",
            //   collapsible: true,
            //   children: [
            //     "stream",
            //     "optional",
            //     "Lambda",
            //     "java14",
            //   ],
            // },
            // {
            //   text: "2.10 网络编程",
            //   collapsible: true,
            //   prefix: "socket/",
            //   children: [
            //     "network-base",
            //     "socket",
            //     "http",
            //   ],
            // },
            // {
            //   text: "2.11 NIO",
            //   collapsible: true,
            //   prefix: "nio/",
            //   children: [
            //     "nio-better-io",
            //     "BIONIOAIO",
            //     "buffer-channel",
            //     "paths-files",
            //     "network-connect",
            //     "moxing",
            //   ],
            // },
            // {
            //   text: "2.12 Java重要知识点",
            //   prefix:"basic-extra-meal/",
            //   collapsible: true,
            //   children: [
            //     "java-naming",
            //     "java-unicode",
            //     "box",
            //     "deep-copy",
            //     "hashcode",
            //     "pass-by-value",
            //     "true-generic",
            //     "fanshe",
            //   ],
            // },
            // {
            //   text: "2.13 并发编程",
            //   collapsible: true,
            //   prefix: "thread/",
            //   children: [
            //     "readme.md",
            //     "wangzhe-thread",
            //     "callable-future-futuretask",
            //     "thread-state-and-method",
            //     "thread-group-and-thread-priority",
            //     "why-need-thread",
            //     "thread-bring-some-problem",
            //     "jmm",
            //     "volatile",
            //     "synchronized-1",
            //     "synchronized",
            //     "pianxiangsuo",
            //     "cas",
            //     "aqs",
            //     "lock",
            //     "reentrantLock",
            //     "ReentrantReadWriteLock",
            //     "condition",
            //     "LockSupport",
            //     "map",
            //     "ConcurrentHashMap",
            //     "ConcurrentLinkedQueue",
            //     "BlockingQueue",
            //     "CopyOnWriteArrayList",
            //     "ThreadLocal",
            //     "pool",
            //     "ScheduledThreadPoolExecutor",
            //     "atomic",
            //     "Unsafe",
            //     "CountDownLatch",
            //     "fork-join",
            //     "shengchanzhe-xiaofeizhe",
            //   ],
            // },
            // {
            //   text: "JVM",
            //   prefix: "jvm/",
            //   collapsible: true,
            //   children: [
            //     // 显示的文章内容
            //     "readme.md",
            //     "what-is-jvm",
            //     "how-run-java-code",
            //     "class-load",
            //     "class-file-jiegou",
            //     "bytecode",
            //     "vm-stack-register",
            //     "zijiema-zhiling",
            //     "stack-frame",
            //     "neicun-jiegou",
            //     "gc",
            //     "gc-collector",
            //     "whereis-the-object",
            //     "jit",
            //     "console-tools",
            //     "view-tools",
            //     "arthas",
            //     "oom",
            //     "cpu-percent-100",
            //     "zongjie",
            //   ],
            // },
          ],
        },
        {
          text: "Java进阶",
          // collapsible: true,
          // prefix: "posts/java",
          children: [
        //     {
        //       text: "3.1 开发/构建工具",
        //       collapsible: true,
        //       children: [
        //         {
        //           text: "3.1.1 IDE",
        //           collapsible: true,
        //           children: [
        //             "ide/4-debug-skill",
        //             "ide/xechat",
        //             "ide/shenji-chajian-10",
        //           ],
        //         },
        //         {
        //           text: "3.1.2 Maven",
        //           collapsible: true,
        //           children: [
        //             "maven/maven",
        //           ],
        //         },
        //         {
        //           text: "3.1.3 Git",
        //           collapsible: true,
        //           prefix: "git/",
        //           children: [
        //             "git-qiyuan",
        //             "port-22-to-443",
        //           ],
        //         },
        //         {
        //           text: "3.1.4 Nginx",
        //           children: [
        //             "nginx/nginx",
        //           ],
        //         },
        //       ],
        //     },
        //     {
        //       text: "3.2 辅助工具",
        //       collapsible: true,
        //       children: [
        //         "gongju/choco",
        //         "gongju/brew",
        //         "gongju/tabby",
        //         "gongju/warp",
        //         "gongju/windterm",
        //         "gongju/chiner",
        //         "gongju/DBeaver",
        //       ],
        //     },
        //     {
        //       text: "3.3 开源轮子",
        //       collapsible: true,
        //       children: [
        //         {
        //           text: "HTTP调用框架Forest",
        //           link: "gongju/forest",
        //         },
        //         {
        //           text: "单元测试Junit",
        //           link: "gongju/junit",
        //         },
        //         {
        //           text: "阿里开源的fastjson",
        //           link: "gongju/fastjson",
        //         },
        //         {
        //           text: "谷歌开源的Gson",
        //           link: "gongju/gson",
        //         },
        //         {
        //           text: "SpringBoot内置的Jackson",
        //           link: "gongju/jackson",
        //         },
        //         {
        //           text: "日志框架的鼻祖Log4j",
        //           link: "gongju/log4j",
        //         },
        //         {
        //           text: "高性能日志框架Log4j2",
        //           link: "gongju/log4j2",
        //         },
        //         {
        //           text: "Spring Boot内置的Logback",
        //           link: "gongju/logback",
        //         },
        //         {
        //           text: "日志门面SLF4J",
        //           link: "gongju/slf4j",
        //         },
        //
        //       ],
        //     },
        //     {
        //       text: "3.4 Spring",
        //       collapsible: true,
        //       children: [
        //         "springboot/aop-log",
        //         "springboot/ioc",
        //       ],
        //     },
        //     {
        //       text: "3.5 Spring Boot",
        //       collapsible: true,
        //       children: [
        //         {
        //           text: "搭建第一个Spring Boot项目",
        //           link: "springboot/initializr",
        //         },
        //         "springboot/lombok",
        //         {
        //           text: "整合MySQL和Druid",
        //           link: "springboot/mysql-druid",
        //         },
        //         {
        //           text: "整合JPA",
        //           link: "springboot/jpa",
        //         },
        //         {
        //           text: "整合Thymeleaf",
        //           link: "springboot/thymeleaf",
        //         },
        //         {
        //           text: "开启事务支持",
        //           link: "springboot/transaction",
        //         },
        //         {
        //           text: "过滤器、拦截器、监听器",
        //           link: "springboot/Filter-Interceptor-Listener",
        //         },
        //         {
        //           text: "整合Redis实现缓存",
        //           link: "redis/redis-springboot",
        //         },
        //         {
        //           text: "整合Logback",
        //           link: "springboot/logback"
        //         },
        //         {
        //           text: "整合Swagger-UI",
        //           link: "springboot/swagger"
        //         },
        //         {
        //           text: "整合Knife4j",
        //           link: "gongju/knife4j"
        //         },
        //         {
        //           text: "整合SpringTask",
        //           link: "springboot/springtask"
        //         },
        //         {
        //           text: "整合MyBatis-Plus AutoGenerator",
        //           link: "kaiyuan/auto-generator",
        //         },
        //         "springboot/quartz",
        //         "springboot/mybatis",
        //         "springboot/docker",
        //         "springboot/macos-codingmore-run",
        //         "springboot/windows-codingmore-run",
        //         "springboot/linux-codingmore-run",
        //         "springboot/validator",
        //       ],
        //     },
        //     {
        //       text: "3.6 Netty",
        //       collapsible: true,
        //       children: [
        //         "netty/rumen",
        //       ],
        //     },
        //     {
        //       text: "3.7 MongoDB",
        //       collapsible: true,
        //       children: [
        //         "mongodb/rumen",
        //       ],
        //     },
        //     {
        //       text: "3.8 消息队列",
        //       collapsible: true,
        //       children: [
        //         {
        //           text: "RabbitMQ入门",
        //           link: "mq/rabbitmq-rumen"
        //         },
        //         {
        //           text: "如何保障消息不丢失",
        //           link: "mq/100-budiushi"
        //         },
        //         "mq/kafka",
        //       ],
        //     },
        //     {
        //       text: "3.9 微服务/分布式",
        //       collapsible: true,
        //       children: [
        //         {
        //           text: "Elasticsearch入门",
        //           link: "elasticsearch/rumen"
        //         },
        //         {
        //           text: "聊聊ZooKeeper",
        //           link: "zookeeper/jibenjieshao"
        //         },
        //         {
        //           text: "聊聊微服务网关",
        //           link: "microservice/api-wangguan"
        //         },
        //       ],
        //     },
          ],
        },
      ],

    },

    // {
    //   text: "四、MySQL",
    //   collapsible: true,
    //   prefix: "mysql/",
    //   children: [
    //     "install",
    //     "database",
    //     "table",
    //     "data-type",
    //     "charset",
    //     "bin",
    //     "column",
    //     "select-simple",
    //     "select-where",
    //     "redis-shuju-yizhixing",
    //     "lijie-shiwu",
    //     "shiwu-shixian",
    //   ],
    // },

    // {
    //   text: "五、Redis",
    //   collapsible: true,
    //   prefix: "redis/",
    //   children: [
    //     "install",
    //     "rumen",
    //     "xuebeng-chuantou-jichuan",
    //   ],
    // },

    // {
    //   text: "六、计算机基础",
    //   collapsible: true,
    //   prefix: "cs/",
    //   children: [
    //     {
    //       text: "计算机操作系统",
    //       link: "os",
    //     },
    //     {
    //       text: "计算机网络",
    //       link: "wangluo",
    //     },
    //   ],
    // },

    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "posts/demo",
    //   link: "posts/demo/",
    //   children: "structure",
    // },
    {
      text: "联系作者",
      collapsible: true,
      prefix: "about-the-author/",
      children: [
        "readme.md",
      ],
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
