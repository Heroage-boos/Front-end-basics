/**
 * 参数
 * 可选参数：可选参数只需在参数名后跟随一个?即可
 *
 * 默认参数：定义函数时，直接在参数后面使用等号连接默认值即可
 *
 * 剩余参数：如果我们定义一个函数，这个函数可以输入任何个数的参数，那么我们就无法在定义参数列表的时候挨个定义，es6
 * 之前，需要使用argument来获取参数列表
 */

//可选参数:可选参数只需在参数名后跟随一个?即可
let add: Add = (arg1: number, arg2?: string | number): string => arg;

add(1);
add(1, 2);

type Add = (x?: number, y: number) => number; //error必选参数不能位于可选参数后。

/**
 * 默认参数
 * 带默认值得参数则可放在必须参数前后都可
 * TypeScript 会识别默认参数的类型，如果给这个带默认值的参数传了别的类型参数则会报错
 */
let add3: Add = (arg1: number, arg2?: string, arg3: number = 10): string => arg1 + arg3;
add3(1, 1);

/**
 * 剩余参数
 * 如果我们定义一个函数，这个函数可以输入任意个数的参数，那么我们就无法在定义参数列表的时候挨个定义，在es6发布之前，需要使用argument来获取参数列表
 * 特点：
 *      每一个函数都包含的一个类数组对象
 */
// es中
// javascript
function handleData() {
  if (arguments.length === 1) return arguments[0] * 2;
  else if (arguments.length === 2) return arguments[0] * arguments[1];
  else return Array.prototype.slice.apply(arguments).join("_");
}
handleData(2); // 4
handleData(2, 3); // 6
handleData(1, 2, 3, 4, 5); // '1_2_3_4_5'
// 这段代码如果在TypeScript环境中，三个对handleData函数的调用都会报错，因为handleData函数定义的时候没有参数。

//ts 中
const handleData2 = (arg1: number, ...args: number[]) => {
    console.log('...args',...args);
    return arg1
};


/**
 * 函数重载
 * ts函数重载区别于其他语言中的重载，typescript中的重载是为了针对不同参数个数和类型，推断返回值类型
 * 重载只能用 function 来定义，不能使用接口、类型别名等。
 * ts的函数重载通过为一个函数指定多个函数类型定义，从而对函数调用的返回值进行检查，如下：
 */
// 这个是重载的一部分，指定当参数类型为string时，返回值为string类型的元素构成的数组
function handleData4(x: string): string[];
// 这个也是重载的一部分，指定当参数类型为number时，返回值类型为string
function handleData4(x: number): string; 
// 这个就是重载的内容了，这是实体函数，不算做重载的部分
function handleData4(x: any): any { 
    if (typeof x === "string") {
      return x.split("");
    } else {
      return x
        .toString()
        .split("")
        .join("_");
    }
  }

  handleData4("abc").join("_");
  handleData4(123).join("_"); // error 类型"string"上不存在属性"join"
  handleData4(false); // error 类型"boolean"的参数不能赋给类型"number"的参数。