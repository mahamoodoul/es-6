//js ... dots
const age=[1,2,3,4,5,6,7];
const age1=[11,22,12,13,12];
const age2=[55,66,55,66];
const allAge=[...age, ...age1, 5, ...age2];
console.log(allAge);

const a=[10,11,12,13,78,2000,4,12];
const max=Math.max(...a);
console.log(max);
