// Search in Rotated Sorted Array [with distinct values / not necessarily with distinct values]
/* Given an rotated array with integers, array is possibly rotated at an unkown pivot index k (1<= k < array.length) 
   such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
   For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

   Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, 
   or -1 if it is not in nums.

   Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
    
   Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1
    
   Example 3:
    Input: nums = [1], target = 0
    Output: -1

   Example 4:
    Input: nums = [2,5,6,0,0,1,2], target = 0
    Output: true // if it asks return index

   Example 5:
    Input: nums = [2,5,6,0,0,1,2], target = 3
    Output: false // if it asks return index
*/

// Brute-force 
/* linearly iterate over an array, perform check for target */
let nums = [4,5,6,7,0,1,2];
let nums2 = nums = [2,5,6,0,0,1,2];
let target = 3;
//linearSearch(nums, target);
bSearch(nums2, target);
function linearSearch(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target) return i;
    }
    return -1;
}

// Optimal
/* Here we have to search in a sorted array, so we use binary search.
   By having an array with sorted fashion, wkt each index divides the array into two sorted halves. so, that we can 
   compare the target value with the middle element and then we eliminate either left or right half

   [4,5,6,7,0,1,2], target = 0
   low = 4, high = 2, mid = 7;
   by comparing, target < mid (0 < 7) so we can expect the target should be in left half. But due to array rotation, the
   number 0 is actually present in right half.
*/
function bSearch(nums, target) {
    let n = nums.length;
    let low = 0, high = n-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] === target) return mid;

        // if duplicates are present i.e., low == mid == target. simply move to next element present in an array
        if(nums[low] === nums[mid] && nums[mid] === nums[high]){
            low++;
            high--;
            continue;
        }

        // if not, identify the sorted half and check for target
        // left sorted half
        if(nums[low] <= nums[mid]){
            // which tells, the target is present in the selected sorted half
            if(nums[low] <= target && target <= nums[mid]){
                high = mid - 1;
            }
            else low = mid + 1;
        }
        // right sorted half
        else{
            if(nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            }
            else high = mid - 1;
        }
    }
    return -1;
}