/**
 * tuple
 * 元组可以看做是数组的扩展，它表示已知元素数量和类型的数组。
 * 应用场景：数组长度和类型都固定的情况下，可以使用元组进行管理！
 */
const teacherInfo: [string, number, string] = ["join", 123, "hh"];
const teacherList: [string, number, string][] = [
  ["join", 123, "hh"],
  ["join", 123, "hh"],
];

let school: [string, number, boolean];
school = ["abc", 123, false];
// school=['abc',123] //ERROR

let tuple: [string, number] = ["123", 123];
//等价于
interface TupleType extends Array<number | string> {
  0: string;
  1: number;
  length: 2;
}

let tuple1: TupleType = ["123", 123];
