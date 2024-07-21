// Maximum Product Sub-Array
/* Given an array, contains both +ve and -ve integers.
   Find a sub-array that has largest product, and return the product
   
   Sub-Array => contiguous subsequence

   NOTE:- Better doesn't count -ve numbers
*/

// Brute
let nums = [2,3,-2,4];
let maxi = Number.MIN_SAFE_INTEGER;
for(let i=0; i<nums.length; i++){
    for(let j=i; j<nums.length; j++){
        let product = 1;
        for(let k=i; k<=j; k++){
            product = product * nums[k];
        }
        maxi = Math.max(maxi, product);
    }
}
console.log(maxi);
/* T.C -> O(n*n*n) => approx O(n^3)
   S.C -> O(1)
*/

// Better
function maxProduct(nums){
    let maxi = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++){
        let product = 1;
        for(let j=i; j<nums.length; j++){
            product *= nums[j];
        }
        maxi = Math.max(maxi, product);
    }
    return maxi;
}
maxProduct(nums);
/* T.C -> O(n*n) => O(n^2)
   S.C -> O(1)
*/

// Optimal - 1
// prefix -> left(0) to right(n-1), suffix -> right(n-1) to left(0)
// when prefix, suffix encounter zero, immedaitely change the value to 1. cause something multipies zero gives zero itself
function maxProduct2(nums) {
    let maxi = Number.MIN_SAFE_INTEGER;
    let prefix = 1;
    let suffix = 1;
    for(let i=0; i<nums.length; i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;
        prefix = prefix * nums[i];
        suffix = suffix * nums[nums.length-i-1];
        maxi = Math.max(maxi, Math.max(prefix, suffix));
    }
    return maxi;
}
maxProduct2(nums);
/* T.C -> O(n)   S.C -> O(1) */
