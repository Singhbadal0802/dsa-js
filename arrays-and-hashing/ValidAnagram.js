// Contains Duplicate: https://leetcode.com/problems/is-anagram/
// Time: O(n), Space: O(n)

function isAnagram(s, t) {
  let anagram = true;
  let string1 = s.toLowerCase();
  let string2 = t.toLowerCase();
  const s1Array = string1.split("");
  const s2Array = string2.split("");
  if (s.length != t.length) return false;
  const seens = {};
  const seent = {};
  for (let i = 0; i < string1.length; i++) {
    if (seens[s1Array[i]]) {
      seens[s1Array[i]] += 1;
    } else {
      seens[s1Array[i]] = 1;
    }
    if (seent[s2Array[i]]) {
      seent[s2Array[i]] += 1;
    } else {
      seent[s2Array[i]] = 1;
    }
  }

  for (let key in seens) {
    if (seens[key] !== seent[key]) {
      anagram = false;
    }
  }
  return anagram;
}

console.log(isAnagram(s = "jar", t = "jam")); //false
console.log(isAnagram(s = "racecar", t = "carrace")); //true
