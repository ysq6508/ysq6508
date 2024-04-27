var nums = [2,7,11,15],target = 9;

var twoSum = function(nums, target) {
    var diff = {}//创建一个空对象
    for(var i = 0;i < nums.length;i++){
        var temp = target - nums[i]
        if(diff[nums[i]] !== undefined){
            return [diff[nums[i]],i]
        }
        diff[temp] = i;
    }
};

console.log(twoSum(nums,target));