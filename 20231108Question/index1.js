const date = document.querySelector('#title');

//1번문제 답안
date.textContent = '2023-11-08 문제'

//2번문제 답안
const fruit = document.querySelector("#fruit");
const fruitList = fruit.children;

const li1 = document.createElement("li"); //요소 생성
const li2 = document.createElement("li");
const text1 = "천혜향"; //요소 내용 부여(추가)
const text2 = "샤인머스켓";

li1.textContent = text1; //요소 내용 부여(추가)한번에해도 상관없음
li2.textContent = text2;

fruit.prepend(li1); //요소를 html 내부에 배치
fruitList[1].after(li2);

function textDeco(e) {
  e.target.classList.add("line", "color", "pointer");//클래스추가하는 함수 

  //setTimeout은 2초가 지나면 클래스를 삭제하여 css효과도 같이 사라지게 구현 기본제공
  setTimeout(function () {
    e.target.classList.remove("line", "color", "pointer");
  }, 2000);
}
// fruit.addEventListener('click',textDeco); 이것만 등록시 동작하기는 하지만 ul 태그 클릭으로 전체 li 태그 효과적용됨
fruit.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    textDeco(e);
  }
});//li 태그에 개별 적용되게 하는 코드 


// for (let item of fruitList) {
//   item.addEventListener("click", textDeco);
// } //개별로  이벤트 추가했을때의 답안

//3번문제 답안
fruitList[3].remove();


//4번문제 답안
const todolist = document.getElementById('to-do-list');

//a 태그 생성 
const aTag = document.createElement('a')
aTag.textContent = "네이버로 바로가기"//텍스트 설정 요소 내용추가
aTag.classList.add('font');// 폰트 효과부여를 위한 class추가
aTag.setAttribute('href','https://www.naver.com') //href 속성 추가를 위한 setAttribute
todolist.innerHTML = '';//이전 문제내기 부분을 없애기 위한 초기화 
todolist.appendChild(aTag); 
// todolist.innerHTML = '<a class="font" href = "https://naver.com">네이버로 바로가기</a>'; //로 내부 요소를 교체해주어도 상관없다 
