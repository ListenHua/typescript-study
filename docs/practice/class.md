# class 类

## 练习 1

你需要实现一个简单的图书管理系统，其中包含以下类：

> Book 类

属性： title（字符串，图书标题）

属性： author（字符串，作者）

属性： publicationYear（数字，出版年份）

方法：displayInfo()，打印图书的详细信息

> Library 类：

属性：books（数组，存储所有的图书对象）

方法：addBook(book: Book)，向图书馆添加一本书

方法：findBookByTitle(title: string): Book | undefined，根据图书标题查找并返回匹配的图书对象，如果找不到则返回 undefined

方法：displayAllBooks()，打印所有图书的详细信息

请根据上述要求实现 Book 类和 Library 类，并在你的代码中演示如何使用这两个类。

## 练习 2

你需要实现一个简单的动物园程序，包含以下类和接口：

> Animal 类

属性：name（字符串，动物的名称）

方法：makeSound()，用于发出动物的声音（抽象方法，子类需要实现）

> CanFly 接口

方法：fly()，用于表示动物可以飞行

> Bird 类（继承自 Animal，实现 CanFly 接口）

方法：实现 makeSound() 方法来发出鸟类特有的声音

方法：实现 fly() 方法来表示鸟类可以飞行

> Dog 类（继承自 Animal）

方法：实现 makeSound() 方法来发出狗叫的声音

请根据上述要求实现 Animal、CanFly、Bird 和 Dog 类，并在你的代码中演示如何创建对象、调用方法和发出动物的声音。

## 练习 3

你需要实现一个电子产品，包含以下类和属性：

> Product 类：

属性：name（字符串，产品的名称）

属性：\_price（数字，产品的价格）

方法：getName() 获取产品的名称

方法：get price() 获取产品的价格，带单位

方法：set price() 设置产品的价格,不能小于等于 0

> MobilePhone 类（继承自 Product）：

属性：brand（字符串，手机的品牌）

属性：model（字符串，手机的型号）

方法：getBrand() 获取手机的品牌

方法：getModel() 获取手机的型号
