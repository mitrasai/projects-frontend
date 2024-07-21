// Reverse Pairs
/* Given an array contains integer, return the number of reverse pairs in the array
   A reverse pair is a pair (i, j) where:
   0 <= i < j < nums.length and
   nums[i] > 2 * nums[j]

Example 1:
    Input: nums = [1,3,2,3,1]
    Output: 2
    Explanation: The reverse pairs are:
    (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
    (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
*/

// Brute-Force
// Intuition: Go to every element and check, left > 2*right
let nums = [40, 25, 19, 12, 9, 6, 2];
let count = 0;
for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
        if(nums[i] > 2*nums[j]) count++;
    }
}
console.log(count);
/* T.C -> O(n*n) => O(n^2)    S.C -> O(1) */

// Optimal - Merge Sort
function merge(nums, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(nums[left]);
        left++;
    }
    while (right <= high) {
        temp.push(nums[right]);
        right++;
    }
    // copying elements back to the original array from temp array
    for (let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }
}

function countPairs(nums, low, mid, high){
    let right = mid + 1;
    let count = 0;
    for(let i=low; i<=mid; i++){
        while(right<=high && nums[i] > 2*nums[right]) right++;
        count +=(right - (mid + 1));
    }
    return count;
}

function mergeSort(nums, low, high){
    let count = 0;
    if(low >= high) return count;
    let mid = Math.floor((low + high) / 2);
    count += mergeSort(nums, low, mid);
    count += mergeSort(nums, mid+1, high);
    count += countPairs(nums, low, mid, high);
    merge(nums, low, mid, high);
    return count;
}
function reversePairs(nums){
    let n = nums.length;
    return mergeSort(nums, 0, n-1);
}
reversePairs(nums);
/* T.C -> nlogn (merge) + n (count pairs) => O(2nlogn)     S.C -> O(n) (temporary storage during the merge step)*/