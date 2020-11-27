/**
 * 高阶函数
 * 两个特点满足其中一个就是高阶函数
 * 1、给一个函数传入一个函数
 * 2、一个函数返回一个函数
 */

//  装饰器  切片编程
function core() {
  console.log("core");
}

Function.prototype.before = function (beforeFn) {
  let _this = this;
  return function () {
    beforeFn();
    _this();
  };
};

let newFn = core.before(() => {
  console.log("core before");
});

newFn();
