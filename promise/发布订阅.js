const fs = require("fs");

let obj = {};

const event = {
  arr: [],
  on(fn) {
    this.arr.push(fn);
  },
  emit() {
    this.arr.forEach((fn) => fn());
  },
};

fs.readFile("age.txt", function (err, data) {
  obj.age = data.toString();
  event.emit();
});

fs.readFile("name.txt", function (err, data) {
  obj.name = data.toString();
  event.emit();
});

event.on(() => {
  if (Object.keys(obj).length === 1) {
    console.log("数据回来了");
  }
});
