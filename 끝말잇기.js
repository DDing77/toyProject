var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '서띵교';
document.body.append(단어);
var 입력창 = document.createElement('input');
document.body.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
document.body.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function 콜백함수 (){
    if(단어.textContent[단어.textContent.length-1]===입력창.value[0]){
        결과창.textContent='딩동댕!';
        단어.textContent = 입력창.value;
        입력창.value='';
    }else{
        결과창.textContent='땡!';
        입력창.value='';
    }
});
/*while(true){
    var 첫단어 = prompt(' 첫 단어를 입력하세요');
    while(true){
        var answer = prompt(첫단어);
        if(첫단어[첫단어.length-1] === answer[0]){
            첫단어 = answer;
            alert("정답!");
        }
        else
            alert("땡 다시입력하세요");
    }
}*/