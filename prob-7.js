function canDecode(str){
  if (str[0] === 0) {
    return 0;
  }
  let i = parseInt(str,10);
  if(i>=0 && i<= 26){
    return 1;
  }
  return 0;
}

function decode(str){
  let firstZero = str[0] === '0';
  let secondZero = str[1] === '0';

  if(firstZero && secondZero){
    console.log('This is not allowed.');
    return;
  }

  let len = str.length;
  switch (len) {
    case 1:
      return canDecode(str);
    case 2:
      if(firstZero){
        return canDecode(str)
      }
      return canDecode(str) + 1;
    default:
      return canDecode(str.slice(0,1)) * decode(str.slice(1))  //first index number * second or rest index numbers
            + canDecode(str.slice(0,2)) * decode(str.slice(2)); //first 2 index numbers * third or rest index numbers

  }
}

console.log(decode('01'));
