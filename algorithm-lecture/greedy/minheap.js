class minHeap {
  constructor() {
    this.heap = [];
    this.heap[0] = Number.MIN_SAFE_INTEGER;
  }
  // <---1. 데이터삽입 함수 --->
  insert(value) {
    this.heap.push(value);
    this.upHeap(this.heap.length - 1);
  }
  upHeap(pos) {
    // pos는 insert된 위치이다.(heap)
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      // tmp(입력된 값)이 올라갈 수 있을만큼(parents) 올라간다.
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
    // 마지막으로 멈춘 곳에 tmp값 삽입
  }
  // <---1. 데이터제거 함수 --->
  get() {
    // 1) 노드가 한 개 남았을 때
    if (this.heap.length === 2) return this.heap.pop();
    // 2) 노드가 한 개 이상 남았을 때
    else {
      let res = this.heap[1];
      this.heap[1] = this.heap.pop();
      this.downHeap(1, this.heap.length - 1);
      return res;
    }
  }
  downHeap(pos, len){
    let tmp=this.heap[pos];
    while(tmp>=this.heap[parseInt(pos*2)]){
      let child=pos*2;
      if(child<len && this.heap[child] > this.heap[child+1]) child++;
      if(tmp<=this.heap[child]) break;
      this.heap[pos]=this.heap[child];
      pos=child;
    }
    this.heap[pos]=tmp;
  }
}
