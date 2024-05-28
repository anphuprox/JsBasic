let a={
    name:'phulai',
    address:'bt',
    asd:function(){
        console.log('hello')
        return ''
    }
};

let b ='name'
a[b]='kids'
console.log(`type of a: `,typeof a)
console.log('what is your name',`my name is ${a.name}`)
console.log('where r u from',`my name is ${a.address}`)
console.log('func:',a.asd())