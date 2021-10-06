function solution(str1,str2){

  let map=new Map();
  for(let key of str1){
    map.set(key,(map.get(key)||0)+1);
  }
  for(let key of str2){
    if(!map.has(key))
      return "NO";
    
    let newValue=map.get(key)-1;
    if(newValue<0)
      return "NO";
    map.set(key,newValue);
  }

  for(let key of str1){
    if(map.get(key)!=0)
      return "NO";
  }
  return "YES";
  
}
console.log(solution("AbaAeCe", "baeeACAa"));
