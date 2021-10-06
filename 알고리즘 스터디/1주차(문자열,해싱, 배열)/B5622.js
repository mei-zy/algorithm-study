const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(input[0]);
function solution(str) {
    let answer=0;
    for(let i of str){

        if(i>='W')
            answer+=10;
        else if (i>='T')
             answer+=9;
        else if(i>='P')
             answer+=8;
        else if(i>='M')
             answer+=7;
        else if(i>='J')
             answer+=6;
        else if(i>='G')
             answer+=5;
        else if(i>='D')
             answer+=4;
        else if(i>='A')
            answer+=3;
    }
    console.log(answer);
}