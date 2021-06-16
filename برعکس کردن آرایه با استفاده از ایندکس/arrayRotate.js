const rotate_v1 = (arr, key) => {
  for (i = 0; i <= key; i++) {
    arr.push(arr.shift());
  }
  return arr;
};

const rotate_v2 = (arr, key) => {
  for (i = 0; i <= key; i++) {
    arr.shift(arr.push(arr[0]));
  }
  return arr;
};

const rotate_v3 = (arr, key) => {
  var prev, temp;
  for (let i = 0; i < key; i++) {
    prev = arr[arr.length - 1];
    for (let j = 0; j < arr.length; j++) {
      temp = arr[j];
      arr[j] = prev;
      prev = temp;
    }
  }

  return arr;
};

console.log(rotate_v1([1, 2, 3, 4, 5], 2));
console.log(rotate_v2([1, 2, 3, 4, 5], 2));
console.log(rotate_v3([1, 2, 3, 4, 5], 2));
