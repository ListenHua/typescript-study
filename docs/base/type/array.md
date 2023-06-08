# 数组类型

## 类型[]

```ts
// 数字类型的数组，类型加中括号
var arr: number[] = [1, 2, 3];

// 字符串类型的数组
var arr2: string[] = ["1", "2"];

// 任意类型的数组
var arr3: any[] = [1, "2", true];
```

错误示范

```ts
// 报错 ❌ 定义了数字类型是不允许出现字符串的
let arr: number[] = [1, 2, 3, "1"];

// 报错 ❌ 操作方法添加也是不允许的
let arr: number[] = [1, 2, 3];
arr.push("1");
```

## 数组泛型

```ts
let arr: Array<number> = [1, 2, 3, 4, 5];
```

## 接口表示数组

```ts
// 定义对象数组
interface Info {
  name: string;
  age: number;
}
let list: Info = [
  { name: "LiHua", age: 26 },
  { name: "WangWu", age: 25 },
];
// 接口表示：只要索引的类型是数字时，那么值的类型必须是数字。
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

## 多维数组

```ts
// 使用[]
let data: number[][] = [
  [1, 2],
  [3, 4],
];

// 使用泛型
let data: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];
```

## arguments 类数组

> [arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 可以说是一个把数组呈对象的结构展示

```ts
function Arr(...args: any): void {
  console.log(arguments); // 输出结果 { 0: 1, 1: 2, 2: 3 }
  // arguments 是类数组不能这样定义
  let arr: number[] = arguments; // 报错 ❌
}
Arr(1, 2, 3);

// 正确 ✅ 使用 ts 内置对象 IArguments 定义
function Arr(...args: any): void {
  let arr: IArguments = arguments;
}
Arr(111, 222, 333);
```

> 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上接口定义的结构：

```ts
interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}
```

## 多类型数组

```ts
// 数组定义
let list: [string, number, [], {}] = ["test", 1, [], { a: 1 }];

// 直接使用 any
let list: any[] = ["test", 1, [], { a: 1 }];
```
