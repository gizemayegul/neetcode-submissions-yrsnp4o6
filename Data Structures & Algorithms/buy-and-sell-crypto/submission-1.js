class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bestProfit=0;
        let left=0;
        for(let right=1;right<prices.length;right++){
           if(prices[right]<prices[left]){
            left = right //left=1
           }else{
            let profit=prices[right]-prices[left];
            bestProfit = Math.max(bestProfit,profit)
           }
        }
        return bestProfit;
    }
    
}
