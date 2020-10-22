$('#btn2').click(function(){
    console.log($('#input1').val())
    console.log($('#input2').val())
    $.ajax({
        url:"../interface/registered.php",
        type:'post',
        data:{ username:$('#input1').val(),password:$('#input2').val()},
        success:function(res){
            console.log(res);
            var i =JSON.parse(res);
            console.log(i.code);
            console.log("成功的回调")
            if(i.code == 1){
                alert('恭喜你注册成功,请登入') 
                location.href="../html/login.html"   
            }else{
                alert('注册失败')
            }
    
        },
        error:function(res){
            console.log(res);
            console.log('失败的回调')
        },
      
    })
})
