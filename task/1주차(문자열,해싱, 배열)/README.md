# 1주차 알고리즘 과제
## 애너그램
<ol>
   <li>str1과 str2의 이름을 입력받는다.</li>
   <li>str1의 변수마다map에key와 value를 넣는다. </li>
   <li>st2 for문 돌면서 str1 해시맵에 저장되있는 것을 하나씩 빼준다.</li>
    - 만약, value가 최종적으로 0이 아니라면 아나그램이 아니다.
 </ol>

**더 나은 해결방안**
- str1과 str2를 모두 Map에 넣고, 맵에 있는지 없는지 체크하기

**비교**
```js
for (let [k,v] of map1){
	if(map1.get(k) !==v)
		return "NO";
}
```
## 문자열 구분하기

<a href="https://velog.io/@mingsomm/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B5%AC%EB%B6%84" target="_blank">문자열 구분하기 정리</a>
