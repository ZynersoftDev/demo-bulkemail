<?php
header("Content-type: text/html; charset=utf-8");
//Print before top color bar
include "functions.php";
//可操作,記錄每個郵件的id 標題 內容
$time=date('Y-m-d H:I',time());
//獲取替換字符串和參數
if($_POST['usetemplate']==1){
	
	$client_name= "Testing User";
	$accountno= "123-456789-001";
	$amount= "88,888";
	$datetime = "31-07-2018 00:00:00";
	$Department= "Customer Services";
	$hotline="9876-5432";
	
	$price=array($client_name, $accountno,$amount,$datetime,$Department,$hotline);
	$parameter=array('(client_name)', '(accountno)','(amount)','(datetime)','(Department)','(hotline)');
	$file_path='template/account_notification.txt';
	//獲取模板內容及處理替換字符串
	$title ='測試郵件'.$time;
	$str = file_get_contents($file_path);
	$str = str_replace("\r\n","<br/>",$str);
	$str_res=@str_replace($parameter, $price, $str);
}else{
	$title =$_POST['title'];
	$str_res = str_replace("\r\n","<br/>",$_POST['contect']);
}
$id=$_POST['username'];
//var_dump($id,$title,$str_res);
$flag = sendMail($id,$title,$str_res);
if($flag){
    $mail_str= "发送邮件成功！";
}else{
    $mail_str= "发送邮件失败！";
}
$str =json_encode(array('state'=>$flag,'mes'=>$time.':'.$mail_str));
echo  $str;
exit;
?>