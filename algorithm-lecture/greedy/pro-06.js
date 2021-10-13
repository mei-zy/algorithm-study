
// 최대 수입 스케줄

class maxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(1e9);
    // heap[0] 은 가장 큰 수 를 넣는 것이다.
  }
  // 1. insert 구현
  insert(value) {
    this.heap.push(value);
    // 새로 push 된 값 index = heap.length-1
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    // 변수 pos : 마지막 번호
    let tmp = this.heap[pos];
    // 변수 tmp:자기 자신 자리를 찾으려가는 노드

    while (tmp > this.heap[parseInt(pos / 2)]) {
      // 큰 숫자를 root로 보내고자 하는 것
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      // pos의 위치 변경 -> 부모의 위치로 올라간다.
      pos = parseInt(pos / 2);
    }
    // while문이 멈추면 부모보다 pos 가 더 작다는 의미다. -> pos 자리에 tmp를 넣어줘야 한다.
    this.heap[pos] = tmp;
  }
  // 최댓값을 뽑아내는 것이다.
  get() {
    // 자리 1 인덱스와 마지막 노드 인덱스
    // 마지막 노드의 부모까지만 내려가야 한다.
    if(this.heap.length===2) return this.heap.pop();
    // length 가 2라는 것은 남은 노드가 하나뿐이라는 것이다.
    // 설정을 해주지 않는다면 계속 노드에 pop해서 넣기 때문에 계속 2가 된다. 
    else{
      let res = this.heap[1];
      this.heap[1] = this.heap.pop();
      this.downheap(1, this.heap.length - 1)
    return res;
    }
  }
  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      // 왼쪽 자식

      // 부모가 왼쪽 자식만 가지고 있을 때 가면 안된다.
      if (child < len && this.heap[child] < this.heap[child + 1]) {
        // 왼쪽 자식과 오른쪽 자식을 비교한다.
        child++;
      }
      if (tmp >= this.heap[child]) break;

      this.heap[pos]=this.heap[child];
      pos=child;
    }
    this.heap[pos]=tmp;
  }
  // 원소의 갯수
  size(){
    return this.heap.length-1;
  }
}

// <---------문제----------->

function solution(n){
}
console.log(solution([[50,2],[20,1],[40,2],[60,3],[30,3],[30,1]]));
console.log(solution([[50,2],[40,2],[20,1],[10,1]]));