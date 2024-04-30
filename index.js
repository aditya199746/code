// Promise.myAll=(promises)=>{
//     return new Promise((resolve,reject)=>{
//         if(!promises.length)
//         {
//             resolve([])
//         }
//         let poolResponse=[]
//         let count=0
//         promises.forEach(element => {
//             Promise.resolve(element)
//             .then((res)=>{
//                 poolResponse[count]=res
//                 count++
//                 if(count===promises.length)
//                 {
//                     resolve(poolResponse)
//                 }
//             })
//             .catch((err)=>{
//                 reject(err)
//             })
//         });
//     })
// }

// Promise.myAllSetteled=(promises)=>{
//     return new Promise((resolve,reject)=>{
//         if(!promises.length)
//         {
//             resolve([])
//         }
//         let poolResponse=[]
//         let count=0

//         promises.forEach((element,i) => {
//             Promise.resolve(element)
//             .then((res)=>{
//                 poolResponse[count]={
//                     status:"fullfilled",
//                     value:res
//                 }
//             })
//             .catch((err)=>{
//                 poolResponse[count]={
//                     status:"rejected",
//                     value:err,
//                 }
//             })
//             .finally(()=>{
//                 count++
//                 if(count===promises.length)
//                 {
//                     resolve(poolResponse)
//                 }
//             })
//         });
//     })
// }

// Promise.myRace = (promises) => {
//     return new Promise((resolve, reject) => {
//       promises.forEach(p => p.then(resolve, reject))
//     })
//   }

// const promiseArr = [
//     new Promise(resolve => setTimeout(resolve, 100, 'apple')),
//     new Promise((resolve,reject) => setTimeout(reject, 100, 'banana')),
//     new Promise(resolve => setTimeout(resolve, 3000, 'orange'))
//   ]
//   Promise.race(promiseArr)
//     .then(fruits => console.log(fruits,"...."))
//     .catch(err => console.log('Error:', err))
  
  // After 3 seconds, logs out the following
  // ["apple", "banana", "orange"]
//   fun();
//   console.log(name,"111")
//   function fun() {
//     console.log(name,"222");
//    let name = 'Mukul Latiyan';
//   }
// //   fun();
//   console.log(name,"333")

// Array.prototype.map=function(callBack){
//     console.log("111")
//     let arr=[]
//     for(let i=0;i<this.length;i++)
//     {
//         arr.push(callBack(this[i],i,this))
//     }
//     return arr
// }

// Array.prototype.filter=function(callBack){
//     console.log("222")
//     let arr=[]
//     for(let i=0;i<this.length;i++)
//     {
//         if(callBack(this[i],i,this))
//         {
//             arr.push(this[i])
//         }
//     }
//     return arr
// }

// Array.prototype.reduce=function(callBack,initialVal){
//     console.log("333")
//     let acc=initialVal
//     for(let i=0;i<this.length;i++)
//     {
//         if(acc!=undefined)
//         {
//             acc=callBack(acc,this[i],i,this)
//         }
//         else{
//             acc=this[i]
//         }
//     }
//     return acc
// }

// let arr=[1,2,5,4,5]


// // arr.map((e)=>sum+=e)
// let sum=arr.reduce((a,v)=>a+v,0)
// console.log(sum)

// function debounce(callback,delay){
//     let timer

//     return (...args)=>{
//         clearTimeout(timer)

//         timer=setTimeout(()=>callback(this,args),delay)
//     }
// }

// function handleInput() {
//     console.log('Input processing...');
//   }
  
//   const debouncedHandleInput = debounce(handleInput, 300);
  
//   // Simulate input events
//   debouncedHandleInput(); // This won't trigger the immediate execution
//   debouncedHandleInput(); // This won't trigger the immediate execution
  
//   // After 300 milliseconds, only the last invocation will trigger the execution
//   setTimeout(debouncedHandleInput, 3000);




// const fun=()=>{
//     console.log("111")
//     const myWorker=new Worker("index.js")
//     myWorker.postMessage("start")
//     myWorker.onmessage=(e)=>{
//         console.log(e.data)
//     }
//     console.log("444")
// }

// fun()