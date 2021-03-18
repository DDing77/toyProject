var 바디 = document.body;
var 단어 = document.createElement('div');
var 입력창 = document.createElement('input');
var 버튼 = document.createElement('button');
var 결과창 = document.createElement('div');
var 폼 = document.createElement('form');

단어.textContent = '서띵교';
document.body.append(단어);

document.body.append(폼);
폼.append(입력창);

폼.append(버튼);
버튼.textContent="입력!";

document.body.append(결과창);

폼.addEventListener('submit',function 콜백함수 (이벤트) {
    이벤트.preventDefault();
    if(단어.textContent[단어.textContent.length-1]===입력창.value[0]){
        단어.textContent=입력창.value;
        결과창.textContent = "딩동댕!";
        입력창.value="";
        입력창.focus();
    }else{
        결과창.textContent = "땡!";
        입력창.value="";
        입력창.focus();
    }
})