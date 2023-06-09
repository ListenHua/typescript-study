# 元祖类型

元组（Tuple）是固定数量的不同类型的元素的组合。

元组与集合的不同之处在于，元组中的元素类型可以是不同的，而且数量固定。元组的好处在于可以把多个元素作为一个单元传递。如果一个方法需要返回多个值，可以把这多个值作为元组返回，而不需要创建额外的类来表示。

```ts
let arr: [number, string] = [1, "string"];

let arr2: readonly [number, boolean, string, undefined] = [
  1,
  true,
  "sring",
  undefined,
];

arr[0].length; // 报错 ❌ 因为number类型没有length属性
arr[1].length; // 正确 ✅ 输出结果：6
arr2[1] = 2; // 报错 ❌ 因为arr2为只读类型
```

## 可选

```ts
let a: [x: number, y?: boolean] = [1];
```

## 越界元素

```ts
let arr: [number, string] = [1, "string"];

// 当你尝试使用 push 方法向元组 arr 中添加一个布尔值 true 时，它会引发一个类型错误。
arr.push(true); // 报错 ❌

// 以下做法是错误的，虽然它编译未报错并且正常输出
// 但是在读取arr[2]的时候是报错的
arr.push("123");
console.log(arr); // 输出结果：[ 1, 'string', '123' ]
console.log(arr[2]); // 报错 ❌
```

## 应用场景

定义 excel 返回的数据

```ts
let excel: [string, string, number, string][] = [
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
];
```
