console.log()
class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
  get name() {return this._name + ' Пользователь'}
  set name(value) {
    if (value < 3) {
      alert('Имя не подходит');
      return
    }
    this._name = value
  }

  get fullName() {
    return this._name + ' ' + this._surname
  }

  set fullName(str) {
    const array = str.split(' ');
    this._name = array[0];
    this._surname = array[1];
  }

  get age() {
    // const now = dayjs();
    // return now.diff(this._birthdate, 'year');
  }

  set age(Date) {
    this._birthdate = Date
  }
}

const userOne = new User('Max', 'Mig');
userOne.fullName = 'Mig Max'
userOne.age = '05-04-2003'
userOne.age
console.log(userOne.fullName)