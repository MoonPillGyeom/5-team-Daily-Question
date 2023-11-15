//1번문제 답안작성 
const date = document.querySelector('#title');
date.textContent = "2023-11-08 문제";

//2번문제 답안작성
const fruit = document.querySelector("#fruit");
const fruitList = fruit.children;
//필요 요소 생성 내용 추가에 필요한 내용 작성해주세요
const Orange = document.createElement('li');
const Grape = document.createElement('li');
Orange.textContent = '천혜향';
Grape.textContent = '샤인머스켓';
fruit.prepend(Orange);
fruitList[1].after(Grape);

//3번문제 답안
//특정 요소 삭제에 관한 질문입니다.
fruitList[3].remove();

//4번문제 답안
function textDeco(e) {
  //함수를 작성해주세요
  if (e.target.tagName === "LI") {
    e.target.classList.add("line", "color", "pointer");

    //setTimeout은 2초가 지나면 클래스를 삭제하여 css효과도 같이 사라지게 구현 기본제공
    setTimeout(function () {
      e.target.classList.remove("line", "color", "pointer");
    }, 2000);
  }
}
fruit.addEventListener("click", textDeco);

//5번문제 답안
const todolist = document.getElementById('to-do-list');
//내용 변경 css font 효과 속성 부여 추가 등의 일련의 과정을 작성해주세요
todolist.innerHTML = '<a>네이버 바로가기</a>';
todolist.firstElementChild.classList.add('font');
todolist.firstElementChild.setAttribute('href', 'https://www.naver.com/');

