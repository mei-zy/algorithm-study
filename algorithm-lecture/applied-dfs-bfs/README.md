## DFS, BFS 활용

### pro-02.js 방향 그래프 경로찾기

<a href="https://github.com/urther/algorithm-study/blob/main/algorithm-lecture/applied-dfs-bfs/pro-02.js">코드 링크</a>

<a href="https://velog.io/@mingsomm/DFS-%EB%B0%A9%ED%96%A5%EA%B7%B8%EB%9E%98%ED%94%84-%EA%B2%BD%EB%A1%9C-%EC%B0%BE%EA%B8%B0">코드 설명</a>


### pro-03.js 동아리 개수
> 현수가 다니는 학교의 동아리 개수를 구하는 프로그램을 작성하세요. 만약 1번 학생과 2번 학생이 같은 동아리면 (1,2) 순서쌍으로 입력되며, (2,3) 이 입력되면 1,2,3번학생은 같은 동아리입니다.
</br>
입력 예제 : 7,[[1,2],[2,3],[1,4],[1,5]]
반환값 형식 : 3

```js
    for(let [a, b] of edges){
        graph[a].push(b);
        graph[b].push(a);
    }
```

1. 양방향 그래프이므로 양쪽에서 이동이 가능하게끔 한다.


```js
    for(let i=1; i<=n; i++){
        if(ch[i]===0){
            answer++;
            ch[i]=1;
            DFS(i);
            console.log(ch);
        }
```
2. 같은 그래프 외 다른 그래프가 있는지 체크한다.
* 만약 같은 그래프였다면, 앞에서 먼저 ch 배열에 체크가 되었을 것이다.

<a href="https://github.com/urther/algorithm-study/blob/main/algorithm-lecture/applied-dfs-bfs/pro-03.js"> 전체 코드 </a>

