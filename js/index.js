$('document').ready(function(){



$('#btnInput').click(function(){
    var userName = $('#userName').val();
    var password = $('#password').val();
    

if(userName ==="" && password===""){

//$('#userName').next().css('opacity','1');
//$('#password').next().css('opacity','1');
//    or   If we have no another input!   
$('input').next().css('opacity','1');   //   

} else if(userName==="" && password!==""){
    $('#userName').next().css('opacity','1');
    $('#password').next().css('opacity','0');
}
else if(userName!=="" && password===""){
    $('#password').next().css('opacity','1');
    $('#userName').next().css('opacity','0');
}
else {$('#userName').next().css('opacity','0');
$('#password').next().css('opacity','0');}
});





});
