// 생성자 함수

function Item(title, price) {
  // this = {};

  this.title = title;
  this.price = price;
  this.say = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };

  // return this;
}

const item1 = new Item("나이키", 10000);
const item2 = new Item("아디다스", 5000);
const item3 = new Item("스투시", 3000);

console.log(item1, item2, item3);

item1.say();
