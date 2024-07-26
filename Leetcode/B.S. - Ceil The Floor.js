//  Ceil The Floor
/* You're given a sorted array 'a' of 'n' integers and an integer 'x'. 
   Find the floor and ceiling of 'x' in 'a[0..n-1]'.
   Note:
   Floor of 'x' is the largest element in the array which is smaller than or equal to 'x'.
   Ceiling of 'x' is the smallest element in the array greater than or equal to 'x'.
   
   Example:
   Input: 
   n=6, x=5, a=[3, 4, 7, 8, 8, 10]   
   Output:
   4
   Explanation:
   The floor and ceiling of 'x' = 5 are 4 and 7, respectively.

Sample Input 1 :
6 8
3 4 4 7 8 10
Sample Output 1 :
8 8
Explanation of sample input 1 :
Since x = 8 is present in the array, it will be both floor and ceiling.

Sample Input 2 :
6 2
3 4 4 7 8 10
Sample Output 2 :
-1 3
Explanation of sample input 2 :
Since no number is less than or equal to x = 2 in the array, its floor does not exist. The ceiling will be 3.

*/
let nums = [3, 4, 4, 7, 8, 10];
let n = nums.length;
let target = 8;
const {floor, ceil} = getFloorAndCeil(nums, n, target);
console.log(`Floor: ${floor}, Ceil: ${ceil}`);

function getFloorAndCeil(nums, n, target){
    let low = 0, high = n-1;
    return{
        floor : getFloor(nums, low, high, target),
        ceil : getCeil(nums, low, high, target)
    };
}
function getFloor(nums, low, high, target){
    let result = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] <= target){
            result = nums[mid];
            low = mid + 1;
        }
        else high = mid - 1;
    }
    return result;
}
function getCeil(nums, low, high, target){
    let result = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] >= target){
            result = nums[mid];
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return result;
}