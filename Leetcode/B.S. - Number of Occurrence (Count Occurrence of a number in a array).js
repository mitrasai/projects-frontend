// Number of Occurrence
/* Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr. */
/*  Input:
    N = 7, X = 2
    Arr[] = {1, 1, 2, 2, 2, 2, 3}
    Output: 4
    Explanation: 2 occurs 4 times in the given array.

    Input:
    N = 7, X = 4
    Arr[] = {1, 1, 2, 2, 2, 2, 3}
    Output: 0
    Explanation: 4 is not present in the given array.
*/

/* Dry run:
   Input: arr = [2, 4, 6, 8, 8, 8, 11, 13]   target = 8
   Output: 3
*/

/* Brute: 
   1. Do a linear iteration over a array by taking two var's and intialised with -1;
   2. we're iterating upto size of an array, worst-case it's size in n.
   3. T.C -> O(n)   S.C -> O(1)
*/
let nums = [2, 4, 6, 8, 8, 8, 11, 13];
let n = nums.length;
let target = 8;
//count(nums, n, target);
count2(nums, n, target);

function count(nums, n, target) {
    let first = -1, last = -1;
    for(let i=0; i<n; i++){
        if(nums[i] === target){
            if(first === -1) first = i;
            else last = i;
        }
    }
    if(first === -1) return 0;
    return last - first + 1;
}

// Optimal - Binary Search
function count2(nums, n, target) {
    let first = firstPosition(nums, n, target);
    if(first === -1) return 0;
    let last = lastPosition(nums, n, target);
    return last - first + 1;
}

function firstPosition(nums, n, target) {
    let low = 0, high = n-1;
    let first = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] === target){
            first = mid;
            high = mid - 1;
        }
        else if(nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return first;
}

function lastPosition(nums, n, target) {
    let low = 0, high = n-1;
    let last = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] === target){
            last = mid;
            low = mid + 1;
        }
        else if(nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return last;
}