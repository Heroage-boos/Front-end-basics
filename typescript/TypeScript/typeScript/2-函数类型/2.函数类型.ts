// 一个函数的定义包括函数名、参数、逻辑和返回值

let add:(x:number,y:number)=>number

add :(x:number,y:number):number=> x+y

//函数中如果使用了函数体之外定义的变量，这个变量的类型是不体现在函数类型定义的
add = (arg1: string, arg2: string): string => arg1 + arg2; // error