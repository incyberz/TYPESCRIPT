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
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `My language is ${this.lang}`;
    }
}
let Ahmad = new webDev('Laptop', 'Ahmad', 'nasyid', 34);
console.log(Ahmad.music);
// console.log(Ahmad.lang);
console.log(Ahmad.getLang());
