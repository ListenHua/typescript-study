# 接口

在开发的时候，使用 interface 来定义一种约束，让数据的结构满足约束的格式。

## 基本使用

```ts
// 定义接口格式
interface Person {
  name: string;
  age: number;
}
// 错误 ❌
// 因为我们在person定义了name，age但是对象里面缺少age属性
// 使用接口约束的时候不能多一个属性也不能少一个属性
// 必须与接口保持一致
const person: Person = {
  name: "LiHua",
};
// 正确 ✅
const person: Person = {
  name: "LiHua",
  age: 26,
};
```

## 重名合并

```ts
interface A {
  name: string;
}
interface A {
  age: number;
}
var x: A = { name: "xx", age: 20 };
```

## 继承

```ts
//继承
interface A {
  name: string;
}

interface B extends A {
  age: number;
}

let obj: B = {
  age: 18,
  name: "string",
};
```

## 可选属性

```ts
// 可选属性的含义是该属性可以不存在
interface Person {
  name?: string;
  age: string;
}

const person: Person = {
  age: "213",
};
```

## 任意属性

::: danger 提示
需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
:::

```ts
// 在这个例子当中我们看到接口中并没有定义C但是并没有报错
// 因为我们定义了[propName: string]: any，允许添加新的任意属性
interface Person {
  a: string;
  b?: string;
  [propName: string]: any;
}

const person: Person = {
  a: "213",
  c: "123",
};
```

## 只读属性

```ts
// 因为a是只读的不允许重新赋值
interface Person {
  readonly a: string;
  b?: string;
  [propName: string]: any;
}

const person: Person = {
  a: "213",
  c: "123",
};

// 报错 ❌
person.a = 123;
```

## 添加函数

```ts
interface Person {
  b?: string;
  readonly a: string;
  [propName: string]: any;
  f: () => void;
}

const person: Person = {
  a: "213",
  c: "123",
  f: () => {
    console.log(123);
  },
};
```

---

了解与它相似的[类型别名](../senior/type-alias.md)

<!-- ## 示例

类似说我们知道一个列表数据接口会返回 code、list、msg、total、page，那么我们就可以定义一个列表接口返回

```ts
interface listResult {
  code: number;
  list: array;
  msg: string;
  total: number;
  page: number;
}
```

```ts
const main: listResult = await formDesign.searchFormData("进度总汇交表");
``` -->
