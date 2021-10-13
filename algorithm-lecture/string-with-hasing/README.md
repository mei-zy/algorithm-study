# 문자열 및 해싱
## 알아야 하는 기본
### 문자열 자르기
- slice
```js
 str.slice(3) //3부터 자르겠다는 의미
 str.slice(2,-1) // 2~ str.length-1 까지 자르겠다는 의미
```
- substring
```js
 str.substring(시작할 index, 끝낼 index);
```

- substr
```js
 str.substr(시작할 index, index의 길이);
```
### 문자열 교체
- replace
```js
 str.replace(교체당할 문자, 교체할 문자);
```
 만약 str=['banana','melon','banana'];</br>
 str.replace('banana','kiwi');</br>
 -> str=['kiwi','melon','banana']; 로 변경된다.

```js
  str.replace([/^0~9]);
```

### 숫자인지 아닌지 바꾸기
`isNaN(x)` 만약 숫자가 아니라면 true 리턴

* * * 
## 회문문자열2
<a href="https://velog.io/@mingsomm/%ED%9A%8C%EB%AC%B8%EB%AC%B8%EC%9E%90%EC%97%B4%ED%88%AC%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EB%AC%B8%EC%9E%90%EC%97%B4%ED%99%9C%EC%9A%A9" target="_blank">회문 문자열 풀이</a>
</br>
코드 링크 : <a href="https://github.com/urther/algorithm-study/blob/main/%EC%88%98%EC%97%85/string-with-hasing/wordChain2.js">회문 문자열 전체 코드</a>

## 공통문자가 없는 단어(leetcode 318)
- sort 해주어야한다. 
- isUnique 함수: 같은 문자가 있는지 체크한다
> indexOf(x) : 만약 없다면 -1을 리턴한다.
- isUnique하다면 곱하기 해준다. (Math.max 함수로 최댓값 계산)

