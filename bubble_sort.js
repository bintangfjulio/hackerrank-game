function sorting(arr) {
  var swap;

  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swap = true;
      }
    }
  } while (swap);

  console.log(arr);
}

sorting([4, 1, 2, 7, 8, 2, 10, 9]);
