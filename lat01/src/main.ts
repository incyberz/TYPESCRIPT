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
}

const Insho = new Coder('Insho','Rock',45,'Typescript')

