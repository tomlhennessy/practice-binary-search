function linearSearch (arr, target) {
  return arr.indexOf(target);
};

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}


let arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(i);
}

let target = 999999;

// timing linear search
let start = performance.now();
linearSearch(arr, target);
let end = performance.now();
console.log("Linear Search Time: ", end - start, "ms");


// timing binary search
start = performance.now();
binarySearch(arr, target);
end = performance.now();
console.log("Binary Search Time: ", end - start, "ms");

module.exports = [linearSearch, binarySearch]
