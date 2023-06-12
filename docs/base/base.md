# 基本类型

## 字符串类型

```typescript
//普通声明
let a: string = "123";

//也可以使用es6的字符串模板
let str: string = `dddd${a}`;
```

## 数字类型

> 支持十六进制、十进制、八进制和二进制；

```typescript
let notANumber: number = NaN; //Nan
let num: number = 123; //普通数字
let infinityNumber: number = Infinity; //无穷大
let decimal: number = 6; //十进制
let hex: number = 0xf00d; //十六进制
let binary: number = 0b1010; //二进制
let octal: number = 0o744; //八进制s
```

## 布尔类型

```typescript
let bool: boolean = true; //可以直接使用布尔值

let bool1: boolean = Boolean(1); //也可以通过函数返回布尔值
```

::: warning 注意
使用构造函数 Boolean 创造的对象不是布尔值：
:::

```typescript
// 错误 ❌
let bool: boolean = new Boolean(1);
// 这样会报错 因为 new Boolean() 返回的是一个 Boolean 对象，所以需要改成 Boolean 类型

// 正确 ✅
let bool: Boolean = new Boolean(1);
```

## 空值类型

::: tip 提示
void 类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数

void 也可以定义 undefined 和 null 类型
:::

> JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数

```typescript
function voidFn(): void {
  console.log("test void");
}

// 定义 undefined 和 null
let u: void = undefined;
let n: void = null;
```

## Null 和 undefined 类型

与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：

```typescript
// 报错 ❌ void类型不可以分给其他类型
let test: void = undefined;
let num2: string = "1";

num2 = test;

// 正确 ✅
let test: null = null;
let num2: string = "1";

num2 = test;

// 正确 ✅
let test: undefined = undefined;
let num2: string = "1";

num2 = test;
```

## Tips

如果你 tsconfig.json 配置开启了严格模式,null 不能 赋予 void 类型

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

::: tip 解释
在 TypeScript 的严格模式下，将 null 赋给 void 类型会产生类型错误。这是因为在严格模式下，TypeScript 强制执行更严格的类型检查，以帮助开发者避免一些常见的错误。

void 类型表示没有返回值的函数或表达式的类型，它表示不返回任何值。而 null 表示一个空值或缺失的值。尽管 null 是一个特殊的 JavaScript 值，但将其赋给 void 类型并不符合类型的约束。

在严格模式下，TypeScript 需要更明确地定义函数的返回类型，以确保类型的一致性和可靠性。因此，将 null 赋给 void 类型是不允许的，因为它们的语义是不同的。

如果你希望表示一个函数可能返回 null 或 void，可以使用联合类型 null | void。这样，函数的返回类型可以是 null 或者没有返回值（void）。
:::

示例：

```typescript
function foo(): null | void {
  // ...
}

let result: null | void = foo(); // 合法
```
