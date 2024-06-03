const getnewtodo=async()=>{


let respond=await fetch('https://jsonplaceholder.typicode.com/todos/1')
let data= await respond.json();
return data 
}
getnewtodo().then(data => {
    console.log(data);
}).catch((err) => {
    
});