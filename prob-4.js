function firstMissingPositive(array){
  let temp = new Array(array.length + 2);

  for(let i = 0; i < array.length; i++){
    if(array[i] > 0 && array[i] < array.length + 2){
      temp[array[i] - 1] = true;
    }
  }

  for(let i = 0; i < temp.length; i++){
    if(!temp[i]){
      return i + 1;
    }
  }

  return 0;
}

const arr = [3, 5, 2, 1];

console.log(firstMissingPositive(arr));
