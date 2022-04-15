let result = [];
let nums = [7,9,"hi",12,"hi", 7, 53];

function arrayDedup(nums) {
  for (let i = 0; i< nums.length; i++) {
    let x = nums.length-1;
    if (nums[i] !== nums[x]){
       result.push(nums[i])
       x--;
    }
  }
  return result;   
}