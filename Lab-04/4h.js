const numbers = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8];

function getSecondMinMax(nums) {
    nums.sort();
    const uniqueNums = [...new Set(nums)];

    return [uniqueNums[1], uniqueNums[uniqueNums.length - 2]];
}

const secondMinMax = getSecondMinMax(numbers);
console.log(`In array: ${numbers}\nSecond min: ${secondMinMax[0]}\nSecond max: ${secondMinMax[1]}`);
