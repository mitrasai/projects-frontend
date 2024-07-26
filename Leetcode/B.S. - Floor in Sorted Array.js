// Floor in Sorted Array
/* Given a sorted array arr[] of size n without duplicates, and given a value x. 
   Floor of x is defined as the largest element k in arr[] such that k is smaller than or equal to x. 
   Find the index of k(0-based indexing).

Input: n = 7, x = 0 arr[] = {1,2,8,10,11,12,19}
Output: -1
Explanation: No element less than 0 is found. So output is "-1".

Input: n = 7, x = 5 arr[] = {1,2,8,10,11,12,19}
Output: 1
Explanation: Largest Number less than 5 is 2 (i.e k = 2), whose index is 1(0-based indexing).
*/
/* Dry run: [1,2,8,10,11,12,19], x=0
   low = 0, high = 6 [indexes]
   mid = (low + high)/2 => 3 [mid points to 10]
   10 <= 0    FALSE eliminate right half
   low stands at 0 index and high stand at 2 index
   mid points to 1
   2 <= 0    FALSE eliminate right half
   low=0, high=0; mid = 0
   1 <= 0 FALSE high crosses low....... stop

   [1,2,8,10,11,12,19], x=5
   low = 0, high = 6 [indexes]
   mid = (low + high)/2 => 3 [mid points to 10]
   10 <= 5 FALSE
   low = 0, high = 2; mid = 1;
   2 <= 5 TRUE, u r my answer and eleminate left half
*/
let nums = [1,2,8,10,11,12,19];
let n = nums.length;
let target = 5;
findFloor(nums, n, target);
function findFloor(nums, n, target) {
    let ans = -1;
    let low = 0;
    let high = n-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] <= target){
            ans = mid;
            low = mid + 1;
        }
        else high = mid - 1;
    }
    return ans;
}