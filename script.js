const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (array, n) => {
  // Write your code here
	const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (currentSum + array[i] > n) {
            // If adding array[i] exceeds the sum, finalize the current subarray
            result.push(currentSubarray);
            currentSubarray = [array[i]];
            currentSum = array[i];
        } else {
            // Otherwise, add array[i] to the current subarray
            currentSubarray.push(array[i]);
            currentSum += array[i];
        }
    }

    // Add the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
