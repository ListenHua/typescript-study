# 内置对象

## ECMAScript 的内置对象

JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

```ts
let bool: Boolean = new Boolean(1);

let num: Number = new Number(true);

let str: String = new String("hello world");

let date: Date = new Date();

let reg: RegExp = /^1/;

let error: Error = new Error("error!");

let storage: Storage = localStorage;

let location: Location = Location;

// 因为cookie就是一个普通的字符串，直接定义就可以了
let cookie: string = document.cookie;
```

## Promise

```ts
function promise(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

promise().then((res) => {
  console.log(res);
});
```

## DOM 和 BOM 的内置对象

```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll("div");
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
let div: HTMLElement = document.querySelector("div") as HTMLDivElement;
document.addEventListener("click", function (e: MouseEvent) {});
```
