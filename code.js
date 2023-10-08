function insertionSortReverse(arr) {

    if (arr.length === 0)
    {
        return arr;
    }
    if (arr.length === 1)
    {
        return arr;
    }
    // need to make this work for repeat elements
    repeat = 0; 


    for(var i = arr.length; i >= 0; i--) {
        var val = arr[i];
        var j;
        for(j = i; j > 0 && arr[j-1] > val; j--) {
          arr[j] = arr[j-1];
        }
        
        }
        arr[j] = val;
      }
      return arr;
   /* for(var i = 1; i < arr.length; i++) {
        var val = arr[i];
        var j;
        for(j = i; j > 0 && arr[j-1] > val; j--) {
          arr[j] = arr[j-1];
        }
        arr[j] = val;
      }
      return arr;
    return array; */
}
