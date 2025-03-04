
# Solution - 169. Majority Element


## Problem

Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 
```javascript
Example 1:
    Input: nums = [3, 2, 3]
    Output: 3

Example 2:
    Input: nums = [2, 2, 1, 1, 1, 2, 2]
    Output: 2

Example 3:
    Input: nums = [1]
    Output: 1
```
 
## Solutions

### Solution 1: Using Hash Table
This solution uses a hash table to count the occurrences of each number and then finds the majority element.

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

```typescript
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

```

### Solution 2: Boyer-Moore Voting Algorithm
This solution uses the Boyer-Moore Voting Algorithm to find the majority element in linear time and O(1) space.

**Time Complexity:** O(n)
**Space Complexity:** O(1)

```typescript
function majorityElement2(nums: number[]): number {
    let count = 0;
    let majorityElement = null;

    for (let num of nums) {
        if (count === 0) {
            majorityElement = num;
        }
        count += (num === majorityElement) ? 1 : -1;
    }
    return majorityElement;
}

```

## Test Cases

Here are some test cases to validate the solutions:

#### Test Case 1
Input: [3, 2, 3]
Expected Output: 3

#### Test Case 2
Input: [2, 2, 1, 1, 1, 2, 2]
Expected Output: 2

#### Test Case 3
Input: [1]
Expected Output: 1

#### Test Case 4
Input: [5, 5, 5, 1, 1, 1, 1, 1, 1, 2, 3]
Expected Output: 1


## Conclusion
Both solutions effectively find the majority element in the array. The Boyer-Moore Voting Algorithm is more space-efficient with a space complexity of O(1), while the hash table solution is easier to understand and implement.