//////////////////////////////
//      STRINGS
//////////////////////////////


////////////////////////////////////
//      CHALLENGE 1 EASY TWO POINTER
////////////////////////////////////

// EX GIVEN 2 STRINGS S & T, RETURN IF THEY ARE EQUAL WHEN BOTH ARE TYPED OUT. ANY '#' THAT APPEAR IN THE STRING
// COUNT AS A BACKSPACE
// "cb#d" -> "cb" -> "c" -> "cd"
// S:"ab#c" & T: "az#c" -> "ac" === "ac" -> return true
// S:"ab#z" & T: "az#z" // true

// function twoStringAreEqual(s,t) {
//
//     // CREATE EMPTY ARRAY
//     let sa = [];
//     let ta = [];
//
//
//     for (const val of s) {
//         // IF WE FIND # SIMPLY POP
//         if(val === '#') {
//             sa.pop();
//         } else {
//             // ADD CHAR TO ARRAY
//             sa.push(val)
//         }
//     }
//
//     for (const val of t) {
//         // IF WE FIND # SIMPLY POP
//         if(val === '#') {
//             ta.pop();
//         } else {
//             // ADD CHAR TO ARRAY
//             ta.push(val)
//         }
//     }
//
//     // CHECK LENGTH OF 2 ARRAY, IF NOT SAME RETURN FALSE
//     if(sa.length !== ta.length) return false;
//
//     // MATCH BOTH STRING
//     for (let i = 0; i < sa.length; i++) {
//         if(sa[i] !== ta[i]) return false;
//     }
//
//     return true;
// }


// function twoStringAreEqual(s, t) {
//
//     let p1 = s.length - 1;
//     let p2 = t.length - 1;
//
//     while (p1 >= 0 || p2 >= 0) {
//         if (s[p1] === "#" || t[p2] === "#") {
//             if (s[p1] === "#") {
//                 let backCount = 2;
//                 while (backCount > 0) {
//                     p1--;
//                     backCount--;
//                     if (s[p1] === "#") {
//                         backCount = backCount + 2;
//                     }
//                 }
//             }
//
//             if (t[p2] === "#") {
//                 let backCount = 2;
//                 while (backCount > 0) {
//                     p2--;
//                     backCount--;
//                     if (t[p2] === "#") {
//                         backCount = backCount + 2;
//                     }
//                 }
//             }
//
//         } else {
//             if (s[p1] !== t[p2]) {
//                 return false;
//             } else {
//                 p1--;
//                 p2--;
//             }
//         }
//
//         return true;
//
//     }
//
// }
//
// console.log(twoStringAreEqual("ab#c", "az#c")); // true
// console.log(twoStringAreEqual("abc#d", "acc#c")); // false
// console.log(twoStringAreEqual("x#y#z#", "a#")); // true
// console.log(twoStringAreEqual("a###b", "b")); // true
// console.log(twoStringAreEqual("Ab#z", "ab#z")); // false



/////////////////////////////////////////
//      CHALLENGE 1 MEDIUM SLIDING WINDOW
//////////////////////////////////////////

// EX GIVEN A STRING FIND THE LENGTH OF LONGEST SUBSTRING WITHOUT REPEATING CHAR
// abcbbd -> abc