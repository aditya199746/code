
 Promise.myAll=function(promises){
     console.log("111")
     return new Promise((resolve,reject)=>{
         if(!promises.length){
             resolve([])
         }
         let poolResponse=[]
         let count=0
        promises.forEach(promise => {
            Promise.resolve(promise)
            .then((res)=>{
                     poolResponse[count]=res
                 count++
                 console.log(count,"count")
                     if(count===promises.length.length)
                 {
                     resolve(poolResponse)
                 }
             })
             .catch((err)=>{
                 console.log("22")
                 reject(err)
             })
         });
     })
    
 }



 let arr=[
     new Promise(res=>setTimeout(res,10,"apple")),
     new Promise(res=>setTimeout(res,20,"banana")),
     new Promise((res,rej)=>setTimeout(rej,30,"orange")),
     new Promise(res=>setTimeout(res,3000,"mango")),
 ]

 let result=Promise.myAll(arr)
 .then((res)=>console.log(res,"result"))
 .catch((err)=>console.log(err,"error"))

 Promise.allSettled=function(promises){
     console.log("settled")
     return new Promise((resolve,reject)=>{
         if(!promises.length)
         {
             this.resolve([])
         }

         let poolResponse=[]
        let count=0
         promises.forEach(promise => {
             Promise.resolve(promise)
             .then((res)=>{
                 poolResponse[count]={
                     status:"fullfilled",
                     value:res
                 }
             })
            .catch((err)=>{
                 poolResponse[count]={
                     status:"rejected",
                     value:err
                }
            })
             .finally(()=>{
                 count++
                if(count===promises.length)
                 {
                    resolve(poolResponse)
                 }
             })
       });
     })   
}


 let result=Promise.allSettled(arr)
 .then((res)=>console.log(res,"Result"))
 .catch((err)=>console.log(err,"error"))

 Array.prototype.map=function(callBack){
     let res=[]
     for(let i=0;i<this.length;i++)
     {
         res.push(callBack(i,this[i],this))
     }
     return res
 }

 Array.prototype.filter=function(callBack){
     console.log("1111")
     let poolResponse=[]
     for(let i=0;i<this.length;i++)
     {
         if(callBack(this[i],i,this))
         {
             poolResponse.push(this[i])
         }
     }
     return poolResponse
 }

let arr=[1,2,3,4,5,6]

console.log(arr.filter((a)=>a%2===0))


 Array.prototype.reduce=function(callBack,initialVal){
     let acc=initialVal
     for(let i=0;i<this.length;i++)
     {
        if(acc!==undefined)
        {
             acc=callBack(acc,initialVal,this,this[i])
         }
         else{
             acc=this[i]
         }
    }
     return acc
 }


 let arr=[1,2,3,4]

 console.log(arr.reduce((acc,val)=>acc+=val,0))

function flattenArray(arr, depth = Infinity) {
    const result = [];
  
    function flatten(array, currentDepth = 1) {
      if (currentDepth > depth) {
        return; // Base case: Don't flatten further if exceeding desired depth
      }
  
      for (const item of array) {
        if (Array.isArray(item)) {
          flatten(item, currentDepth + 1); // Recursive call for nested arrays
        } else {
          result.push(item); // Push non-array elements
        }
      }
    }
  
    flatten(arr);
    return result;
  }
  
  const arr = [1, [2, 3, [4, 5], 6], 7, 8, [9]];
  const flatDepth1 = flattenArray(arr, 1); // Flatten to depth 1 (only first level)
  const flatDepth2 = flattenArray(arr, 2); // Flatten to depth 2 (up to second level)
  const flatAll = flattenArray(arr); // Flatten completely (default depth)
  
  console.log(flatDepth1); // Output: [1, 2, 3, [4, 5], 6, 7, 8, 9]
  console.log(flatDepth2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(flatAll);

const isIntersecting = (rect1, rect2) => {
    return !(
      rect1.x > rect2.x + rect2.width ||
      rect1.x + rect1.width < rect2.x ||
      rect1.y > rect2.y + rect2.height ||
      rect1.y + rect1.height < rect2.y
    );
  };
