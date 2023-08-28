class Coder {

  secondLang!: string
  
  constructor(
    public readonly name:string,
    public music:string,
    private age:number,
    protected lang:string = 'Typescript',
    
  ){
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge(){
    return `Hello my age is ${this.age} years`
  }
}

const Insho = new Coder('Insho','Rock',45,'Typescript')
// console.log(Insho.age);
console.log(Insho.getAge());


class webDev extends Coder{
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number

  ){
    super(name,music,age)
    this.computer = computer

  }

  public getLang(){
    return `My language is ${this.lang}`
  }
}

let Ahmad = new webDev('Laptop','Ahmad','nasyid',34)
// console.log(Ahmad.lang);
console.log(Ahmad.getLang());
