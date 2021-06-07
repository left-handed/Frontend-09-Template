// 数组中出现次数超过一半的数字
let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
function getNum () {
  let a = 0, count = 0;
  for (let k = 0; k < nums.length; k++) {
    if (!count) {
      a = nums[k];
      count++;
    } else {
      count += nums[k] === a ? 1 : -1;
    }
  }
  return a;
}

console.log(getNum());