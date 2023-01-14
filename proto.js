let user = {
  name: 'Ivan',
}

let admin = {
  __proto__: user,
}

console.log(admin)

// Все таки блять это "конструктор" А захуесосили меня в начале по приколу да?!
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

CreateUser.prototype.sayHi = function () {
  console.log("Меня зовут: " + this.name)
}

const firstUser =  new CreateUser("Ivan", 21);
// const secondUser = new CreateUser("Alex", 18);

console.log(firstUser)
firstUser.sayHi()
// console.log(secondUser)


function CreateMessage(from, to) {
  this.to = to;
  this.from = from;
  this.show = function () {
    console.log(from + '->' + to)
  }
}

CreateMessage.prototype.setFrom = function(from) {
  this.from = from
}

const message = new CreateMessage('NN', 'Mosc');
console.log(message)
message.setFrom('Kursk');
console.log(message);
