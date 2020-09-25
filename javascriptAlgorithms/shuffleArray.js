// //Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var array = [2, 5, 1, 3, 4, 7];
var shuffle = [].concat(array);
var j = 0;
var n = 3;
for (var i = 0; i < 3; i++) {
  shuffle[j] = array[i];
  shuffle[j + 1] = array[n];
  j += 2;
  n = n + 1;
}
console.log(shuffle);
