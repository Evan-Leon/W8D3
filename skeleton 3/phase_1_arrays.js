Array.prototype.uniq = function ()  {
    let uniqArray =[]

     for (let i= 0 , i < this.length, i++) {

         if (uniqArray.includes(this[i]))
         uniqArray.push(i)
     }    
    }
    return uniqArray;
}

