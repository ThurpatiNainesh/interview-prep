function radixSort(arr) {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    
    while (divisor < maxNum) {
        // Create bucket arrays for each digit 0-9
        let buckets = [...Array(10)].map(() => []);
        
        // Place numbers in buckets based on current digit
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }
        
        // Reconstruct array from buckets
        arr = [].concat(...buckets);
        
        // Move to next digit
        divisor *= 10;
    }
    
    return arr;
}