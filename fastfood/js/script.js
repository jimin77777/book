var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.responseText);
    }
};

xhr.open('GET', 'http://www.example.com/some-api');
xhr.send();