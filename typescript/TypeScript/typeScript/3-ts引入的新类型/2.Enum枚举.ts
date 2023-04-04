/**
 * 数值枚举
 */
enum Direction {
  up, //0
  down, //1
  left,
  right,
}

//如果想修改这个数值,想让这个编码从1开始而不是0，可以如下定义,未赋初始值的枚举项会接着上个项的值进行递增：
enum Direction2 {
  up = 1, //1
  down, //2
  left,
  right,
}

//也可以指定任意索引值
enum Direction3 {
  up = 11, //1
  down = 4314, //2
  left = 1431,
  right, //默认递增
}

//数字枚举在定义值得适合，可以使用计算值和常量，但是如果某个字段使用了计算值和常量，那么该字段后面紧接着的字段必须设置初始值，这里不能使用默认的递增值了
const getValue = () => {
  return 0;
};
enum Direction4 {
  up = getValue(),
  down = 1, //枚举成员必须具有初始化的值
}
const A = "2";
enum Direction5 {
  up = A,
  down = 2, //枚举成员必须具有初始化的值
}
console.log("direction", Direction.up); // 0
console.log("direction", Direction[0]); // up

/**
 * 双向映射
 * 使用tsc将上述diamante编译为js后，发现ts使用Direction[(Direction["Up"] = 0)] = "Up" 这样的内部实现对对象成员进行了双向的赋值,可以看出ts具有双向映射的特点
 */

/**
 * 字符串枚举
 * 枚举成员为字符串是，其之后的成员也必须是字符串
 */
enum Direction6 {
  up ,//未赋值，其之后的成员也必须是字符串
  down = 1,
  left ='西'
}

/**
 * 常量枚举
 * ts version 1.4新增完全嵌入的枚举，可以使用const和enum关键字组合，声明一个常量枚举
 * 特点：定义了枚举值之后，编译成了javascript的代码会创建一个对应的对象，这个对象可以在程序运行的时候使用，加上了const关键字后，编译后的代码不会创建这个对象
 */
enum Status{
    off,
    on
}
const enum Animal{
    Dog,
    Cat
}
const status2=Status.on;
const animal=Animal.Dog;

console.log('status2',status2);
console.log('animal',animal);
