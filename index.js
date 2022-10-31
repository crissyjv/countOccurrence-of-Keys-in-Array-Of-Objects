var arr = [
    { language: 'JavaScript' },
    { language: 'JavaScript' },
    { language: 'C++' },
    { language: 'TypeScript' }
];
 
var newArr = [];
var i = 0, 
    n = arr.length;
while (i < n){
    var temp = arr[i], count = 1;
    newArr.push(temp);
    for (var j = i + 1; j < n; j++){
        if(JSON.stringify(temp) === JSON.stringify(arr[j])){
           count = count + 1;
           arr.splice(j, 1);
           n = arr.length;
        }
    }
    newArr[i].count = count;
    i=i+1;
}
console.log(newArr);
