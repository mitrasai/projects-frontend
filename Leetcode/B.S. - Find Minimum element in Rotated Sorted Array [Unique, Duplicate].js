// Find Minimum element in Rotated Sorted Array [Unique, Duplicate]
/* Given the sorted rotated array of unique elements, return the minimum element of this array. */
/* Example 1:
    Input: nums = [3,4,5,1,2]
    Output: 1
    Explanation: The original array was [1,2,3,4,5] rotated 3 times.
    
   Example 2:
    Input: nums = [4,5,6,7,0,1,2]
    Output: 0
    Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

   Example 3:
    Input: nums = [11,13,15,17]
    Output: 11
    Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
    
   Example 4:
    Input: nums = [1,3,5]
    Output: 1

  Example 5:
    Input: nums = [2,2,2,0,1]
    Output: 0
*/

let nums = [2,2,2,0,1]; // [1], [2, 1]
//findMin(nums);
findMinBS(nums)

// Brute - linear search
function findMin(nums) {
    let mini = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < mini) mini = nums[i];
    }
    return mini;
}

// Optimal
/* if we observe, we need to search an element in an sorted array */
function findMinBS(nums) {
    let n = nums.length;
    let mini = Number.MAX_SAFE_INTEGER;
    let low = 0, high = n-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        // check for if the search space is already sorted
        if(nums[low] <= nums[high]){
            if(nums[low] < mini) mini = nums[low] // update the mini
            break;
        }
        // for duplicates
        if(nums[low] === nums[mid] && nums[mid] === nums[high]){
            if(nums[low] < mini) mini = nums[low];
            low++;
            high--;
            continue;
        }
        // for left half
        if(nums[low] <= nums[mid]){
            if(nums[low] < mini) mini = nums[low];
            low = mid + 1;
        }
        // for right half
        else{
            if(nums[mid] < mini) mini = nums[mid];
            high = mid - 1;
        }
    }
    return mini;
}