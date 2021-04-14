
Array.prototype.myEach = function (callback ){
    for(let i = 0; i < this.length; i++){
        callback(this[i]);   
    }   
}

Array.prototype.myMap = function (cb){
    let newArray = []
    
    this.myEach(function (ele){
       newArray.push(cb(ele));
    })
    return newArray;
}





// x.myEach(function(ele){ console.log(ele)});
// let x = [1, 2, 3]
// x.myMap( function (ele){
//     return ele * 2
// })