// class Parent {
//   constructor(name) {
//     this.name = name
//   }
//   sayhi() {
//     console.log("Меня зовут: " + this.name)
//   }
// }
//
// class Child extends Parent {
//
// }
class Animal {
  constructor({color, weight, name}) {
    this.color = color;
    this.weight = weight;
    this.name = name;
  }
  say() {
    console.log(this.name + ' издает звуки')
  }
}

class Dog extends Animal {
  constructor(breed, props) {
    super(props);
    this.breed = breed;
  }
  say() {
    console.log(this.name + ' Говорит гав')
  }
}

class Cat extends Animal {
  constructor(props, breed) {
    super(props);

  }
  say() {
    console.log(this.name + ' Говорит мяу')
  }
}

class Lion extends Cat {
  constructor(props, breed) {
    super(props, breed);
  }
  grows(){
    console.log(this.name + " РЫчит!!!")
  }
}

const propsForDog = {
  color: 'Черный',
  weight: 2000,
  name: 'Чебурашка',
}

// const lion = new Lion({
//   name: 'Alex',
//   weight: 250,
//   color: 'Коричневый'
// }, 'Афреканский');
// console.log(lion)

// const dog = new Dog('Дог', propsForDog)
// dog.say()
console.log(dog)