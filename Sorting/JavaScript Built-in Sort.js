// For numbers (ascending)
arr.sort((a, b) => a - b);

// For numbers (descending)
arr.sort((a, b) => b - a);

// For strings (case-sensitive)
arr.sort();

// For strings (case-insensitive)
arr.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));