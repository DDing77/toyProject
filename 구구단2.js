var 문제 = document.createElement('div');
var 폼 =  document.createElement('form');
var 입력창 = document.createElement('input');
var 버튼 = document.createElement('button');
var 결과창 = document.createElement('div');

var 숫자1 = Math.floor(Math.random()*9+1);
var 숫자2 = Math.floor(Math.random()*9+1);
var 처음숫자 = 숫자1*숫자2;

문제.textContent = "문제 : "+숫자1+" * "+숫자2+" = ?";
document.body.append(문제);

document.body.append(폼);
폼.append(입력창);
폼.append(버튼);
버튼.textContent="입력!"

document.body.append(결과창);

폼.addEventListener('submit',function 콜백함수(event){
    event.preventDefault();
    if(처음숫자===Number(입력창.value)){
        결과창.textContent="딩동댕!"
        입력창.value="";
        입력창.focus();
        숫자1 = Math.floor(Math.random()*9+1);
        숫자2 = Math.floor(Math.random()*9+1);
        처음숫자 = 숫자1*숫자2;
        문제.textContent = "문제 : "+숫자1+" * "+숫자2+" = ?";
    } else{
        결과창.textContent="땡!";
        입력창.value="";
        입력창.focus();
    }
})
    

