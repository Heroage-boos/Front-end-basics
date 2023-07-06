// 作用域链
var d = "golabel"
function fn1() {
    console.log("a")
    fn2()
    function fn2() {
        console.log("b")
        fn3()
        // fn4() //为什么这里调用fn4会报undefined ---函数提升要在作用域之内才能生效
        function fn3() {
            console.log("c")
            fn4() //为什么可以在fn4没被声明时候就被调用到  ---函数提升
            function fn4() {
                console.log("d", d)//作用域向上查找，向下传递

                // console.log('a',a);//let 不支持提升
                let a = "a"
                consoole.log("b", b)//undefined  变量通过var支持提升，声明提升，作用域不提升
                var b = "b"
            }
        }
    }
}
fn1()

//提升的优先级
console.log('yiy', yiy) // courese
function yiy() {
    this.course = 'js'
}

yiy = 'courese'; // 当函数名和变量名重复时：变量优先提升 >= 函数需要变量

//块作用域
if (true) {
    let e = 1111;
    var f = 2222;
}
// console.log('e', e) //undefind let没有变量提升
console.log('f', f)


// 如何创建作用域链：
