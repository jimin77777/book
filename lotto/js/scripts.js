var num1, num2, num3, num4, num5, num6;

var list = [];
for(var i = 1; i <= 45; i++){
    list.push(i);
}
var result = [];

for(var i = 0; i < 6; i++){
    var index = Math.floor(Math.random()* list.length);
    var num = list[index];
    list.splice(index, 1);
    result.push(num);
}
result.sort(function(a, b){
    return a - b;
});
for(var i = 0; i < result.length; i++){
    document.write('<span class="ball">'+ result[i] +'</span>')
}