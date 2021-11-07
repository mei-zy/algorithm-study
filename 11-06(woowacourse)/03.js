function solution(ings, menu, sell){
  let ingsH=new Map();

  for(let i=0;i<ings.length;i++){
    let tmp=ings[i].split(' ');
    ingsH.set(tmp[0],parseInt(tmp[1]));
  }
    // 재료 넣기

  let profitMenuH=new Map();
  for(let i=0;i<menu.length;i++){
    let tmp=menu[i].split(' ');
    let ingpay=0;
    for(let x of tmp[1]){
      ingpay+=ingsH.get(x);
    }
    profitMenuH.set(tmp[0],parseInt(tmp[2]-ingpay));
  }
  // 각 메뉴에대한 이익 값 구하기
  let total=0;
  for(let i=0;i<sell.length;i++){
    let tmp=sell[i].split(' ');
    total+=profitMenuH.get(tmp[0]) * tmp[1];
  }
  return total;
}

console.log(
  solution(
    ["r 10", "a 23", "t 124", "k 9"],
    [
      "PIZZA arraak 145",
      "HAMBURGER tkar 180",
      "BREAD kkk 30",
      "ICECREAM rar 50",
      "SHAVEDICE rar 45",
      "JUICE rra 55",
      "WATER a 20",
    ],
    ["BREAD 5", "ICECREAM 100", "PIZZA 7", "JUICE 10", "WATER 1"]
  )
);