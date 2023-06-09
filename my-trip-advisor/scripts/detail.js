var map;
$(function(){
    var id = parseId(window.location.search);
    
    getDetail(id);

    // showMap();

});

function getDetail(id){
    var url = 'https://javascript-basic.appspot.com/locationDetail';

    $.getJSON(url, {
        id: id
    },function(r){
        $('.detail-header-name').html(r.name);
        $('.detail-header-city-name').html(r.cityName);
        $('.detail-desc-text').html(r.desc);
        
        var $gallery = $('#thumb');
        var images = r.subImageList;
        
        for(var i = 0; i < images.length; i++){
            var $image = $('<li><a href="javascript:;"><img src="'+ images[i] +'"/></a></li>');
            $gallery.append($image);
        }
        $('#main').append('<img src="'+ images[0] +'"/>');
        $("#thumb li").click(function(){
            $("#main img").attr("src", $(this).find('img').attr("src"));
            return false;
        });
        $('.btn-register').click(function(){
            var myTrips = Cookies.getJSON('MYTRIPS');
            
            // 존재하지 않을 경우 빈 배열로 초기화
            if(!myTrips){
                myTrips = [];
            }
        
            // 여행지를 myTrips에 추가
            myTrips.push({
                id: id,
                name: r.name,
                cityName: r.cityName,
                x: r.position.x,
                y: r.position.y,
            });
            Cookies.set('MYTRIPS', myTrips);
        
            alert('여행지가 등록되었습니다!');
        });
    });
}
function parseId(str){ 
    var s = str.substring(1); 
    var args = s.split('&'); 
    for (var i = 0; i < args.length; i++){
        var arg = args[i];
        var tokens = arg.split('=');

        if(tokens[0] === 'id'){
            return tokens[1];
        } 
    }
    return null;
};

// 지도api
// function showMap(){
//     map = new google.maps.Map(document.getElementById('map'),{
//         zoom:12,
//         center:{
//             lat:33.3617,
//             lng:126.5292
//         }
//     });
// }
