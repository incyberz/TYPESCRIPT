"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello my age is ${this.age} years`;
    }
}
const Insho = new Coder('Insho', 'Rock', 45, 'Typescript');
// console.log(Insho.age);
console.log(Insho.getAge());
