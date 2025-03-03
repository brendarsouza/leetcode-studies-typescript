
# Solution - 136. Single Number


## Problem

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 
```javascript
Example 1:
    Input: nums = [2,2,1]
    Output: 1

Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

Example 3:
    Input: nums = [1]
    Output: 1
```
 
## Solutions

### Solution 1: Using XOR Operation
This solution leverages the properties of the XOR bitwise operation to find the single number in the array.

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

```typescript
function singleNumberXOR(nums: number[]): number {
    let result: number = 0;

    for (let num of nums) {
        result ^= num;
    }
    return result;
}

```

### Solution 2: Using Hash Table
This solution uses a hash table to count the occurrences of each number and then finds the single number.

**Time Complexity:** O(n)
**Space Complexity:** O(n)

```typescript
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

```

## Test Cases

Here are some test cases to validate the solutions:

### Test Case 1
**Input:** [2, 2, 1]  
**Expected Output:** 1

### Test Case 2
**Input:** [4, 1, 2, 1, 2]  
**Expected Output:** 4

### Test Case 3
**Input:** [1]  
**Expected Output:** 1


## Conclusion
Both solutions effectively find the single number in the array, but the XOR solution is more space-efficient with a space complexity of O(1).