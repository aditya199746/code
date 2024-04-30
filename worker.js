onmessage=(e,a)=>{
    let result=0
    console.log(e,"::",a,"....")
    for(let i=0;i<navigator;i++)
    {
        result+=i
    }
    console.log("222")
    postMessage(result)
}
console.log("111")