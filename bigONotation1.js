// const startTime= performance.now();
console.time('task');

const firstArray =[];
const secondArray =[];

for (let i=1; i<=6000;i++){
   if(i<=3000){
      firstArray.push(i);
   }
   secondArray.push(i);
}

console.time('map1')
const firstUserList = firstArray.map((item)=>({userId:item}));
console.timeEnd('map1')

console.time('map2')
const secondUserList = secondArray.map((item)=>({userId:item}));
console.timeEnd('map2')

// const endTime=performance.now()
// console.log(`this code took time ${endTime-startTime} ms`);

console.timeEnd('task');