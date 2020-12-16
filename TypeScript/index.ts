// interface SquareConfig {
// 	color?: string;
// 	width?: string;
// }

// function creatSquare(config: SquareConfig) {
// 	console.warn(config);
// }

// let mySquare = creatSquare({ colour: 'red', width: '12' });

// interface SquareConfig {
// 	color?: string;
// 	width?: number;
// }
// let mysquare: SquareConfig;
// mysquare = { coluor: 'red', width: 12 }; // worong

// interface StringArray {
// 	[index: number]: string;
// }

// let myArray: StringArray;
// myArray = ['Bob', 'Fred', '12'];

// interface ReadonlyStringArray {
// 	readonly [index: number]: string;
// 	length: number; // 可以，length是number类型
// }let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
// console.log(myArray.length);

// interface NumberDictionary {
// 	[index: string]: number;
// 	length: number; // 可以，length是number类型
// }
// let myNumberDictionary: NumberDictionary = { '123': 123, length: 123 };

class Animal {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log('Slithering...');
		super.move(distanceInMeters);
	}
}

class Horse extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45) {
		console.log('Galloping...');
		super.move(distanceInMeters);
	}
}

let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);

interface IObjectO {
	[key: string]: number;
}

let o: IObjectO = Object.create(null);
let createId = function () {
	o[String(Math.random() * 100)] = Math.random() * 100;
};

createId();
console.log(o);

function reverse<T>(items: T[]): T[] {
	let result = [];
	for (let i = items.length - 1; i > -1; i--) {
		result.push(items[i]);
	}
	return result;
}

const sample = ['1', '2', '3'];
let reversedSample = reverse(sample);
console.log(reversedSample);
