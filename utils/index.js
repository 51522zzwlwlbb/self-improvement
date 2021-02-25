/**
 * 数组去重
 * @param {Array} array 需要去重的数据
 * example: dedupe([1, 1, 2, 3]) // [1, 2, 3]
 *
 * 可以用更简单的扩展运算符解决:
 * let arr = [3, 5, 2, 2, 5, 5];
 * let unique = [...new Set(arr)]; // [3, 5, 2]
 */
export function dedupe(array) {
	return Array.from(new Set(array));
}

// 数组并集 Union
export function arrayUnion(a, b) {
	return new Set([...a, ...b]);
}
// 数组交集 Intersect
export function arrayIntersect(a, b) {
	return new Set([...a].filter((x) => b.has(x)));
}
// 数组差集 Difference, a相对于b的差集
export function arratDifference(a, b) {
	return new Set([...a].filter((x) => !b.has(x)));
}

/**
 * 防抖debounce
 * 当持续触发某事件时，一定时间间隔内没有再触发事件时，事件处理函数才会执行一次，如果设定的时间间隔到来之前，又一次触发了事件，就重新开始延时。
 * @param {Func} fn 需要执行的回调函数
 * @param {Number} waitTime 延迟触发时间
 */
export function debounce(fn, waitTime = 500) {
	let timeout = null;
	return () => {
		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(fn, waitTime);
	};
}

/**
 * 节流throttle
 * 当持续触发事件时，有规律的每隔一个时间间隔执行一次事件处理函数。
 */
export function throttle(action, delay) {
	let timeout = null;
	let lastRun = 0;
	return function () {
		if (timeout) {
			return;
		}
		let elapsed = Date.now() - lastRun;
		let context = this;
		let args = arguments;
		let runCallback = function () {
			lastRun = Date.now();
			timeout = false;
			action.apply(context, args);
		};
		if (elapsed >= delay) {
			runCallback();
		} else {
			timeout = setTimeout(runCallback, delay);
		}
	};
}

// 判断对象是否是函数
export function isFunction(fn) {
	return typeof fn === 'function';
}

// 判断对象是否是Promise
export function isPromise(val) {
	return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * 缓存请求数据 + 防抖
 * 用法：
 * const cachedata = new cacheData();
 * return cacheData.saveCache(fn, force);
 */
export class cacheData {
	cachedData = null; // 缓存的数据
	loading = false; // 请求中
	resolves = []; // 调用队列
	rejects = []; // 调用队列
	constructor(options = {}) {
		this.options = options;
	}

	async saveCache(fn, force = false) {
		// 接口若是在请求中，所有的后续请求都放在一个缓冲栈中，等接口完成之后全部释放
		if (this.loading) {
			return new Promise((resolve, reject) => {
				this.resolves.push(resolve);
				this.rejects.push(reject);
			});
		}
		if (force || !this.cachedData) {
			let result = null;
			this.loading = true;
			try {
				result = await fn();
				this.resolves.forEach((r) => r && r(result));
				this.cachedData = result;
			} catch (e) {
				result = e;
				this.rejects.forEach((r) => r && r(result));
				this.cachedData = null;
				return Promise.reject(new Error(e));
			} finally {
				this.resolves = [];
				this.rejects = [];
				this.loading = false;
			}
		}
		return this.cachedData;
	}
}

/**
 * 获取浏览器对滚动属性passive支持情况
 */
export const passiveIfSupported = (() => {
	var passiveIfSupported = false;
	try {
		window.addEventListener(
			'test',
			null,
			Object.defineProperty({}, 'passive', {
				get: function () {
					passiveIfSupported = { passive: true };
				},
			})
		);
	} catch (err) {}
	return passiveIfSupported;
})();

/**
 * 获取对象的style属性
 */
export const getStyle = (el, prop) => {
	return typeof getComputedStyle !== 'undefined'
		? getComputedStyle(el, null).getPropertyValue(prop)
		: el.style[prop];
};

/**
 * 获取浏览器对webp支持情况
 */

export function supportWebp() {
	if (!inBrowser) return false;

	let support = true;
	const d = document;

	try {
		let el = d.createElement('object');
		el.type = 'image/webp';
		el.style.visibility = 'hidden';
		el.innerHTML = '!';
		d.body.appendChild(el);
		support = !el.offsetWidth;
		d.body.removeChild(el);
	} catch (err) {
		support = false;
	}

	return support;
}
