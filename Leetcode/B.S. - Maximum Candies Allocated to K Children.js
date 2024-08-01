// Maximum Candies Allocated to K Children

/* You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of 
   size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.
   
   You are also given an integer k. You should allocate piles of candies to k children such that each child gets 
   the same number of candies. Each child can take at most one pile of candies and some piles of candies may go unused.
   
   Return the maximum number of candies each child can get. 
*/

/* Example 1:
    Input: candies = [5,8,6], k = 3
    Output: 5
    Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. 
    We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. 
    It can be proven that each child cannot receive more than 5 candies.

Example 2:
    Input: candies = [2,5], k = 11
    Output: 0
    Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at 
    least one candy. Thus, each child gets no candy and the answer is 0. 
*/

/* [5, 8, 6] => pile-1 has 5 canides, pile-2 has 8 canides.... 
   from above examples we can observe that, no.of piles of candies should be greater than or equal to childrens.
   also, they have mentioned that Each child can take at most one pile of candies

   go from 1-candy/children.
   let take low = 1, high = 8, mid = 4;
   1st-iteration => ([5, 8, 6], mid) => 5/4 + 8/4 + 6/4 => 1+2+1 => 4
   check if the number of piles we got can be distribute among k childrens (i.e., 3), in this case one pile of candies
   remaining. so, eliminate left half.

   low = 5, high = 8, mid = 6;
   2nd-iteration => ([5, 8, 6], mid) => 5/6 + 8/6 + 6/6 => 0 + 1 + 1 => 2
   in this case 2 childrens will not get any piles of candies. so, eliminate right half.

   low = 5, high = 5, mid = 5;
   3rd-iteration => ([5, 8, 6], mid) => 5/5 + 8/5 + 5/5 => 1 + 1 + 1 => 3
   in this case each children will get n number of candies.
*/
let candies = [5, 8, 6];
let k = 3;
//maximumCandies(candies, k);
maximumCandies2(candies, k);

// brute
function maximumCandies2(candies, k) {
    let maxCandies = 0;
    for(let i=1; i<= maxPileInCandies(candies); i++){
        let piles = isPossible(candies, i);
        if(piles >= k) maxCandies = i;
    }
    return maxCandies;
}

// optimal
function maximumCandies(candies, k) {
    let low = 1, high = maxPileInCandies(candies);
    let ans = 0;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        let maxCandies = isPossible(candies, mid);
        if(maxCandies >= k){
            ans = mid;
            low = mid + 1;
        }
        else high = mid - 1;
    }
    return ans;
}

function maxPileInCandies(candies) {
    let maximumPile = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<candies.length; i++){
        // maximum candies in each pile of candies array.
        maximumPile = Math.max(maximumPile, candies[i]);
    }
    return maximumPile;
}

function isPossible(candies, certainCandies) {
    let piles = 0;
    for(let i=0; i<candies.length; i++){
        piles += Math.floor(candies[i]/certainCandies);
    }
    return piles;
}