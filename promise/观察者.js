/**
 * 观察者和发布订阅的区别
 * 发布订阅 订阅者和发布者没有任何关系
 * 观察者 观察者和被观察存在关系
 */

class Observer {
  constructor(name) {
    this.name = name;
    this.observers = [];
    this.state = "玩";
  }

  attach(s) {
    this.observers.push(s);
  }

  update(newState) {
    this.state = newState;
    this.observers.forEach((o) => o.update(this));
  }
}

class Subject {
  constructor(name) {
    this.name = name;
  }

  update(o) {
    console.log(o.name + "通知" + this.name + o.state);
  }
}

const bady = new Observer("小宝宝");
const father = new Subject("爸爸");
const mother = new Subject("妈妈");

bady.attach(father);
bady.attach(mother);

bady.update("有人打我");
bady.update("我打他们");
