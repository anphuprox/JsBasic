const gettodo2= async(id)=>{
try{

    let respond=await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (respond && respond.status!==200){
        throw new Error('st wrong'+respond.status);
    }
    let data= await respond.json();
    return data
}catch(e){
    console.log('>>>check catch error:',e.message)
}


}

    gettodo2('sdasdaas').then(
        data=>{
            console.log('check data',data)
        }
    )
    .catch(err=>{
        console.log(err.message);
    })