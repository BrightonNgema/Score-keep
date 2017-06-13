import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){
  class Person {
    constructor(name = 'Nicki', age='0'){
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription(){
      return `I am ${this.age} years old.`;
    }
  }

  class Employee extends Person {
    constructor (name,age, title){
      super(name, age);
      this.title = title;
    }
    getGreeting(){
      if (this.title){
        return `Hi! I am ${this.name}. I work as a ${this.title}`;
      }else{
          return super.getGreeting();
      }
    }
    hasJob(){
      return !!this.title;
      console.log(me.hasJob());
    }
  }

  class Programmer extends Person {
    constructor (name,age, preferredLanguage ='Assemblyn'){
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting(){
        return `Hi! I am ${this.name}. I'm a ${this.preferredLanguage} developer`;
    }
  }
  let person = new Programmer()
  console.log(person.getGreeting());
});
