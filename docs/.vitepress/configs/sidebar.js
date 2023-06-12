export default {
  "/base/": getBaseSidebar(),
  "/senior/": getSeniorSidebar(),
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
          text: "任意类型",
          link: "/base/any",
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
