var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

var userInput = prompt('가위, 바위, 보!');

if(userInput !== '가위' && userInput !== '바위' && userInput !== '보'){
    alert("가위, 바위, 보 중 하나를 입력해야 합니다.");
}else{
    var comInput;

    // Math.random()은 0부터 1 사이의 임의의 값을 리턴함
    var rnd = Math.random();
    
    if (rnd < 0.33){
        comInput=SCISSORS;
        console.log(rnd);
    }else if(rnd < 0.66){
        comInput = ROCK;
        console.log(rnd)
    }else{
        comInput = PAPER;
        console.log(rnd);
    }
    /*
    if(userInput === SCISSORS){
        if(comInput === SCISSORS){
            alert('컴퓨터: ' + comInput + '무승부');
        }else if (comInput === ROCK){
            alert('컴퓨터: ' + comInput + '패배');
        }else{
            alert('컴퓨터: ' + comInput + '승리');
        }
    }else if(userInput === ROCK){
        if(comInput === SCISSORS){
            alert('컴퓨터: ' + comInput + '승리');
        }else if (comInput === ROCK){
            alert('컴퓨터: ' + comInput + '무승부');
        }else{
            alert('컴퓨터: ' + comInput + '패배');
        }
    }else{
        if(comInput === SCISSORS){
            alert('컴퓨터: ' + comInput + '패배');
        }else if (comInput === ROCK){
            alert('컴퓨터: ' + comInput + '승리');
        }else{
            alert('컴퓨터: ' + comInput + '무승부');
        }
    }
    */

    switch(userInput){
        case SCISSORS:
            switch(comInput){
                case SCISSORS:
                    alert('컴퓨터: ' + comInput + '무승부');
                    break;
                case ROCK:
                    alert('컴퓨터: ' + comInput + '패배');
                    break;
                default:
                    alert('컴퓨터: ' + comInput + '승리');
                    break;
            }
            break;
        case ROCK:
            switch(comInput){
                case SCISSORS:
                    alert('컴퓨터: ' + comInput + '승리');
                    break;
                case ROCK:
                    alert('컴퓨터: ' + comInput + '무승부');
                    break;
                default:
                    alert('컴퓨터: ' + comInput + '패배');
                    break;
            }
            break;
        default:
            switch(comInput){
                case SCISSORS:
                    alert('컴퓨터: ' + comInput + '패배');
                    break;
                case ROCK:
                    alert('컴퓨터: ' + comInput + '승리');
                    break;
                default:
                    alert('컴퓨터: ' + comInput + '무승부');
                    break;
            }
            break;
    }

}
