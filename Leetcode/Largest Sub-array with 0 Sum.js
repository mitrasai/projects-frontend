// Largest Sub-array with 0 Sum
/* Given an array, contains both +ve and -ve integers. Return the length of the longest sub-array with the sum of all 
   elements equal to 0.
   Sub-Array => contiguous subsequence
*/
let nums = [9, -3, 3, -1, 6, -5];
/* wkt, every element itself is an sub-array.
 i=0 => 9 - 3 != 0
 9 - 3 + 3 !=0 
 i=1 => -3 + 3 == 0
 -3 + 3 -1 !=0 
 */

// Brute - force
/* 1. Generate all possible sub-arrays
   2. Check for sub-array, where their sum==0 
   3. Among those sub-arrays [sum==0], return length of the largest sub-array
*/
function subArray(nums) {
    let maxi = 0;
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum = sum + nums[j];
            if(sum === 0) maxi = Math.max(maxi, j-i+1); 
            // calculating current sub-array length with existing maximum length stored in maxi and updating maxi
        }
    }
    return maxi;
}
subArray(nums);
/* T.C -> O(n*n) => O(n^2)
   S.C -> O(1) 
*/

// optimal
/* 1. traverse through the array, add the elements to sum
   2. if sum==0, we can say that sub-array until the current index has a sum=0. so, update the maxi to current index
    plus 1
   3. if sum!=0, check if sum is present in map
   if it does, we calculate the length of the subarray by subtracting the index stored in map from current index, and 
   update our map
   if it not, we add it along with its index to the map
*/
function subArray2(nums) {
    let map = new Map();
    let maxi = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum = sum + nums[i];
        if(sum === 0) maxi = i+1;
        else{
            if(map.get(sum)!=null){
                maxi = Math.max(maxi, i-map.get(sum));
            }else{
                map.set(sum, i);
            }
        }
    }
    return maxi;
}
subArray2(nums);
/* T.C -> O(n)
   S.C -> O(n), using map inorder to store the sum
*/