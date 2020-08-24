class User {

  constructor(name) {
    this._name = name;
  }

  sayHello() {
    console.log('Hello !, my name is:', this.name);
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  static getDefaultName() {
    return 'John doe';
  }

  isAdmin() {
    return false;
  }

}

// create new user
const john = new User('John');
john.sayHello();
john.name = 'Alice';
john.sayHello();

// use static function
console.log(User.getDefaultName());

class AdminUser extends User {

  constructor() {
    super('admin');
    super.sayHello();
  }

  isAdmin() {
    return true;
  }

}

const admin = new AdminUser();
console.log(admin.isAdmin());

