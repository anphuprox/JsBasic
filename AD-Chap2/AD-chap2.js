let callback=(error,data)=>{
    if (error){
        console.log('calling back',error,data)
    
    }
    else if (data){
    console.log('data',data)
    }
    }
    

    let gettodo=(callback)=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 &&xhttp.status===200) {
            data= xhttp.responseText;
            callback(undefined,data)
        }
        
        if(this.readyState == 4 &&xhttp.status!==200)
        {
            callback('something wrong',undefined)
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
    }


    gettodo(callback)