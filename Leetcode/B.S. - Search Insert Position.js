//  Search Insert Position
/* Given a sorted array of distinct integers and a target value,
   you need to search for the index of the target value in an array.
   return the index if the target is found. If not, 
   return the index where it would be if it were inserted in order.

   Example 1:
   Input: nums = [1,3,5,6], target = 5
   Output: 2
   
   Example 2:
   Input: nums = [1,3,5,6], target = 2
   Output: 1
   
   Example 3:
   Input: nums = [1,3,5,6], target = 7
   Output: 4
*/
let nums = [1,3,5,6];
let target = 5;
searchInsert(nums, target);
function searchInsert(nums, target) {
    let n = nums.length;
    let ans = n;
    let low = 0, high = n-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] >= target){
            ans = mid;
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return ans;
}