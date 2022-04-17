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
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

console.log(nurseOlynyk.name); //nurseOlynyk
console.log(nurseOlynyk.remainingVacationDays); //22
console.log(nurseOlynyk.certifications); //["Trauma", "Pediatrics"]

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); //15

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
['Trauma', 'Pediatrics', 'Genetics'];

console.log(nurseOlynyk.certifications[0]); //Trauma
console.log(nurseOlynyk.certifications[2]); //Genetics
