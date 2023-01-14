class People {
  constructor({name, surname, peopleIsLove}) {
    this.name = name;
    this.surname = surname;
    this.peopleIsLove = peopleIsLove;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Worker extends People {
  constructor(props, rete, day) {
    super(props);
    this.rete = rete;
    this.day = day;
  }

  getSalary() {
    return this.day * this.rete
  }
}

const Worker1 = new Worker({
  name: 'Max',
  surname: 'Mig',
  peopleIsLove: 'NikaWah'
}, 140, 20);

const Worker2 = new Worker({
  name: 'Nika',
  surname: 'Wah',
  peopleIsLove: 'MaxMig'
}, 240, 28)

console.log( Worker1.getFullName() )