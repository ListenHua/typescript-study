# 枚举类型

## 数字枚举

```ts
// Up 的初始值未初始化，所以为 0, 其余的成员会从 0 开始自动增长。
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// Up使用初始化为1。 其余的成员会从1开始自动增长。
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// 赋值字符串
enum Types {
  Red = "red",
  Green = "green",
  BLue = "blue",
}

enum Types {
  No = "No",
  Yes = 1,
}
```

## 接口枚举

```ts
enum yn {
  no,
  yes,
}
interface A {
  yes: yn.yes;
}

let no: A = {
  yes: yn.yes,
};
```

## const 枚举

::: warning 提示
let 和 var 声明都是不允许的，只能使用 const
:::

```ts
const enum Types {
  No = "No",
  Yes = 1,
}
console.log(Types.No);
console.log(Types.Yes);
```

const 声明的枚举会被编译成常量，以上的代码编译成 javascript 后

```js
console.log("No" /* Types.No */);
console.log(1 /* Types.Yes */);
```

## 反向映射

::: warning 注意
不会为字符串枚举成员生成反向映射。
:::

```ts
enum Enum {
  fall,
}
let a = Enum.fall;
console.log(a); // 输出结果：0
let b = Enum[a];
console.log(b); // 输出结果：fall
```

怎么理解反向映射呢？

```ts
enum Enum {
  fall = 123,
}
let e = Enum;
console.log(e); // 输出结果：{ '123': 'fall', fall: 123 }

// 但假设enum是字符串时
enum Enum {
  fall = "123",
}
let a = Enum;
console.log(a); // 输出结果：{ fall: '123' }
```

所以当 `enum` 为 `number` 类型时就可以反向映射
