// Import stylesheets
import './style.css';

//Inheritance
// **************************************

//parent class contains shared properties and methods of child classes
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

//child class
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

//creating a parent class named HospitalEmployee.
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

//class for Doctor
class Doctor {
  constructor(name, insurance) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  get insurance() {
    return this._insurance;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

//class for nurse
class Nurse {
  constructor(name, insurance, certifications) {
    this._name = name;
    this.remainingVacationDays = 20;
    this._insurance = insurance;
    this._certifications = certifications;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  get insurance() {
    return this._insurance;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }

  addCetification() {
    console.log('Certified');
  }
}
