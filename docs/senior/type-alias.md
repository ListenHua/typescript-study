# 类型别名

类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。可以理解为你要为类型定义一个名字。

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
```

## 使用泛型

类型别名接口一样，类型别名也可以是泛型，我们可以添加类型参数并且在别名声明的右侧传入

```ts
type Container<T> = { value: T };

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};
// 与交叉类型一起使用，可以创建出一些十分稀奇古怪的类型。
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
```

然而，类型别名不能出现在声明右侧的任何地方。

```ts
type Yikes = Array<Yikes>; // 报错 ❌
```

## 接口 与 类型别名 的区别

- 接口：接口支持类实现多个接口，从而扩展类的行为和能力。一个类可以同时实现多个接口，从而获得这些接口定义的方法和行为。
- 类型别名：类型别名无法实现多重继承或多重实现的能力。它只是为已有类型创建一个别名，无法通过类型别名本身添加或修改类的行为。

### 场景示例

我们定义两个接口：Fighter（战士）和 Animal（动物），它们分别描述了战士和动物应该具有的行为和特征。
创建一个类 WarriorCat（战士猫），它同时实现了 Fighter 和 Animal 接口，从而具备战士和动物的特征和行为。

```ts
// interface
interface Fighter {
    void attack();
    void defend();
}

interface Animal {
    void move();
    void makeSound();
}
class WarriorCat implements Fighter, Animal {
    public void attack() {
        // 战士猫的攻击行为
    }
    public void defend() {
        // 战士猫的防御行为
    }
    public void move() {
        // 战士猫的移动行为
    }
    public void makeSound() {
        // 战士猫的叫声行为
    }
}
```

```ts
// 类型别名
type Fighter = {
  attack: () => void;
  defend: () => void;
};

type Animal = {
  move: () => void;
  makeSound: () => void;
};

type WarriorCat = Fighter & Animal; // 报错 ❌ 无法同时实现多个类型别名
```
