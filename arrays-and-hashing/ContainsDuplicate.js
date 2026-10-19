// Contains Duplicate: https://leetcode.com/problems/contains-duplicate/
// Idea: remember numbers I've already seen in a Set.
// Time: O(n), Space: O(n)

function hasDuplicate(nums) {
        let duplicatedValuePresent = false;
        const seen = {};
          nums.map((el)=>{
            if(seen[el]){
                duplicatedValuePresent = true;
            }else{
                seen[el] = true;
                duplicatedValuePresent = false;
            }
        });
      return duplicatedValuePresent;
    };

const num =[1,2,3,3];
const num2 =[1,2,3,4];

console.log(hasDuplicate(num)); //true
console.log(hasDuplicate(num2)); //false  