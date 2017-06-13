import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){
 // Players.insert({
 //   name: 'Khanyi',
 //   score: 50
 // });
 // console.log(Players.find().fetch());

 // let square = (x) => x * x;
 // console.log(square(10))


 let user = {
   name : 'KC',

   sayHi (){
    // console.log(this.name);
    setTimeout(()=>{
      console.log(this.name);
    },1000);
   }
 };
 user.sayHi();


 let numbers = [9, 99, 4, 56];
 let newNUmbers = numbers.map(function(number){

    return number +2;
 });

 console.log(newNUmbers);
});
