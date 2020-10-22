$("#xiala").mouseenter(
    function(){
        $('.ul').slideDown();
    }
)
$("#xiala").mouseleave(
    function(){
        $('.ul').slideUp();
    }
)
$("#xiala1").mouseenter(
    function(){
        $('.ul1').slideDown();
    }
)
$("#xiala1").mouseleave(
    function(){
        $('.ul1').slideUp();
    }
)
$(window).scroll(function(){
    if($(window).scrollTop()>=300){
        $('.left-nav').fadeIn()
    }else{
        $('.left-nav').fadeOut()
    }
})
$(".z").mouseenter(
    function(){
        $('.xiala3"').slideDown();
    }
)
$(".z").mouseleave(
    function(){
        $('.xiala3"').slideUp();
    }
)
$(document).ready(function() {
    /*
     *  参数详解:
     * upTime          上移的时间
     * downTime        下落的时间
     * beatHeight      上移高度
     * isAuth          是否自动
     * isRotate        是否旋转
    */
    $('.dong').beatText({isAuth:false,isRotate:false});

    // $('p#rotateText').beatText({isAuth:false,isRotate:true});
    // $('p#autoText').beatText({isAuth:true,beatHeight:"3em",isRotate:false});
    // $('p#roloadText').beatText({isAuth:true,beatHeight:"1em",isRotate:false,upTime:100,downTime:100});
    // $('p#autoRotateText').beatText({isAuth:true,upTime:700,downTime:700,beatHeight:"3em",isRotate:true});
     
    });
function lastTime(){
    var times =new Date();
    var lasts =new Date("2020-11-11 00:00:00");
    times = times.getTime();
    lasts = lasts.getTime();
    var over = lasts-times;
    over = parseInt(over/1000);
  var day=Math.floor(over/(24*60*60));
  var afterHours =over -day*24*60*60;
  var hours =Math.floor(afterHours/3600);
  var afterMinutes= afterHours-hours*3600;
  var minutes =Math.floor(afterMinutes/60);
  var seconds =afterMinutes-minutes*60;
  var arr=[day,hours,minutes,seconds];
  var span= document.querySelectorAll("i");
  for(var i =0;i< span.length;i++){
      span[i].innerHTML= arr[i];
  }
}
lastTime()
dates = setInterval(() => {
    lastTime()
}, 1000);
