class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap={};
        for(let i=0;i<nums.length;i++){
            if(!hashMap[nums[i]]){
                hashMap[nums[i]]=1;
            }else{
                hashMap[nums[i]]=hashMap[nums[i]]+1;
            }
        }
        return Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a]).slice(0, k)
    }
}
