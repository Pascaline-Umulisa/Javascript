
// const materials=['lockers','tables','chairs','television','computers'];
// for(let i=0; i<materials.length;i++){
//     console.log(materials[i]);
// }
// let a=[12,34,5,6,7,9,45,67,89,13]

// for(let i=0;i<=a.length;i++){
// console.log(a[i])
    
//     if(i==4){
//         break
//     }
// }

// function children(){
//     var name='Pascaline'
//     let name2='umulisa'
//     const name3="kayitete"
//     console.log(name)
//     console.log(name2)
//     console.log(name3)

// }
// children()
// console.log(name)
// console.log(name2)
// console.log(name3)

// function num(){
//     var a=2;
//     function add(){
//         var b=4;
//         var c=a+b;
//         console.log(c);
//     }
//     add();
// }
// num();
//  var num =[1,2,3,4,5,6,7,8,9,10];
//  for(let i=0;i<num.length;i++){
//     console.log(num[i])
//  }

// (function(){
//     console.log(34)
// })
// ()

// let a=(()=>{
// return 5})()

// console.log(a);

// let b=["Mango","Apple"]
// let c=new Array("Banana","Kiwi")
// b.push("Orange")
// b.unshift("Grapes")
// b.pop()
// b.shift()
// console.log(b)
// console.log(c)
// let d=c.map(item=>'I love ${item}')
// console.log(d)






// var name="Pascaline"
// function me(){
//     var car="Toyota";
//     console.log(name)
// }
// me()
// const children=40;
// // children=50;
// console.log(children)

// var a="45";
// console.log(Number(a)+3)

// let b=4;
// let c=b+"hey";
// console.log(c)

// let a=20;
// let b=15;
// let add=a+b
// if(add<30 && a>20){
//     console.log(true);
// }
// else{
// console.log(false);
// }
// let a="hhh";
// switch(a){
//     case 'cow':
//         console.log('not a dog');
//         break;
//     case 'dog':
//         console.log('dog');
//         break;
//     default:
//         console.log('hhhh')
    
// }
// let c=a>20 ? true :false;

// function people(){
//     return "You guys"
// }
// function students(a,callback){
//     console.log(a)
//     console.log(callback)
// }
// students(26,people())

// var people={
//     age:20,
//     country:"Kenya"
// }
// console.log(people["country"])
// console.log(people.country)

// var person=new Object(people)
// console.log(person.age)
// person["name"]='Pascaline'
// console.log(person.name)
// Object.freeze(person)   //makes the object immutable
// person.school="AkiraChix"
// Object.seal(person)   //you can only change tha values after sealing
// person.name="Kayitete"
// person.Hobby="Dancing"
// console.log(person)

// for(key in Object.keys)

// var student={
//     name:"Pascaline",
//     age:23,
//     country:"Rwanda",
//     hobby:function(){
//         console.log("My name is "+this.name +" and my hobby is cooking")
//         return "My favorite hobby is baking"
//     },
//     friend:{
//         name:"Joy",
//         age:25,
//         hobby:{
//             first:'Cooking',
//             second:'dancing'
//         }
//     }
// }
// console.log(student.hobby())
// console.log(student.friend.hobby.second)
// class Students{
//     constructor(name,age,school){
//         this.name=name
//         this.age=age
//         this.school=school
//         this.hobby=function(){
//             return "I love money"
//         }

//     }
// }
// Students.prototype.country="Kenya"
// var firstStudent=new Students("Pascaline",29,"AkiraChix");
// console.log(firstStudent.country)

// function Students(name,age,school){
//     this.name=name
//         this.age=age
//         this.school=school
//         this.hobby=function(){
//             return "I love money"
//         }

//     }
// var names=["Chili", "Zipporah",'Shamim']
// var [conslate, ...others]=names
// console.log(conslate)
// console.log(others)
let a=[{name:'PACCY',age:"3"},{name:"Akuot",age:"32"}]
let b=a.filter(item=>item.age>21)
console.log(b)