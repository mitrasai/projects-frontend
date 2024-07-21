// 4 - SUM II
/* Given four arrays 'nums1', 'nums2', 'nums3' and 'nums4' with length 'n',
   return number of tuples (i, j, k, l) such that their sum of nums[i] + nums[j] + nums[k] + nums[l] == 0
*/
let nums1 = [1, 2];
let nums2 = [-2, -1];
let nums3 = [-1, 2];
let nums4 = [0, 2];

// Brute - Force
/* iterate over all the arrays and form all the possible tuples, see how many tuples having sum==0. */

// let count = 0;
// for(let i of nums1) // O(n)
//     for(let j of nums2) // O(n)
//         for(let k of nums3) //O(n) 
//             for(let l of nums4) // O(n)
//                 if(i + j + k + l == 0) count++;
// console.log(count);

/* T.C -> O(N * N * N * N) => approx O(N^4) 
   S.C -> O(1) 
*/


// Better
/* wkt, we should eliminate one loop which boil downs to O(n^3) 
   In 2-SUM, we done approach called map. In mapping if the value exist in map, it increment the freq by 1 and sets
   the updated value back in map. if not map returns undefined or defualt value (0).

   in result, it retrieves the value associated with the key-(i+j+k) from the map,
   if key-(i+j+k) exist in map, it returns the corresponding value, if not it returns 0
*/
// function fourSum(nums1, nums2, nums3, nums4) {
//     let map = new Map();
//     for (let l of nums4) {
//         map.set(l, (map.get(l) || 0) + 1);
//     }

//     let count = 0;
//     for (let i of nums1) {
//         for (let j of nums2) {
//             for (let k of nums3) {
//                 const target = -(i + j + k);
//                 count += map.get(target) || 0;
//             }
//         }
//     }
//     return count;
// }
// fourSum(nums1, nums2, nums3, nums4);

/* T.C -> O(n) + O(n^n^n) => approx O(n^3) 
   S.C -> O(n) 
*/


// Optimal
/* what happens if we insert two arrays into the map */
function fourSum(nums1, nums2, nums3, nums4) {
    let map = new Map();
    for(let l of nums4){
        for(let k of nums3){
            map.set(k+l, (map.get(k+l) || 0) + 1);
        }
    }
    let count = 0;
    for(let i of nums1){
        for(let j of nums2){
            const target = -(i+j);
            count += map.get(target) || 0;
        }
    }
    return count;
}
fourSum(nums1, nums2, nums3, nums4);
/* T.C -> O(n*n) + O(n*n) => approx O(n^2);
   S.C -> O(n*n)
*/