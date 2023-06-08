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

```ts
let fn = function (num: number | string): void {
  console.log(num.length);
};
fn("ListenHua");
```

对于以上的报错可能会有疑惑

- 不是定义了 `string` 并且也是传了字符串吗？为什么还会报错
  > 因为他有可能是字符串类型，但是也有可能是数字类型，数字类型是没有 length 这个属性的，所以会报错

```ts
interface A {
  run: string;
}

interface B {
  build: string;
}

const fn = (type: A | B): string => {
  return type.run;
};
//这样写是有警告的应为B的接口上面是没有定义run这个属性的
```
