const singleElement = (arr) => {
  let elements = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!elements.has(arr[i])) {
      elements.add(arr[i]);
    } else {
      elements.delete(arr[i]);
    }
  }
  return elements;
};

console.log(singleElement([4, 2, 2, 1]));
