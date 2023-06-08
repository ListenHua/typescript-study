# 任意类型

## any

没有强制限定哪种类型，随时切换类型都可以 我们可以对 any 进行任何操作，不需要检查类型，定义变量时不指定则默认为 any 类型

```ts
// 定义类型为any
let any: any = 123;
any = "123";
any = true;

// 不指定类型
let any;
any = "123";
any = true;
```

::: danger 不建议使用
使用 any 的话，就失去了 typescript 类型检测的作用了
:::

## unknown

TypeScript 3.0 中引入的 unknown 类型也被认为是 top type ，但它更安全。与 any 一样，所有类型都可以分配给 unknown,unknown 类型比 any 更加严格当你要使用 any 的时候可以尝试使用 unknown

### 1. 赋值

> unknown 类型不能赋值给其他类型,unknown 类型不能作为子类型只能作为父类型 any 可以作为父类型和子类型,unknown 可赋值对象只有 unknown 和 any

```ts
//unknown 可以定义任何类型的值
let value: unknown;

value = true;
value = 42;
value = "Hello World";
value = [];
value = {};
value = null;
value = undefined;
value = Symbol("type");

// 报错 ❌ unknown类型不能赋值给其他类型
// unknown类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
let names: unknown = "123";
let names2: string = names;

// 正确 ✅ any类型是可以的
let names: any = "123";
let names2: string = names;

// 正确 ✅ unknown可赋值对象只有 unknown 和 any
let bbb: unknown = "123";
let aaa: any = "456";

aaa = bbb;
```

### 2. 调用

> unknown 类型不可以调用属性和方法

```ts
// 正确 ✅ 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj: any = { b: 1 };
obj.a;

// 报错 ❌ 如果是 unknown 是不能调用属性和方法
let obj: unknown = { b: 1, ccc: (): number => 213 };
obj.b;
obj.ccc();
```
