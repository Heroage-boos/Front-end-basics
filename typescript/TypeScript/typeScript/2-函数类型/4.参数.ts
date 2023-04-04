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
  console.log("...args", ...args);
  return arg1;
};
