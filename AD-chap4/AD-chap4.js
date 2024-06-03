let callback=(error,data)=>{
    if (error){
        console.log('calling back',error,data)
    
    }
    else if (data){
    console.log('data',data,typeof data)

    }
    }
    

    let gettodo=(id)=>{


        return new Promise((resolve,reject)=>{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 &&xhttp.status===200) {
            const data= JSON.parse( xhttp.responseText);
        resolve(data)
        }
        
        if(this.readyState == 4 &&xhttp.status!==200)
        {
            reject('sth wrong'+id)
        }
          };
    xhttp.open("GET",`https://jsonplaceholder.typicode.com/todos/${id}`, true);
    xhttp.withCredentials=true;
    xhttp.send();})
    }
    

    gettodo(1).then(data=>{
        console.log(data);
        return gettodo(2);
    }).then(data2=>{
        console.log(data2);
    }).catch(err=>{
        console.log(err)
    })