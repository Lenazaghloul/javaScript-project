// alert('hello world')
// console.log('hello world')
// console.warn('Warning message')
// console.error('error message')
// console.clear()

// var let const


// let age = 20
// age = 30
// console.log(age)


// const num =50
// num =60
// console.log(num)


//Data Types 
// String , Number , Boolean , Undefined , null

// const name ='lena'
// console.log(typeof(name))
// const age = 20
// console.log(typeof(age))
// const rate = 6.8
// console.log(typeof(rate))
// const isWorking = true
// console.log(typeof(isWorking))
// let x = undefined
// console.log(typeof(x))


// console.log('My name is ' + name + ' and age is ' + age)

// console.log(`My name is ${name} and my age is ${age}`)

// const l = 'LENA AMR'
// console.log(l.toUpperCase())
// console.log(l.toLowerCase())
// console.log(l.split(""))


//Arrays

// const z = ['fruits', 'vegetables', 10, 4.8, true]
// console.log(z)

// const fruits = ['apple', 'banana', 'orange']
// fruits.push('mango')
// fruits.unshift('orange')
// fruits.pop()
// console.log(fruits.indexOf('banana'))
// console.log(fruits)

// const person = {
//     firstName: 'Lena',
//     lastName: 'Amr',
//     age: 20,
//     hobbies: ['music', 'watching', 'sports'],
//     address: {
//         street: '123',
//         country: {
//             country: 'egypt', 
//             city:'United'},
//         city: 'cairo',
//     }
    
// }

// person.email = 'lena@gmail.com'
// person.phone= 1264654
// console.log(person.hobbies)
// console.log(person.address)
// console.log(person.address.city)
// person.address.building = '4545'
// console.log(person.address.country.building = 5154)

// console.log(person.address.country.city)


const todos =[
    {
        id: 1,
        text: 'watching',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: true
    }, {
        id: 3,
        text: 'Cooking',
        isCompleted: false
    },

]



console.log(todos[1])
const todoJson = JSON.stringify(todos)
console.log(todoJson)

for (let i =0 ; i < todos.length ; i++){
    console.log(todos[i].text)
}


// for (let t of todos){
//     console.log(t.id)
// }

//for while

// for (let i = 0; i < 10; i++) {
//     console.log(`from 1 to 9 :${i}`)
// }



// let x = 0;
// while (x < 10) {
//     console.log(`${x}`);
//     x++ ;
// }


// const x = 'lena';
// if (x < 10) {
//     console.log('x less than 10');
// }
// else if (x > 10) {
//     console.log('x greater than 10');
// }
// else {
//     console.log('x is not a number');
// }


// const x = 7;
// const color = x > 10 ? 'red' : 'green';
// console.log(color);

// switch (color) {
//     case 'green':
//         console.log('green color');
//         break;
//     case 'red':
//         console.log('red color');
//         break;
//     default:
//         console.log('unknown color');
//         break;

// }


// function
// function num (num1, num2) {
//     console.log(num1 + num2);
// }
// num(10,10)



// function num (num1, num2) {
//     return num1 + num2;
// }
// console.log(num(10,10));


const Name= document.getElementById("Name");
const ID = document.getElementById("ID");
const Email = document.getElementById("Email");

const studentList=[];

function addStudent(){
    const studentInfo={
        name:Name.value,
        id:ID.value,
        email:Email.value
    };
    console.log(studentInfo)
    studentList.push(studentInfo);
    displayInfo();


  
}

function displayInfo(){
    let tabelData="";
    for(i =0 ; i<studentList.length; i++){
        
         tabelData +=`<tr><td>${studentList[i].name}</td><td>${studentList[i].id}</td><td>${studentList[i].email}</td>
       
        </tr>`;
 }
document.getElementById("tableBody").innerHTML=tabelData;

}






// function resetForm() {
//     Name.value = "";
//     ID.value = "";
//     Email.value = "";
// }


// function validateName() {
//     const validate = Name.value;
//     if (validate.length === 0) {
//         return "Error";
//     } else {
//         return "";
//     }
// }





// x=10;
// y='10';
// z=x+y;
// document.write(z);


// var a=15
// var b=(a<=15 ? "a": "b");
// document.write(b)
// console.log(b)