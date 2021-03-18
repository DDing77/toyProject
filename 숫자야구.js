var 바디 = document.body;
var 문제 = document.createElement('div');
var 폼 = document.createElement("form");
var 입력창 = document.createElement('input');
var 버튼 = document.createElement('button');
var 결과 = document.createElement('h1');

var 숫자후보
var 숫자배열
function 숫자뽑기(){
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 =[];
    for(var i =0;i<4;i+=1){
        var 뽑은것 = 숫자후보.splice(Math.ceil(Math.random()*숫자후보.length-1),1)[0];
        숫자배열.push(뽑은것);
    }
}
숫자뽑기();
console.log(숫자후보);
console.log(숫자배열);

document.body.append(폼);
폼.append(입력창);
버튼.textContent="입력!";
폼.append(버튼);

var 틀린횟수 =0;
폼.addEventListener('submit',function 콜백함수(event){
    event.preventDefault();
    var 답 = 입력창.value;
    console.log(답);
    if(답 === 숫자배열.join('')){
        결과.textContent="홈런!";
        입력창.value='';
        입력창.focus();
        숫자뽑기()
    }
    else{
        틀린횟수+=1;
        if(틀린횟수>10){
            결과.textContent="10번 넘게 틀려서 실패! 답은" +숫자배열.join(',')+'였습니다.';
            입력창.value='';
            입력창.focus();
            숫자뽑기()
        
        } 
        else{
        var 답배열 = 답.split('');
        var 스트라이크 = 0;
        var 볼 = 0;
        for(var i=0;i<4;i+=1){
            if(Number(답배열[i])===숫자배열[i]){
            스트라이크+=1;
            }
            else if(숫자배열.indexOf(Number(답배열[i]))>-1){
                볼+=1;
            }
        }
        결과.textContent= 스트라이크 + "스트라이크 " + 볼 + "볼";
        입력창.value='';
        입력창.focus();
    }
    } 
});

document.body.append(결과);

        