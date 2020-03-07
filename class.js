class student{
    constructor(sId,Sname){
        this.id=sId;
        this.name=Sname;
        this.school="Diu";
    }
}
const std=new student(12,"shakil");
const std1=new student(13,"rasel");
console.log(std.id, std1.id);