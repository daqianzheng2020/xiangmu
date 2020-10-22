$('#btn2').click(function(){
    console.log($('#iphone').val())
    console.log($('#call').val());

$.ajax({
 url:"../interface/login.php",
 type:'post',
 data:{ username:$('#iphone').val(),password:$('#call').val()},
 success:function(res){
     console.log(res);
     var i=JSON.parse(res);
     console.log('成功的回调')
     if(i.code==1){
        alert("恭喜"+$('#iphone')+"登入成功")

    }else{
        alert('登录失败')
    }
 },
 error:function(res){
     console.log(res);
     console.log('失败的回调');
 }  

})   
}) 