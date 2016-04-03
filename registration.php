<?php
include "connection.php";
if(isset($_POST['submit'])) {
      $nickname = $_POST['nickname'];
      $username = $_POST['username'];
      $usersecondname = $_POST['usersecondname'];
      $email = $_POST['email'];
      $password = md5($_POST['password']);
      $sql='INSERT INTO users (nickname, username, usersecondname, email, password) VALUES("'.$nickname.'", "'.$username.'", "'.$usersecondname.'", "'.$email.'", "'.$password.'")'; 
      mysql_query($sql);
      header('Location: reg_success.php');
    }
?>