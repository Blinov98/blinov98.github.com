'use strict';
const person = {
    name: 'Nikita',
    age:27,
    call:function(){
        console.log('Not bad')
    }
}
Object.prototype.sayHello = function(){
    console.log('прототип работает!!!')
}
console.log(person)
let numOnec = Object.create(person);
console.log(numOnec)

const objectNew = {
    name:'nikita',
    age:22,
    haight:174,
    infoMan:function(job){
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Work is ${job}`);
        console.groupEnd()
    }
}
const lena = {
    name:'Elena',
    age:23
}
objectNew.infoMan.bind(objectNew,'Менеджер')();
objectNew.infoMan.call(lena,'Врач')
// ====================================
// Практика с прототипами!!!
let lg = [1,2,3,4,5];
let massivE = [2,4,6,8];

Array.prototype.NFG = (function(q){
    return this.map(function(n){
        return q * n;
    })
})
console.log(lg.NFG(200));
console.log(massivE.NFG(6));


// ======================================
const inPutText = document.querySelector('.email');
const btnSub = document.querySelector('.submit');
const outPut = document.querySelector('.output');

function urlOut(domain){
    return function(url){
        return ` https://${url}.${domain}<br>`;
    }
}
const comUrl = urlOut('com');

btnSub.onclick = function() {
    outPut.innerHTML += comUrl(`${inPutText.value}`) ;
    
}
