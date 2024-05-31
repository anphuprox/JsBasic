

let arr =[1,2,3,4,5,6,7,8,9,10]

let arr2=[{name:'phu lai',age:25 },
{name:'phu lai',age:25 },
{name:'rebecca',age:32 },
{name:'ABC',age:78 },
{name:'xyz',age:23 }]

let filter = arr.filter((item,index)=>{
console.log('>>> check filter:item:',item,'index',index)
return item && item>5

});

let filter2=arr2.filter((item)=>{
    return item &&item.age===25
}
)

let find2=arr2.find((item)=>{
    return item &&item.age===25
}
)


console.log(filter2);
console.log(find2);
