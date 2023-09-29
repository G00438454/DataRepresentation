const ages = [25, 31, 42, 77];

let part2d = ages.map((item)=>{
    if (item < 70){
        return item *2;
    }else{
        return item;
    }
})

console.log(part2d);


