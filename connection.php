<?php
$connect=mysql_connect('localhost', 'root', '');
if($connect) {
	mysql_select_db('data', $connect);
} 
?>