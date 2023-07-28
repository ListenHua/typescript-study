# 装饰器

就是一个方法，可以注入到类、方法、属性参数上来”扩展“类、属性、方法、参数的功能

::: warning 提示
需要在 tsconfig.json 配置

```json
"compilerOptions":{
  "experimentalDecorators": true
}
```

:::

## 类装饰器

```ts
interface Info {
  name: string;
  age: number;
}

function Detail(target: Function) {
  target.prototype.name = "LiHua";
  target.prototype.age = 26;
}

@Detail // Clothes(Man)
class UserInfo {}

let result = new UserInfo() as Info;

console.log(result.name, result.age);
```

## 装饰器工厂

```ts
interface Clothes {
  top: string;
  bottom: string;
}

function Clothes(options: Clothes) {
  return function (target: any) {
    target.prototype.top = options.top;
    target.prototype.bottom = options.bottom;
  };
}

@Clothes({
  top: "短袖",
  bottom: "短裤",
})
class Man {}
const man = new Man() as Clothes;

console.log(man.top, man.bottom);
```

## 装饰器组合

会先 从上至下 的执行所有的装饰器工厂, 拿到所有真正的装饰器, 然后再 从下至上 的执行所有的装饰器

```ts
function tops(target: any) {
  console.log("拿出上衣");
  console.log("穿上上衣");
}

function others(name: string) {
  console.log(`拿出${name}`);
  return function (target: any) {
    console.log(`穿上${name}`);
  };
}

function pants(target: any) {
  console.log("拿出裤子");
  console.log("穿上裤子");
}

@others("鞋子")
@others("外套")
@tops
@pants
class Man1 {}

const man1 = new Man1();
```

输出结果：

拿出鞋子

拿出外套

拿出裤子

穿上裤子

拿出上衣

穿上上衣

穿上外套

穿上鞋子
