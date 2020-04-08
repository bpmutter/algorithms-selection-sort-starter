// Try to implement swap on your own, this time.
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function selectionSort(list) {

  for (let i = 0; i < list.length-1; i++) {
    let minimum = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minimum] ) {
        minimum = j;
        // console.log(minimum)
      }
    }
    if (minimum !== i) {
      swap(list, minimum, i);
    }
  }

  return list;
  // list  : array of items
  // n     : size of list
  //
  // for i = 1 to n - 1
  // /* set current element as minimum*/
  //    min = i
  //
  //    /* check the element to be minimum */
  //
  //    for j = i+1 to n
  //       if list[j] < list[min] then
  //          min = j;
  //       end if
  //    end for
  //
  //    /* swap the minimum element with the current element
  //       using the above swap function*/
  //    if indexMin != i  then
  //       swap list[min] and list[i]
  //    end if
  // end for
}

let testArr = [2, -1, 3, 4, 7, 3]; 
console.log(selectionSort(testArr))
module.exports = {
  selectionSort,
  swap
};
