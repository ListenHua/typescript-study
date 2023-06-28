# 泛型

使用泛型前

```ts
function num(a: number, b: number): Array<number> {
  return [a, b];
}
console.log(num(1, 2));

function str(a: string, b: string): Array<string> {
  return [a, b];
}
console.log(str("广西", "广东"));
```

泛型优化后

```ts
function identity<T>(arg: T): T {
  return arg;
}

identity<number>(1, 2);
identity<string>("1", "2");
```

我们给 `identity` 添加了类型变量 `T`。 `T` 帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 `T` 当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

上述是定义了一个类型，如果说传入的有多个类型

```ts
function Sub<T, U>(a: T, b: U): Array<T | U> {
  const params: Array<T | U> = [a, b];
  return params;
}

Sub<Boolean, number>(false, 1);
```
