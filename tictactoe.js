let 바디 = document.body;
let 테이블 = document.createElement('table');
let 줄들 = [];
let 칸들 = [];
let 턴 = 'X';

let 비동기콜백 = function(event){
    console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode);

    let 몇줄 = 줄들.indexOf(event.target.parentNode);
    console.log('몇줄',몇줄);
    let 몇칸 = 칸들[몇줄].indexOf(event.target);
    console.log('몇칸',몇칸);

    if(칸들[몇줄][몇칸].textContent != ''){
        console.log('빈칸아닙니다');
    } else{
        console.log('빈칸입니다');
        칸들[몇줄][몇칸].textContent=턴;
        if(턴==='X'){
        턴 ='0';
        } else{
            턴='X';
        }
    }
};

for(let i =1;i<=3;i++){
    let 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for(let j=1;j<=3;j++){
        let 칸 = document.createElement('td');
        칸.addEventListener('click',비동기콜백);
        칸들[i-1].push(칸);
        줄.appendChild(칸);
    }   
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log('줄들',줄들,'칸들',칸들);
