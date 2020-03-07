const doubleIt =num=> num*2;
const add = (x,y,z)=>{
    const sum=x+y+z;
    const diff=z-y-x;
    const result =sum+diff;
    return result;
    }
const result1=add(10,20,30);
console.log(result1);
const result=doubleIt(50);
const give=()=>5;
console.log(give());
console.log(result);