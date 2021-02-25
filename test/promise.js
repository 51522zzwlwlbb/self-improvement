Promise.resolve()
	.then(() => {
		// 外层第一个then
		Promise.resolve()
			.then(() => {
				console.log(1);
			})
			.then(() => {
				console.log(2);
			});
	})
	.then(() => {
		// 外层第二个then
		console.log(3);
	});

Promise.resolve()
	.then(() => {
		return new Error('error!!!');
	})
	.then((res) => {
		console.log('then:' + res);
	})
	.catch((err) => {
		console.log('catch:' + err);
	});

setTimeout(() => {
	console.log('timer1');
	Promise.resolve().then(() => {
		console.log('promise1');
	});
}, 0);

Promise.resolve().then(() => {
	console.log('promise2');
	setTimeout(() => {
		console.log('timer2');
	});
});


let a;

const b = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
}).then(() => {
  console.log('promise4');
});

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a;
  resolve(true);
  console.log('after2');
})

console.log('end');
