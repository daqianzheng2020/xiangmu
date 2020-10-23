$('#btn2').click(function(){
    console.log($('#iphone1').val());
    console.log($('#call1').val());

$.ajax({
 url:"../interface/login.php",
 type:'post',
 data:{ username:$('#iphone1').val(),password:$('#call1').val()},
 success:function(res){
     console.log(res);
     var i = JSON.parse(res);
     console.log(i.code);
     console.log('成功的回调');
     if(i.code==1){
        alert("恭喜你登入成功")
location.href='../html/ju.html'
    }else{
        alert('登录失败,用户名或者密码错误')
    }
 },
 error:function(res){
     console.log(res);
     console.log('失败的回调');
 }  

})   
}) 