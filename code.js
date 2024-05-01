
function permutationSort(a, l = 0, r = a.length - 1, count = 0) {
  if (isSorted(a)) {
    return count;
  }
    if (l === r) {
      //console.log(a);
      count++;
    }
    else {
      for (let i = r; i >= l; i--) { 
        swap(a, i, r); 
        count = permutationSort(a, l, r - 1, count);
        if (!isSorted(a)) {
          swap(a, i, r); 
        }
      }
    }
    return count;
}

function isSorted(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      return false;
    }
  }
  //console.log('sorted array is ' +a);
  return true;
}

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  //console.log('after swap' +a);
  return a;
}