var comScore = 0; // 컴퓨터 점수 저장하는 변수
var comPercent2 = 0.5; // 컴퓨터 2점슛 성공 확률
var comPercent3 = 0.33; // 컴퓨터 3점슛 성공 확률
var userScore = 0; // 유저 점수 저장하는 변수
var userPercent2 = 0.5; // 유저 2점슛 성공 확률
var userPercent3 = 0.33; // 유저 3점슛 성공 확률
var isComputerTurn = true; // 컴퓨터 턴인지 확인하는 변수
var shotsLeft = 15; // 남은 슛 횟수
var userButtons = document.getElementsByClassName('btn-user'); // 유저 슛 버튼
var computerButtons = document.getElementsByClassName('btn-computer'); // 컴퓨터 슛 버튼



// 컴퓨터 슛 버튼 눌렀을 때
function onComputerShoot(){
    if(!isComputerTurn){
        return;
    }// 컴퓨터 턴이 아니면 여기서 종료

    updateAI();

    var shootType = Math.random() < 0.5 ? 2 : 3; // 2점 슛? 3점 슛?

    if(shootType === 2){ // 2점슛 일 때
        if(Math.random() < comPercent2){
            showText('컴퓨터가 2점슛을 성공했습니다.');
            updateComputerScore(2);
        }else{
            showText('컴퓨터가 2점슛을 실패했습니다.');
        }
    }else{ // 3점슛 일 때
        if(Math.random() < comPercent3){
            showText('컴퓨터가 3점슛을 성공했습니다.');
            updateComputerScore(3);
        }else{
            showText('컴퓨터가 3점슛을 실패했습니다.');
        }
    }
    isComputerTurn = false; // 컴퓨터 턴을 false로 바꿈
    
    disableComputerButtons(true); // 컴퓨터 버튼 비활성화
    disableUserButtons(false); // 유저 버튼 비활성화 풀어줌
}

// 유저 슛 버튼 눌렀을 때
function onUserShoot(shootType){
    if(isComputerTurn){ // 컴퓨터 턴일 때 여기서 종료
        return;
    }
    if(shootType === 2){ // 2점슛 일 때
        if(Math.random() < userPercent2){
            showText('2점슛이 성공했습니다!');
            updateUserScore(2);
        }else{
            showText('2점슛이 실패했습니다.');
        }
    }else{ // 3점슛 일 때
        if(Math.random() < userPercent3){
            showText('3점슛이 성공했습니다!');
            updateUserScore(3);
        }else{
            showText('3점슛이 실패했습니다.');
        }
    }

    isComputerTurn = true; // 컴퓨터 턴으로 바꿔줌
    disableComputerButtons(false); // 컴퓨터 버튼 비활성화 풀어줌
    disableUserButtons(true); // 유저 버튼 비활성화

    shotsLeft--; // 남은 슛 횟수 차감
    var shotsLeftElem = document.getElementById('shots-left'); // 남은 슛 횟수 출력 태그
    shotsLeftElem.innerHTML = shotsLeft; 

    if(shotsLeft === 0){ // 남은 슛 횟수가 0일 때
        if(userScore > comScore){
            showText('승리');
        }else if(userScore < comScore){
            showText('패배');
        }else{
            showText('무승부');
        }

        disableComputerButtons(true); 
        disableUserButtons(true); // 버튼 둘 다 비활성화로 바꿈
    }
}

// 시스템 메시지 출력창 함수
function showText(s){
    var textElem = document.getElementById('text'); // 하단에 시스템 메시지 출력하는 부분
    textElem.innerHTML = s;
}

// 컴퓨터 점수 관리
function updateComputerScore(score){
    comScore += score;
    var comScoreElem = document.getElementById('computer-score');
    comScoreElem.innerHTML = comScore;
}

// 유저 점수 관리
function updateUserScore(score){
    userScore += score;
    var userScoreElem = document.getElementById('user-score');
    userScoreElem.innerHTML = userScore;
}

// 컴퓨터 슛 버튼 활성화 여부 함수
function disableComputerButtons(flag){
    var computerButtons = document.getElementsByClassName('btn-computer');
    for(var i = 0; i < computerButtons.length; i++){
        computerButtons[i].disabled = flag;
    }
}
// 유저 슛 버튼 활성화 여부 함수
function disableUserButtons(flag){
    var userButtons = document.getElementsByClassName('btn-user');
    for (var i = 0; i < userButtons.length; i++){
        userButtons[i].disabled = flag;
    }
}

// 점수 차에 따라 컴퓨터의 슛 성공확률 조작
function updateAI(){
    var diff = userScore - comScore; // 유저와 컴퓨터의 점수 차이를 담은 변수

    if(diff >= 6){ // 유저가 6점 이상 차이로 이기고 있을 때
        comPercent2 = 0.6;
        comPercent3 = 0.38;
    }else if (diff >= 10){ // 유저가 10점 이상 차이로 이기고 있을 때
        comPercent2 = 0.7;
        comPercent3 = 0.43;
    }else if(diff <= -6){ // 유저가 6점 이상 차이로 지고 있을 때
        comPercent2 = 0.4;
        comPercent3 = 0.28;
    }else if(diff <= -10){ // 유저가 10점 이상 차이로 지고 있을 때
        comPercent2 = 0.3;
        comPercent3 = 0.23;
    }
}