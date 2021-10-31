let array = [1, 3, 5, 7, 8, 9, 11, 15, 23, 45, 54, 78, 125, 344];
let num = 54;

// assuming that this array is already sorted
function binarySearch(arr, n) {
    let start = 0
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === n) {
            return mid;
        } else if (arr[mid] < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}
  
let index = binarySearch(array, num);
if (index !== -1) {
    console.log(`${num} was found at index ${index} in the array`);
} else {
    console.log(`${num} was NOT found in the array`);
}