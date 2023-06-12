# 联交类型与类型断言

## 联合类型

```ts
// 假设电话号码需要支持座机
let myPhone: number | string = "010-820";

// 报错 ❌ 这样写是会报错的因为我们的联合类型只有数字和字符串并没有布尔值
let myPhone: number | string = true;

// 函数使用联合类型
const fn = (something: number | boolean): boolean => {
  // 为了把数字转成boolean值
  return !!something;
};
```

## 交叉类型

```ts
interface People {
  age: number,
  height： number
}
interface Man{
  sex: string
}
const people = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
people({age: 18,height: 180,sex: 'male'});
```

## 类型断言

### value as 类型

```ts
// 报错 ❌
let fn = function (num: number | string): void {
  console.log(num.length);
};
fn(123);

// 使用类型断言
let fn = function (num: number | string): void {
  console.log((num as string).length);
};
fn(123); // undefined
```

对于以上的报错可能会有疑惑

- 不是定义了 `string` 并且也是传了字符串吗？为什么还会报错
  > 因为他有可能是字符串类型，但是也有可能是数字类型，数字类型是没有 length 这个属性的，所以会报错
- 不是用类型断言了吗？为什么最后还是输出 `undefined` ？
  > 因为类型断言只是说跳过检测那种意思，并非是说像 toString 一样转换类型

```ts
interface A {
  run: string;
}

interface B {
  build: string;
}

// 报错 ❌ 有警告是因为B的接口上面没有定义run这个属性
const fn = (type: A | B): string => {
  return type.run;
};
// 正确 ✅
const fn = (type: A | B): string => {
  return (type as A).run;
};
```

### <类型>value

```ts
// 使用类型断言
let fn = function (num: number | string): void {
  console.log((<string>num).length);
};
fn(123); // undefined
```

### as any

```ts
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。
(window as any).abc = 123;
```

### as const

```ts
// 普通类型跟直接const 声明是一样的
const names = "LiHua";
names = "LiSi"; //无法修改

let names2 = "LiHua" as const;
names2 = "LiSi"; //无法修改

// 数组
let a1 = [10, 20] as const;
const a2 = [10, 20];

a1.unshift(30); // 报错 ❌，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30); // 正确 ✅，没有修改指针
```
