//定义类
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.toString = this.toString;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}
// /**
//  * block 1
//  */
// var point = new Point(2, 3);

// console.log(
//   point.toString(), // (2, 3)
// 	point.hasOwnProperty('x'), // true
// 	point.hasOwnProperty('y'), // true
// 	point.hasOwnProperty('toString'), // true
// 	point.__proto__.hasOwnProperty('toString') // true
// );

// /**
//  * 1.类原型的构造器等于自身（闭环）
//  * 2.类实例的__proto__是类的prototype
//  * 3.类的实例没有prototype对象
//  */
// // 1
// console.log(Point.prototype.constructor === Point); // true
// console.log(Point.prototype.constructor.prototype.constructor === Point); // true
// // 2
// console.log(point.__proto__ === Point.prototype); // true
// // 3
// console.log(point.prototype); // undefined

// /**
//  * block 2
//  */
// // Object.getPrototypeOf的用法比直接修改实例的__proto__对象更加可靠，虽然都不推荐使用
// let point1 = new Point(2, 3);
// let point2 = new Point(4, 5);

// let basePoint = Object.getPrototypeOf(point1);
// basePoint.printName = function () {
// 	return 'Oops';
// };
// console.log(point1.printName(), point2.printName());

// let point3 = new Point(6, 7);
// console.log(point3.printName());

/**
 * block 3
 */
//实例属性_count定义在constructor()方法里面等于定义在类的最顶层
class IncreasingCounter {
	_count = 0;
	constructor() {
		// this._count = 0;
	}
	get value() {
		console.log('Getting the current value!');
		return this._count;
	}
	increment() {
		this._count++;
	}
}
