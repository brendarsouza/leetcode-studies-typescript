/**
 * Solution 1
 * Finds the majority element in an array.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * @param nums - An array of numbers.
 * @returns The majority element.
 *
 * Time Complexity: O(n) - We iterate through the array once.
 * Space Complexity: O(n) - We use a hash table to store the count of each element.
 */
function majorityElement1(nums: number[]): number {
    let ht: { [key: number]: number } = {};
    let majorityCount: number = Math.floor(nums.length / 2);
    let result: number = 0;
    for (let num of nums) {
        ht[num] = ht[num] + 1 || 1;
        if (ht[num] > majorityCount) {
            result = num;
        }
    }
    return result;
}
console.log(majorityElement1([3, 2, 3])); // 3
console.log(majorityElement1([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement1([5, 5, 5, 1, 1, 1, 1, 1, 1, 2, 3])); // 1


/**
 * Solution 2
 * Finds the majority element in an array.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * @param nums - An array of numbers.
 * @returns The majority element.
 *
 * Time Complexity: O(n) - We iterate through the array once.
 * Space Complexity: O(n) - We use a hash table to store the count of each element.
 */
function majorityElement2(nums: number[]): number {
    let ht: { [key: number]: number } = {};
    let majorityCount: number = Math.floor(nums.length / 2);
    let result: number = 0;
    for (let num of nums) {
        ht[num] = ht[num] + 1 || 1;
        if (ht[num] > majorityCount) {
            result = num;
        }
    }
    return result;
}

console.log(majorityElement2([3, 2, 3])); // 3
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement2([5, 5, 5, 1, 1, 1, 1, 1, 1, 2, 3])); // 1
