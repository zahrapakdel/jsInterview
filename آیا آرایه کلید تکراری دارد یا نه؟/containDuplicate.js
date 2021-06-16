const containDuplicate_v1 = (arr) => {
  return new Set(arr).size != arr.length;
};

const containDuplicate_v2 = (arr) => {
  var newValue = [];
  for (let i = 0; i < arr.length; i++) {
    if (newValue.indexOf(arr[i]) == -1) {
      newValue.push(arr[i]);
    }
    if (newValue.length == 0) {
      return false;
    } else {
      return true;
    }
  }
};
//console.log(containDuplicate_v1([1, 1, 2, 3, 3, 5])); //true
console.log(containDuplicate_v2([1, 2, 3, 5]));
