## 周会分享

#### 推荐几个常用的javascript技巧
- replaceAll:
  - `'tom is a cat, smart cat'.replace('/tom/g', 'bob')`;

- 数组去重：
  - `Array.from(new Set(array));`
  - `[...new Set(arr)];`

- 数字转字符串，字符串转数字: 
  - `123 + '';`
  - `+'123';`
  
- 随机排列数组
  - `array.sort(()=> Math.random() - 0.5);`

- 展平二维数组
  - `[].concat(...array);`

- 截取数组和清空数组
  - `array.length = 4;`
  - `array.length = 0;`

- 数组包含,引用查找
  - `array.prototype.includes` 代替 `array.indexOf`
  - 多条件检索`if (value === 1 || value === 'now')` 替换成 `[1, 'now'].includes(value);`

- 交换变量
 - `[x, y] = [y, x];`

## 代码建议
- 使用Map或者对象字面量代替Switch语句
