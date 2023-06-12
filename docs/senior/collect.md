# 高级写法

## 映射类型

映射类型会遍历现有类型的属性，并应用变换来创建新类型。一个常见的用例是创建一个类型的只读版本。

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
interface Point {
  x: number;
  y: number;
}
type ReadonlyPoint = Readonly<Point>;
```

在这个例子中，我们定义了一个叫做 Readonly 的映射类型，它以类型 T 为泛型参数，并使其所有属性成为只读。然后，我们创建了一个 ReadonlyPoint 类型，该类型基于 Point 接口，其中所有属性都是只读的。

## 条件类型

条件类型允许您根据条件创建新类型。语法类似于三元运算符，使用 extends 关键字作为类型约束。

```ts
type NonNullable<T> = T extends null | undefined ? never : T;
```
