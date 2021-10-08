const { SlowBuffer } = require('buffer');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let splitedInput = input[0].split(' ');

// console.log(solution(input,splitedInput));
  let group=new Map();
  let member=new Map();
  // 초기로 먼저 걸그룹 받기
    // 다음의 값들을 설정
  let locate=2;
  let gname=input[locate-1].slice(0,-1);
  let gnum=parseInt(input[locate]);
  let initmem=new Array(gnum);

  for(let j=0;j<gnum;j++){
    initmem[j]=input[(locate+1)+j].slice(0,-1);
    // '/r' 제거해준다.
    member.set(input[(locate+1)+j].slice(0,-1),gname);
  }
  initmem.sort();
  group.set(gname,initmem);

  // 다음거부터 구해서 map에 넣기
  for(let i=1;i<parseInt(splitedInput[0]);i++){

    locate+=(gnum+2);
    gname=input[locate-1].slice(0,-1);
    gnum=parseInt(input[locate]);
    initmem=new Array(gnum);

    for(let j=0;j<gnum;j++){
      initmem[j]=input[(locate+1)+j].slice(0,-1);
      // '/r' 제거해준다.
      member.set(input[(locate+1)+j].slice(0,-1),gname);
    }
    initmem.sort();
    group.set(gname,initmem);

  }
  // 질문에 따른 출력하기
  let questionmem;
  let questionnum;
  let b;
  // 23까지 맞춰놓음
  locate+=(gnum-1);
   for(let t=0;t<splitedInput[1];t++){
    locate+=2;
    if(parseInt(input[locate+1])===1){
      // 해당 멤버가 속한 팀 이름 출력
      console.log(member.get(input[locate].slice(0,-1)));
    }
    else{
      b=group.get(input[locate].slice(0,-1));
      for(let c=0;c<b.length;c++)
        console.log(b[c]);
    }

    
  }