let arr=[1,2,3,4,5,6,7,8,9,10]

let mapArr=arr.map((item)=>{
item=item*item;
return item;
}
)
console.log('array:',arr);
console.log('map array',mapArr);