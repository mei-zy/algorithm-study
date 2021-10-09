function solution(str){
  let left=0,right=str.length-1;
  let str1,str2;
  

  while(left<right){
    if(str[left]!==str[right]){
      // 다른 경우
      if(left!==parseInt(str.length/2)){
        str=str.substring(left+1,right);
        if(str!==str.split('').reverse().join(''))
          return false;
      }
    }
    else{
      left++;
      right--;
    }
  
  }
  return true;
}

console.log(solution("abcdba"));
console.log(solution("abcdccacba"));   
console.log(solution("abcabbakcba"));                                                                                                                