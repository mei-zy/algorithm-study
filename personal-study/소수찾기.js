var countPrimes = function(n){
  if(n<=2) return 0;
  let ch = new Array();
  for(let i=2; i<n; i++){
      ch[i]=0;
  }
  let cnt = 0;
  for(let i=2; i<=parseInt(Math.sqrt(n));i++){
      if(ch[i] === 0 ){
          for(let j=i*i; j<n; j+=i) ch[j]=1;
      }
  }
  for(let i=2; i<n; i++){
      if(ch[i]===0) cnt++;
  }
  return cnt;
}


console.log(countPrimes(10));