/**
 * Solution 1
 * This is more efficient in terms of space complexity.
 * Using XOR operation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums Array of numbers 
 * @returns result number - Single Number in the array
 */
function singleNumberXOR(nums: number[]): number {
    let result: number = 0;

    for (let num of nums) {
        result ^= num;
    }
    return result;
}

console.log(singleNumberXOR([2, 2, 1])); // 1
console.log(singleNumberXOR([4, 1, 2, 1, 2])); // 4
console.log(singleNumberXOR([1])); // 1

/**
 * Solution 2
 * Using Hash Table Object to find the Single number in the array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param nums Array of numbers 
 * @returns result number - Single Number in the array
 */
function singleNumberHT(nums: number[]): number {
    let ht: any = {};
    let result: number = 0;

    for (let num of nums) {
        ht[num] = ht[num] + 1 || 1;
    }

    for (let key in ht) {
        if (ht[key] == '1') {
            result = parseInt(key)
        }
    }
    return result;
}

console.log(singleNumberHT([2, 2, 1])); // 1
console.log(singleNumberHT([4, 1, 2, 1, 2])); // 4
console.log(singleNumberHT([1])); // 1
