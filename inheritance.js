class Parent{
    constructor(){
        this.fname="shakil";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getName(){
        return this.fname +" " + this.name;
    }
}
const baby= new Child("arnold");
const baby2= new Child("tom");
console.log(baby.getName());
console.log(baby2);