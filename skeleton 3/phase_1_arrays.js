Array.prototype.uniq = function ()  {
    let uniqArray =[];

    for (let i= 0 ; i < this.length; i++) {

        if (!uniqArray.includes(this[i])){
         uniqArray.push(this[i]);
        }    
    }
    return uniqArray;
}

Array.prototype.twoSum = function () {
    
    let sumArray = [];
    
    for (let i= 0 ; i < this.length; i++) {
        
        for (let j = i +1; j < this.length; j++){
            if (this[i] + this[j] == 0){
                sumArray.push([i, j]);
            }
        }


    }
    console.log(`${sumArray}`);
    return sumArray;
}

Array.prototype.transpose = function () {
    let someArray = [];
    

    for (let i = 0; i < this.length; i++) {
            let innerArray = [];

        for (let j = 0; j < this.length; j++) {
            innerArray.push(this[j][i]);
        }
      someArray.push(innerArray); 
    }
    return someArray;
}

