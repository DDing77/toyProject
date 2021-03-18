let 바디 = document.body;
let title = document.createElement('h3');
let 폼 = document.createElement('form');
let 입력창 = document.createElement('input');
let 버튼 = document.createElement('button');
let 결과창 = document.createElement('h1');
let 기회횟수 = document.createElement('h2');

// 랜덤으로 1~9 숫자를 생성하는 함수
let originNum
let selectNum
let 틀린횟수=0;

function genNum(){
    originNum = [1,2,3,4,5,6,7,8,9];
    selectNum = [];
    for(let i =0;i<4;i++){
    let selected = originNum.splice(Math.floor(Math.random()*9-i),1)[0];
    selectNum.push(selected);
    };
};

title.textContent="숫자야구 게임";
document.body.append(title);

document.body.append(폼);
폼.append(입력창);
폼.append(버튼);
버튼.textContent="입력!";
document.body.append(기회횟수);
document.body.append(결과창);

genNum();
console.log(selectNum);
폼.addEventListener('submit',function 콜백함수(event){
    let 남은횟수 = 10-틀린횟수;
    event.preventDefault();
    let answer = 입력창.value;
    console.log(answer);
    if(answer===selectNum.join('')){
        결과창.textContent='홈런!';
        틀린횟수=0;
        입력창.value='';
        입력창.focus();
        genNum();   
    }
    else{
        틀린횟수++;
        if(틀린횟수>=10){
        결과창.textContent="10번 틀렸습니다. 정답은 " + selectNum.join('')+'였습니다.'+ ' 문제를 초기화 합니다.';
        genNum();
        틀린횟수=0;
        입력창.value='';
        입력창.focus();
        }
        else{
            let strike=0;
            let ball=0;
            let answerArray = answer.split('');
            console.log(answerArray);
            for(let i=0;i<4;i++){
                if(Number(answerArray[i])===selectNum[i]){
                    strike++;
                }
                else if(selectNum.indexOf(Number(answerArray[i]))>-1){
                    ball++;
                }
            }
            결과창.textContent= strike+" 스트라이크 "+ ball + " 볼";
            입력창.value='';
            입력창.focus();
        }  
    }
    기회횟수.textContent=남은횟수+'번';
});