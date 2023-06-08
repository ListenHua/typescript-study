export default {
  "/base/": getBaseSidebar(),
  "/components/": getSeniorSidebar(),
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
      text: "开始",
      items: [
        {
          text: "基础类型",
          link: "/base/type/base",
        },
        {
          text: "任意类型",
          link: "/base/type/any",
        },
        {
          text: "接口",
          link: "/base/type/interface",
        },
        {
          text: "数组类型",
          link: "/base/type/array",
        },
        {
          text: "函数类型",
          link: "/base/type/function",
        },
        {
          text: "联交类型与类型断言",
          link: "/base/type/multiple",
        },
      ],
    },
  ];
}

function getSeniorSidebar() {
  return [
    {
      text: "组件",
      items: [
        {
          text: "Button 按钮",
          link: "/components/button",
        },
        {
          text: "Tabs 标签页",
          link: "/components/tabs",
        },
        {
          text: "Modal 对话框",
          link: "/components/modal",
        },
        {
          text: "Tag 标签",
          link: "/components/tag",
        },
        {
          text: "Vue 引用组件",
          link: "/components/vue",
        },
        {
          text: "Vue Script",
          link: "/components/vue-script",
        },
      ],
    },
  ];
}
