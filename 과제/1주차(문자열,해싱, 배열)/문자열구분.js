function solution(words) {

    let answer, i;
    for(i=0;i<words[0].length;i++){
        let sH=new Map();
        let count=1;
        let flag=false;
        for(let j=0;j<words.length;j++){
            let sub=words[j].substring(0,i+1);
            if(sH.has(sub)){
                count++;
            }
            sH.set(sub,1);
            if((j==words.length-1) && count!==words.length){
                flag=true;
                break;
            }
        }
        if(flag)
            break;
    }
    answer=i+1;
    return answer;
  }
console.log(solution(["seetw", "seebsw", "seasw"]));
console.log(solution(["ackky","kabck","yokkcs"]));
console.log(solution(["longtong","longlong","longbig"]));