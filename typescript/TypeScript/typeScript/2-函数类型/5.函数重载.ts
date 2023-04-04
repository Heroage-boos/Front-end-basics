
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
    return x.toString().split("").join("_");
  }
}

handleData4("abc").join("_");
handleData4(123).join("_"); // error 类型"string"上不存在属性"join"
handleData4(false); // error 类型"boolean"的参数不能赋给类型"number"的参数。
