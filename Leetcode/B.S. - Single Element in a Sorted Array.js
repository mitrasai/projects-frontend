// Single Element in a Sorted Array
/* You are given a sorted array consisting of only integers where every element appears exactly twice, 
   except for one element which appears exactly once.
   Return the single element that appears only once. 
*/

/* if we observe, if an element appears twice in an sequence i.e., either preceding or the subsequent element will 
   also same. In case of singe element, this condition will not be satisfied
   array[i] != array[i-1] && array[i] != array[i+1]
*/
let nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
//singleNonDuplicateLS(nums);
//singleNonDuplicateXOR(nums);
singleNonDuplicateBS(nums);

// Optimal - Linear Search
function singleNonDuplicateLS(nums) {
    if(nums.length === 1) return nums[0];
    
    for(let i=0; i<nums.length; i++){
        if(i === 0){
            // do not check for previous element
            if(nums[i] != nums[i+1]) return nums[i]; // returns 0th index element
        }
        else if(i === nums.length-1){
            // do not check for next element
            if(nums[i] != nums[i-1]) return nums[i]; // returns n-1th index element
        }
        else{
            // if it is in b/w 1th index to n-2th index
            if(nums[i] != nums[i-1] && nums[i] != nums[i+1]) return nums[i] // returns current index element
        }
    }
    return -1;
}

// Better - XOR
function singleNonDuplicateXOR(nums) {
    let result = 0;
    for(let i=0; i<nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
}

// Optimal
/* 1. first identify the half and then eliminate
   2. also make a check, if the current element is out single element 
   3. also check edge cases for starting, ending elements, inordet to avoid overflow
*/
function singleNonDuplicateBS(nums) {
    let n = nums.length;
    if(n === 1) return nums[0];
    if(nums[0] != nums[1]) return nums[0];
    if(nums[n-1] != nums[n-2]) return nums[n-1];
    let low = 1, high = n-2;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) return nums[mid];
        if(mid%2 === 0 && nums[mid] === nums[mid+1] || mid%2 === 1 && nums[mid] === nums[mid-1]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}