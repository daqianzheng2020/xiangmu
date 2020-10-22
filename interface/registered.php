<?php
header('content-type:text/html;charsrt=utf-8;');
$uname =$_POST['username'];
$upass =$_POST['password'];
$conn =mysqli_connect('localhost','root','root','login');
$sql ="INSERT INTO `text` VALUES (null,'$uname','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn);
if($res){
    $arr=array('code'=>1);
    $json=json_encode($arr);
    echo $json;
}
else{
    $arr=array('code'=>0);
    $json=json_encode($arr);
    echo $json;
}
?>
