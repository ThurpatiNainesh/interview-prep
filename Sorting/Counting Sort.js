function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const count = new Array(range).fill(0);
    const output = new Array(arr.length);
    
    // Store count of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    
    // Change count[i] so it contains actual position in output
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    // Copy the output array to arr
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
    
    return arr;
}