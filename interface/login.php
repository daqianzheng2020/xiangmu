<?php
header('content-type:text/html;charsrt=utf-8;');
$uname= $_POST['username'];
$upass= $_POST['password'];
$conn=mysqli_connect('localhost','root','root','login');
$sql="SELECT * FROM `text` WHERE `username`='$uname' AND `password`='$upass'";
$res=mysqli_query($conn,$sql);
$row =mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
    $arr=array('code'=>1);
    $json=json_encode($arr);
    setcookie('uname',$uname);
    echo $json;    
}else{
    $arr=array('code'=>0);
    $json=json_encode($arr);
    echo $json;
}
?>