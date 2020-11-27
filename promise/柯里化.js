/**
 * 柯里化
 * 手写一个通用的柯里化函数
 */

//  判断元素的类型
// 1、typeof 2、consttructor 3、instanceof 4、Object.prototype.toString.call
// 不定参数的柯里化 需要修改 toString 方法
function add(...arg) {
  let arr = arg;
  function _add(...arg) {
    arr = [...arr, ...arg];
    return _add;
  }
  _add.toString = function () {
    return arr.reduce((a, b) => {
      return a + b;
    }, 0);
  };
  return _add;
}

console.log(add(1, 2, 3)(4)(5));
