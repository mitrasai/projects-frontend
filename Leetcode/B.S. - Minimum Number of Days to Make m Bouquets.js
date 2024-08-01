// Minimum Number of Days to Make m Bouquets

/* You are given an integer array bloomDay, an integer m and an integer k.
   You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden. 
   The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly 
   one bouquet.

   task: to return what is the Minimum Number of Days we require such that we have ample amount blooming flowers k to
   make m bouquets. If it is impossible to make m bouquets return -1.
*/

/* Dry Run 
   let, assume we have an array [1, 15, 4, 15, 3]   m=3, k=2
   here, we need to make 3 bouquets with 2 adjacent flowers. the pairs are: (1, 15), (4, 15) => not possible.

   [8, 8, 8, 8, 14, 12, 13, 8]   m=3, k=2
   to bloom one flower it takes 8 days, before that it hasn't bloomed
   observations:
   day 8: with one flower we can't make a bouquet. (same as day 9, 10, 11)
   day 12: (8, 8), (8, 8), (12), (8) => we can only make two bouquets
   day 13: (8, 8), (8, 8), (12, 3), (8) => we can make three bouquets.

   from this observation, we 8th is our Minimum day to bloom a flower and 14th is our maximum i.e, all flowers are 
   bloomed. Minimum day is 8 and maximum day is 14 i.e., all flowers are bloomed.

   keep pointer at the day where flower is bloomed (i.e., Minimum) and start counting of that day until it is not 
   bloomed by moving pointer. when we reach the day where the flower hasn't bloomed turn down count to zero 
   and restart our count 
*/
// let bloomDay = [7,7,7,7,12,7,7];
let bloomDay = [8, 8, 8, 8, 14, 12, 13, 8] ;
let m = 2, k = 3;
minDays2(bloomDay, m, k)

// brute
function minDays(bloomDay, m, k) {
    if(m * k > bloomDay.length) return -1;
    for(let day=minDayToBloom(bloomDay); day<=maxDayToBloom(bloomDay); day++){
        if(isPossible(bloomDay, day, m, k) === 1) return day;
    }
    return -1;
}

function isPossible(bloomDay, day, m, k) {
    let count = 0, numberOfBouquets = 0;
    for(let i=0; i<bloomDay.length; i++){
        if(bloomDay[i] <= day) count++;
        else{
            numberOfBouquets += Math.floor(count/k);
            count = 0;
        }
    }
    numberOfBouquets += Math.floor(count/k);
    if(numberOfBouquets === m) return 1;
    else return 0;
}
// find Minimum day in our array.
function minDayToBloom(bloomDay) {
    let mini = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<bloomDay.length; i++){
        mini = Math.min(mini, bloomDay[i]);
    }
    return mini;
}
// find maximum day in our array.
function maxDayToBloom(bloomDay) {
    let maxi = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<bloomDay.length; i++){
        maxi = Math.max(maxi, bloomDay[i]);
    }
    return maxi;
}

// optimal
/* dry Run
   [8, 8, 8, 8, 14, 12, 13, 8]   m=3, k=2
   wkt, maximum day to bloom all flowers is 14th & minimum day to bloom a flower is 8th
   
           [8 9 10 11 12 13 14]
   low = 8, high = 14, mid = 11;
   wkt, possible cases are 12, 13, 14 to make m bouquets i.e., 3
   case 1: is 11 possible, 
   bloomDay[0] = 8 (<= 11): count = 1
   bloomDay[1] = 8 (<= 11): count = 2
   bloomDay[2] = 8 (<= 11): count = 3
   bloomDay[3] = 8 (<= 11): count = 4
   bloomDay[4] = 14 (> 11): numberOfBouquets += Math.floor(4/3) = 1, reset count = 0
   bloomDay[5] = 12 (> 11): numberOfBouquets += Math.floor(0/3) = 0, reset count = 0
   bloomDay[6] = 13 (> 11): numberOfBouquets += Math.floor(0/3) = 0, reset count = 0
   bloomDay[7] = 8 (<= 11): count = 1
   After loop: numberOfBouquets += Math.floor(1/3) = 0
   Total numberOfBouquets = 1
   numberOfBouquets < m, so return 0
   so, eliminate left half
   
   low = 12, high = 14, mid = 13;
   bloomDay[0] = 8 (<= 13): count = 1
   bloomDay[1] = 8 (<= 13): count = 2
   bloomDay[2] = 8 (<= 13): count = 3
   bloomDay[3] = 8 (<= 13): count = 4
   bloomDay[4] = 14 (> 13): numberOfBouquets += Math.floor(4/3) = 1, reset count = 0
   bloomDay[5] = 12 (<= 13): count = 1
   bloomDay[6] = 13 (<= 13): count = 2
   bloomDay[7] = 8 (<= 13): count = 3
   After loop: numberOfBouquets += Math.floor(3/3) = 1 => 1 + 1 => 2
   Total numberOfBouquets = 2
   numberOfBouquets >= m, so return 1
*/
function minDays2(bloomDay, m, k) {
    let low = minDayToBloom(bloomDay), high = maxDayToBloom(bloomDay);
    let ans = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(isPossible(bloomDay, mid, m, k) === 1){
            ans = mid;
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return ans;
}