let arr1 =[1,2,3,4,5]
let state={
    name:"phulai",
    age:20
}
let arr2=[1,...arr1,6]
console.log(arr2);
let obj={...state,add:'binh thuan'}
console.log(obj)

let {name,age}=state
let[idx1,idx2]=arr1
console.log(name,age)
console.log(idx1,idx2)