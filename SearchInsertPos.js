/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target==0) return 0
    for(i=0;i<nums.length;i++) {
        if(nums[i] == target) {
            return i;
        } else if ( nums[i] > target) {
            if(target>nums[i-1]) {
                return i
            }
            return i-1<0?0:i-1//apabila val melebihi target maka target berada di indexs sebelum index val
        }
    }
    return nums.length//target-nums[nums.length-1]+nums.length-1

    
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert2 = function(nums, target) {
    if(target<nums[0]) return 0
    for(i=0;i<nums.length;i++) {
        if(nums[i] == target) {
            return i;
        } else if ( nums[i] > target) {
            if(target>nums[i-1]) {
                return i
            }
            return i-1
        }
    }
    return nums.length//target-nums[nums.length-1]+nums.length-1

    
};
let nums = [2,5], target = 1
console.log(searchInsert2(nums, target))