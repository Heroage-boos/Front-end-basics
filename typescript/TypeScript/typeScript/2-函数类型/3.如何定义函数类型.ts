/**
 * 除； 上面在定义函数的时候，直接定义类型和返回值之外，还有两种方法
 * *使用interface
 *
 *
 * *使用类型别名
 */

//使用interface
interface Add {
  (x: number, y: number): number;
}

let add1: Add = (x: number, y: number) => x + y;

//使用类型别名
type Add2 = (x: number, y: number) => number;
let add3: Add2 = (x, y) => x + y;
