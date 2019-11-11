class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const node = new Node('root',new Node('left',new Node('left.left')),new Node('right'));


//serialize with comma seperated values and appending ? at the leaf
let values = [];
function serialize(node){
  if(!node){
    values.push('?');
  }
  else{
    values.push(node.value);
    serialize(node.left);
    serialize(node.right);
  }

  return values.join(',');
}

//deserialize
function deserialize(data){
  if(!data)
    return null;

  data = data.split(',');

  const recDes = function(data) {
    if(data.length === 0)
      return;

    let value = data.shift();

    if(value === '?'){
      return null;
    }
    else{
      let node = new Node(value);
      node.left = recDes(data);
      node.right = recDes(data);
      return node;
    }
  }

  return recDes(data)
}

//assert
console.log(deserialize(serialize(node)).left.left.value === "left.left")
