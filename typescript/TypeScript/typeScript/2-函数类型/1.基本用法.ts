function greeter(person: Person): String {
  return "Hello" + person.name + "" + person.age;
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "小红",
  age: 10,
};

function add1(a: number, b: number) :number{
  return a + b;
}


//如果省略參數類型，那麽類型就是any類型
//如果省略返回值的类型，如果函数无返回值，那么typescript会默认函数返回值是void类型
//如果函数有返回值，那么函数会根据类型推断出返回值
function add2(a: number, b) {
  return b + a;
}
add2(1,'111')

