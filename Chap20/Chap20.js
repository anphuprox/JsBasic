let sum=(a,b,callback)=>
{
let tong =a+b;
setTimeout(()=>{callback(tong)},5000)
let i=0;

let timer=setInterval(()=>{
    callback(tong);
    i++;
    if(i===5){
        clearInterval(timer)
        }
        
},1000);


}
let printsum=(mess)=>{
    console.log('check sum',mess)
}
sum(6,9,printsum)
