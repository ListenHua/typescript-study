export default {
  "/base/": getBaseSidebar(),
  "/senior/": getSeniorSidebar(),
  "/practice/": getPracticeSidebar(),
};

function getBaseSidebar() {
  return [
    {
      text: "准备",
      collapsible: false,
      items: [
        {
          text: "概述",
          link: "/base/",
        },
        {
          text: "安装调试",
          link: "/base/install",
        },
      ],
    },
    {
      text: "基础",
      items: [
        {
          text: "基础类型",
          link: "/base/base",
        },
        {
          text: "接口",
          link: "/base/interface",
        },
        {
          text: "数组类型",
          link: "/base/array",
        },
        {
          text: "函数类型",
          link: "/base/function",
        },
        {
          text: "元祖类型",
          link: "/base/tuple",
        },
        {
          text: "枚举类型",
          link: "/base/enum",
        },
        {
          text: "联合、交叉类型与类型断言",
          link: "/base/multiple",
        },
        {
          text: "内置对象",
          link: "/base/implicit",
        },
        {
          text: "类",
          link: "/base/class",
        },
        {
          text: "泛型",
          link: "/base/generics",
        },
      ],
    },
  ];
}

function getSeniorSidebar() {
  return [
    {
      text: "进阶",
      collapsible: false,
      items: [
        {
          text: "概述",
          link: "/senior/",
        },
        {
          text: "类型别名",
          link: "/senior/type-alias",
        },
      ],
    },
  ];
}

function getPracticeSidebar() {
  return [
    {
      text: "实战",
      collapsible: false,
      items: [
        {
          text: "概述",
          link: "/practice/",
        },
        {
          text: "Class 类",
          link: "/practice/class",
        },
      ],
    },
  ];
}
