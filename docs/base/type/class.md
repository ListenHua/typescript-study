# 类

## 基本的类

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// 创建 Person 类的实例
const person = new Person("LiHua", 25);
person.sayHello(); // 输出: Hello, my name is LiHua and I'm 25 years old.
```

## 继承

```ts
// 定义一个基类
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(food: string) {
    console.log(`${this.name} is eating ${food}.`);
  }
}

// 定义一个继承自基类的派生类
class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// 创建一个 Dog 类的实例
const dog = new Dog("Buddy");
dog.eat("bones"); // 输出: Buddy is eating bones.
dog.bark(); // 输出: Buddy is barking.
```

在上面的例子中，我们定义了一个基类 `Animal`，它具有一个 name 属性和一个 `eat` 方法。然后，我们创建了一个派生类 `Dog`，它通过 `extends` 关键字继承了基类 `Animal`。派生类 `Dog` 在基类的基础上添加了一个新的方法 `bark`。

通过继承，派生类 `Dog` 继承了基类 `Animal` 的属性和方法，因此我们可以在 `Dog` 类的实例上调用 `eat` 方法和 `bark` 方法。这允许我们重用基类的代码，并在派生类中添加特定的行为。

请注意，派生类可以覆盖基类的方法，即在派生类中重新实现基类的方法。这允许派生类对基类方法的行为进行自定义。

## implements 类型约束

```ts
// 定义一个接口
interface Animal {
  name: string;
  eat(food: string): void;
}

// 定义一个实现接口的类
class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(food: string) {
    console.log(`${this.name} is eating ${food}.`);
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// 创建一个 Dog 类的实例
const dog = new Dog("Buddy");
dog.eat("bones"); // 输出: Buddy is eating bones.
dog.bark(); // 输出: Buddy is barking.
```

在上面的例子中，我们定义了一个名为 `Animal` 的接口，它包含了 `name` 属性和 `eat` 方法。然后，我们创建了一个 `Dog` 类并实现了 `Animal` 接口。`Dog` 类具有一个构造函数和两个方法：`eat` 和 `bark`。由于 `Dog` 类实现了 `Animal` 接口，它必须实现 `Animal` 接口中定义的属性和方法。因此，我们在 `Dog` 类中实现了 `eat` 方法，并添加了一个额外的 `bark` 方法。

通过这种方式，我们可以确保 `Dog` 类遵循 `Animal` 接口的约定，具有相同的属性和方法。这使得代码更具可读性和可维护性，同时可以在编译时捕获潜在的错误。

请注意，接口只描述了类的公共部分，因此 `bark` 方法在接口中并没有定义。但是，我们仍然可以在实例化 `Dog` 类后调用 `bark` 方法，因为它是 `Dog` 类的额外方法，而不是接口要求的一部分。

## readonly

```ts
class Person {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  changeName(newName: string) {
    // 错误，不能修改只读属性
    this.name = newName;
  }
}

const person = new Person("John", 25);
console.log(person.name); // 输出: John
person.name = "Jane"; // 错误，'name' 是只读的，无法修改
```

在上面的例子中，我们使用 `readonly` 修饰符将 `name` 和 `age` 属性标记为只读。这意味着这些属性只能在构造函数中进行初始化，并且不能在类的实例化后修改。

在 `changeName` 方法中，我们尝试将 `name` 属性修改为新的名字，但由于 `name` 是只读的，所以会导致编译错误。

当我们创建 `Person` 类的实例后，我们可以通过实例来访问 `name` 属性，但不能修改它。

通过使用 `readonly` 修饰符，我们可以确保某些属性在实例化后保持不变，从而增加代码的安全性和可靠性。

## private

```ts
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }

  public introduce() {
    this.sayHello();
  }
}

const person = new Person("John", 25);
person.introduce(); // ✅ 输出: Hello, my name is John and I'm 25 years old.
person.name; // 错误 ❌，'name' 是私有的，无法在类的外部访问
person.sayHello(); // 错误 ❌，'sayHello' 是私有的，无法在类的外部访问
```

我们使用 `private` 修饰符将 `name` 和 `age` 属性以及 `sayHello` 方法标记为私有。这意味着它们只能在类的内部访问。

在 `introduce` 方法中，我们调用了 `sayHello` 方法，因为 `sayHello` 是类的内部方法，所以在类的内部可以访问它。

然而，如果我们尝试在类的外部访问 `name` 属性、`sayHello` 方法或者通过实例来访问 `name` 属性，都会导致编译错误，因为它们都是私有的。

通过使用 `private` 修饰符，我们可以控制类的内部状态和行为的访问权限，提高了封装性和安全性。

## protected

```ts
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Employee extends Person {
  private position: string;

  constructor(name: string, position: string) {
    super(name);
    this.position = position;
  }

  introduce() {
    this.sayHello();
    console.log(`I am an employee and my position is ${this.position}.`);
  }
}

const employee = new Employee("John", "Manager");
employee.introduce(); // 输出: Hello, my name is John. I am an employee and my position is Manager.
employee.name; // 错误，'name' 是受保护的，无法在类的外部访问
employee.sayHello(); // 错误，'sayHello' 是受保护的，无法在类的外部访问
```

我们使用 `protected` 修饰符将 `name` 属性和 `sayHello` 方法标记为受保护的。这意味着它们可以在派生类中访问，但不能在类的外部访问。

我们定义了一个基类 `Person`，其中包含一个受保护的 `name` 属性和一个受保护的 `sayHello` 方法。然后，我们创建了一个派生类 Employee，它扩展自基类 `Person`。在派生类中，我们可以访问基类中受保护的成员，并在 `introduce` 方法中调用 `sayHello` 方法。

当我们实例化 `Employee` 类后，我们可以调用 `introduce` 方法来打印问候信息和职位。但我们无法直接访问 name 属性和 `sayHello` 方法，因为它们都是受保护的。

通过使用 `protected` 修饰符，我们可以确保某些类的成员只能在类及其派生类中进行访问，提供了更好的封装性和继承性。

## public

默认的情况下则为 public 所以就不展示了

## super

简单理解，super 关键字用于在派生类中调用基类的构造函数、方法和属性。通过 super 关键字，我们可以在派生类中访问和调用基类的成员。

### 在派生类的构造函数中调用基类的构造函数

```ts
class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // 调用基类的构造函数
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // 输出: Buddy makes a sound.
dog.bark(); // 输出: Buddy barks.
```

### 在派生类的方法中调用基类的方法

```ts
class Person {
  constructor(public name: string) {}

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  introduce() {
    super.sayHello(); // 调用基类的方法
    console.log("I am a student.");
  }
}

const student = new Student("John");
student.introduce();
```

### 在派生类中访问基类的属性

```ts
class Vehicle {
  protected wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }
}

class Car extends Vehicle {
  private doors: number;

  constructor(wheels: number, doors: number) {
    super(wheels);
    this.doors = doors;
  }

  getWheelsAndDoors() {
    console.log(`This car has ${this.wheels} wheels and ${this.doors} doors.`);
  }
}

const car = new Car(4, 4);
car.getWheelsAndDoors(); // 输出: This car has 4 wheels and 4 doors.
```

## 静态方法

在 TypeScript 中，可以使用 static 关键字定义静态方法。静态方法属于类本身，而不是类的实例。这意味着可以在不实例化类的情况下直接调用静态方法。
就类似 `Promise.all()` 一样

```ts
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(MathUtils.add(5, 3)); // 输出: 8
console.log(MathUtils.multiply(2, 4)); // 输出: 8
```

## get 与 set

可以使用 get 和 set 关键字定义访问器（getter 和 setter）来控制类的属性的读取和设置行为。访问器允许我们在访问属性时执行自定义的逻辑，使属性的读取和设置更加灵活。

```ts
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value < 0) {
      throw new Error("Radius cannot be negative.");
    }
    this._radius = value;
  }

  get area(): number {
    return Math.PI * this._radius * this._radius;
  }
}

const circle = new Circle(5);

console.log(circle.radius); // 输出: 5

circle.radius = 10;
console.log(circle.radius); // 输出: 10

console.log(circle.area); // 输出: 314.1592653589793

circle.radius = -5; // 抛出错误: Radius cannot be negative.
```
