Array.prototype.newFilter = function (checkElement) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
      checkElement(this[i]) && returnArr.push(this[i]);
    }
    return returnArr;
  };
  
  [1, 1, 3, 4, 5].newFilter((element) => {
    return element !== 3;
  }); //= [1, 1, 4, 5]
  
  Array.prototype.newForEach = function(blockLogic) {
      console.log(this[0]);
      for(let i = 0; i < this.length ; i++) {
           blockLogic(this[i]);
      }
  }
  const arr = [8,4,5]
  arr.newForEach((element) => console.log(element));
  
  Array.prototype.newMap = function(elementManipulation) {
      const returnArr = [];
      for (let i = 0; i < this.length; i++) {
          returnArr.push(elementManipulation(this[i]));
      }
      return returnArr;
  }
  console.log(arr.newMap((element)=> element*2));