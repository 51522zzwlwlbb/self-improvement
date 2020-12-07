/**
 * 声明提升 hoist
 */
function foo() {
  console.log(message);
  var message = 'Hello World!';
}
foo(); // undefined
/**
 * var声明的作用域为函数作用域，在函数退出时销毁。
 * let声明的作用域为块级作用域
 */
if(true) {
  var name = 'vien';
  let age = 25;
  console.log(name); // vien
  console.log(age); // 25
}
console.log(name); // vien
console.log(age); // ReferenceError: age is not defined
// 扩展
const flag = false;
if(flag) {
  var name2 = '炒饭带师';
};
console.log(name2); // undefined

/**
 * 在解析代码时，Javascript引擎也会注意出现在块后面的let声明，只不过在此之前不能以任何方式来
 * 引用未声明的变量，在let声明之前的执行瞬间被称为“暂时性死区”(temporal dead zone)，在此
 * 阶段引用任何后面才声明的变量都会跑出ReferenceError。
 */

 // let在全局作用域声明的变量不会变成window对象的属性，var会
var name3 = '里小子';
let name4 = '理他吗';
 console.log(window.name3, window.name4); // '里小子', undefined


for(var i = 0; i < 5; i++) {
  console.log('循环体内:', i);
  setTimeout(() => { console.log('定时器内:', i); }, 0);
}

for(let j = 0; j < 5; j++) {
  console.log('循环体内:', j);
  setTimeout(() => { console.log('定时器内:', j); }, 0);
}

// const的声明限制只适用于它指向的变量的引用，如果引用的值变换但是引用未改变是不会报错的
const people = {};
people.name = '李文安'; // OK

// 如果const声明的是一个不会改变的for循环变量，也是可以的。相当于每次创建一个新的变量。
for(const value of [1,2,3,4,5]) {
  console.log(value);
}

// 当typeof 返回 undefined 时，表明给定的值未声明，而不是声明了未初始化。
let name5;
console.log(typeof name5); // undefined
console.log(typeof name6); // undefined