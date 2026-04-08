class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack =[];
        let matching = {
            ')':'(',
            ']':'[',
            '}':'{'  
        }

        for(let char of s){
            if(char==='(' || char==='[' ||char ==='{'){
                stack.push(char);

            }else{
                if(stack.pop()!==matching[char]) return false;
            }
      }
        return stack.length === 0;   

        }
    }
