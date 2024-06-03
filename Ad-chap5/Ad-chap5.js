fetch('https://jsonplaceholder.typicode.com/todos/1')

.then(respond=>{
    return respond.json()
})
.then(data=>{
    console.log(data)}
)