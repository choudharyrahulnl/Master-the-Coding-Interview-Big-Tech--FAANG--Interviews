//////////////////////////////
//      ARRAYS
//////////////////////////////


//////////////////////////////
//      CHALLENGE 1 EASY
//////////////////////////////

// EX GIVEN AN ARRAY OF INTEGER RETURN THE INDICES OF THE TWO NUMBER THAT ADD UP TO A GIVEN TARGET
// [1,3,7,9,2] => Target 11 // [3,4]

// SOLUTION 1 FOR LOOP

// SOLUTION 2
// SORT -> [1,2,3,7,9] -> 2 POINTER START/END -> IF SUM OF START + END < TARGET START++
// ELSE END++

// SOLUTION 3
// USING HASHING [1,3,7,9,2] => {target-key:index}
// CHECK 1 IS PRESENT IN HASHMAP IF NOT ADD {10:0},
// CHECK 3 IS PRESENT IN HASHMAP IF NOT ADD {8:1},
// CHECK 7 IS PRESENT IN HASHMAP IF NOT ADD {4:2},
// CHECK 9 IS PRESENT IN HASHMAP IF NOT ADD {2:3},
// CHECK 2 IS PRESENT IN HASHMAP YES! RETURN [3,5]

// function twoNumberSumIndices(arr, target) {
//
//     if(arr.length === 0) return [];
//
//     let result = {};
//     for (let i = 0; i <arr.length; i++) {
//         if(result[arr[i]] >= 0) {
//             return [result[arr[i]],i];
//         } else {
//             result[target-arr[i]] = i;
//         }
//     }
//
//     return [];
// }
// console.log(twoNumberSumIndices([1,3,7,9,2],11)); // [3,4]
// console.log(twoNumberSumIndices([1,3,7,9,2],12)); // [1,3]
// console.log(twoNumberSumIndices([],12)); // []
// console.log(twoNumberSumIndices([1,11],12)); // [0,1]
// console.log(twoNumberSumIndices([1],12)); // []


//////////////////////////////
//      CHALLENGE 2 MEDIUM
//////////////////////////////

// EX ARRAY OF POSITIVE INTEGER WHERE EACH INTEGER REPRESENT HEIGHT OF VERTICAL LINE
// FIND 2 LINES WHICH FORMS A CONTAINER AND WOULD HOLD THE GREATEST AMOUNT OF WATER
// RETURN THE AREA OF WATER IT WOULD HOLD
// Area = Min(a,b) * (b-index - a-index);
// [1,8,6,2,9,4] // Answer 27 (8,9) -> Area = 8(Length) * (4-1)(width) => 24

// function getMaxWaterContainer(heights) {
//     let maxHeight = 0;
//     for (let i = 0; i < heights.length; i++) {
//         for (let j = i+1; j < heights.length; j++) {
//             const height = Math.min(heights[i], heights[j]);
//             const width = j-i;
//             const area = height * width;
//             maxHeight = Math.max(maxHeight, area);
//         }
//     }
//     return maxHeight;
// }
// console.log(getMaxWaterContainer([1,8,6,2,9,4])); // 24
// console.log(getMaxWaterContainer([7,1,2,3,9])); // 28

// SOLUTION 2
// USING 2 POINTER

// function getMaxWaterContainer(heights) {
//     let maxHeight = 0;
//     let start = 0;
//     let end = heights.length-1;
//
//     for (let i = 0; i < heights.length; i++) {
//         const height = Math.min(heights[start], heights[end]);
//         const width = end-start;
//         const area = height * width;
//         maxHeight = Math.max(maxHeight, area);
//
//         if(heights[start] < heights[end]) start++
//         else end--;
//     }
//
//     return maxHeight;
// }
// console.log(getMaxWaterContainer([1,8,6,2,9,4])); // 24
// console.log(getMaxWaterContainer([7,1,2,3,9])); // 28

//////////////////////////////
//      CHALLENGE 2 HARD
//////////////////////////////

// EX GIVEN AN ARRAY OF INTEGERS REPRESENTING AN ELEVATION MAP WHERE THE WIDTH OF EACH BAR IS 1
// RETURN HOW MUCH RAIN WATER CAN BE TRAPPED

// function trappedRainWater(heights) {
//
//     let totalUnitOfWater = 0;
//
//     for (let i = 0; i < heights.length; i++) {
//
//         let left = i;
//         let right = i;
//         let maxLeft = 0;
//         let maxRight = 0;
//
//         // TRAVERSE LEFT
//         while (left >= 0) {
//             maxLeft = Math.max(maxLeft,heights[left]);
//             left--;
//         }
//
//         // TRAVERSE RIGHT
//         while (right < heights.length) {
//             maxRight = Math.max(maxRight,heights[right]);
//             right++;
//         }
//
//         // CALCULATE - Math.min(maxLeft,maxRight) - CurrentHeight
//         let currentWater = Math.min(maxLeft,maxRight) - heights[i];
//
//         if(currentWater >= 0) {
//             totalUnitOfWater += currentWater;
//         }
//     }
//
//     return totalUnitOfWater;
// }
//
// console.log(trappedRainWater([0,1,0,2,1,0,3,1,0,1,2]));



// function trappedRainWater(heights) {
//
//     // Identify pointer with lesser value
//     // Is this pointer value less than or equal to the max on that side
//     //      yes -> update max on that side
//     //      no -> get water for pointer value, add to the total
//     // Move pointer inward
//     // Repeat for other pointer
//
//     let totalUnitOfWater = 0;
//     let left = 0;
//     let right = heights.length-1;
//     let leftMax = 0;
//     let rightMax = 0;
//
//     // [0,1,0,2,1,0,3,1,0,1,2]
//     while(left < right) {
//         // Identify pointer with lesser value
//         if(heights[left] <= heights[right]) {
//             // Is this pointer value greater than or equal to the max on that side
//             if(heights[left] >= leftMax) {
//                 // yes -> update max on that side
//                 leftMax = heights[left];
//             } else {
//                 // no -> get water for pointer value, add to the total
//                 totalUnitOfWater += leftMax - heights[left];
//             }
//             left++;
//         } else {
//             // Is this pointer value less than or equal to the max on that side
//             if(heights[right] >= rightMax) {
//                 // yes -> update max on that side
//                 rightMax = heights[right];
//             } else {
//                 // no -> get water for pointer value, add to the total
//                 totalUnitOfWater += rightMax - heights[right];
//             }
//             right--;
//         }
//     }
//
//     return totalUnitOfWater;
// }
//
// console.log(trappedRainWater([0,1,0,2,1,0,3,1,0,1,2]));


