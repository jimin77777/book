var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

function onButtonClick(userInput){
    console.log(userInput);
    var comInput;
    var rnd = Math.random();
    
    if(rnd < 0.33){
        comInput = SCISSORS;
    }else if(rnd < 0.66){
        comInput = ROCK;
    }else{
        comInput = PAPER;
    }
    var result = '컴퓨터: '+ comInput;
    if(userInput === SCISSORS){
        if(comInput === SCISSORS){
            result += '무승부';
        }else if (comInput === ROCK){
            result += '패배';
        }else{
            result += '승리';
        }
    }else if(userInput === ROCK){
        if(comInput === SCISSORS){
            result += '승리';
        }else if (comInput === ROCK){
            result += '무승부';
        }else{
            result += '패배';
        }
    }else{
        if(comInput === SCISSORS){
            result += '패배';
        }else if (comInput === ROCK){
            result += '승리';
        }else{
            result += '무승부';
        }
    }
    alert(result);
}