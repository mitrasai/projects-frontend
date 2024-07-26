// Binary Search
/* Given an array of integers nums which is sorted in ascending order, 
   and an integer target, write a function to search target in nums. If target exists, 
   then return its index. Otherwise, return -1.
   
   You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/
/* Dry run: [-1,0,3,5,9,12], target = 9
   wkt, low = 0, high = 5, mid = 2;
   case-1: arr[mid] = arr[2] => 3 == 9 FALSE (9 > 3)
   wkt, given array is sorte, what consists at left?? lesser values right... if we want to find our target, which is 
   greater than our current mid value i.e., target is lying at right half
   if target > current mid value eliminate left half space
   else eliminate right half space
   
*/
let nums = [-1,0,3,5,9,12];
let n = nums.length;
let target = 9;
binarySearch(nums, n, target);
function binarySearch(nums, n, target) {
    let low = 0, high = n-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] === target) return mid;
        else if(target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}