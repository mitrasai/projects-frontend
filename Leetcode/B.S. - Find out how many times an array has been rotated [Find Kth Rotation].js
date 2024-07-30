// Find out how many times an array has been rotated [Find Kth Rotation]
/* Given a increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. 
  Find the value of k.
  Let's suppose we have an array arr = [2, 4, 6, 9], so if we rotate it by 2 times so that it will look like this:
  After 1st Rotation : [9, 2, 4, 6]
  After 2nd Rotation : [6, 9, 2, 4] 
*/
/* Input: arr = [5, 1, 2, 3, 4]
   Output: 1
   Explanation: The given array is 5 1 2 3 4. The original sorted array is 1 2 3 4 5. 
   We can see that the array was rotated 1 times to the right.
   
   Input: arr = [1, 2, 3, 4, 5]
   Output: 0
   Explanation: The given array is not rotated. 
*/

/* 1. find out minimum element in array, by keeping track of index
   2. automatically, that index will be the no.of times the array has been rotated. 
*/
let nums = [4,5,6,7,0,1,2];
//findKRotationLS(nums);
findKRotationBS(nums);

// Brute - Linear Search
function findKRotationLS(nums) {
    let mini = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < mini){
            minIndex = i;
            mini = nums[i];
        }
    }
    return minIndex;
}

// Optimal - Binary Search
function findKRotationBS(nums) {
    let n = nums.length;
    let low = 0, high = n-1;
    let mini = Number.MAX_SAFE_INTEGER, minIndex = -1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);
        // if search space is already sorted
        if(nums[low] <= nums[high]){
            if(nums[low] < mini){
                minIndex = low;
                mini = nums[low];
                break;
            }
        }
        // in case of duplicates
        if(nums[low] === nums[mid] && nums[mid] === nums[high]){
            if(nums[low] < mini){
                minIndex = low;
                mini = nums[low];
            }
            low++;
            high--;
            continue;
        }
        // if left half is sorted
        if(nums[low] <= nums[mid]){
            if(nums[low] < mini){
                minIndex = low;
                mini = nums[low];
            }
            low = mid + 1;
        }
        // else right half is sorted
        else{
            if(nums[mid] < mini){
                minIndex = mid;
                mini = nums[mid];
            }
            high = mid - 1;
        }
    }
    return minIndex;
}