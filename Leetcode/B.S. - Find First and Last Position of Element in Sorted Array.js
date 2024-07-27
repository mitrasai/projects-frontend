// Find First and Last Position of Element in Sorted Array
/* Given an array of integers which is sorted, need to find first and last position of a given target/number 
   if target is not found in the array, return [-1,-1]
*/

/* Dry run:
   Input: arr = [2, 4, 6, 8, 8, 8, 11, 13]   target = 8
   Output: {3, 5}
*/

/* Brute: 
   1. Do a linear iteration over a array by taking two var's and intialised with -1;
   2. we're iterating upto size of an array, worst-case it's size in n.
   3. T.C -> O(n)   S.C -> O(1)
*/
const nums = [2, 4, 6, 8, 8, 8, 11, 13];
const target = 8;
let first = -1, last = -1;
for(let i=0; i<nums.length; i++){
    if(nums[i] === target){
        if(first === -1) first = i;
        last = i;
    }
}
console.log(`First: ${first}, Last: ${last}`);

// Optimal
/* wkt, if we apply binary search for an sorted array, always first position stands at lower indexes i.e., left half 
   vice-versa last position stands at higher indexe i.e., right half. 
   [2, 4, 6, 8, 8, 8, 11, 13]
   low = 0, high = 7, mid = 3;

   check if mid element is equals to our target, also check for first position
   if mid == target => it is our answer and eliminate right half
   else mid < target => eliminate left half
   else => eliminate right half
*/

const n = nums.length;
let result = [-1, -1];
const first = firstPosition(nums, target, n);
if(first === -1) console.log(result);
const last = lastPosition(nums, target, n);
result[0] = first;
result[1] = last;
console.log(result);

function firstPosition(nums, target, n){
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

function lastPosition(nums, target, n){
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