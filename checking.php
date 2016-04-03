<?php

    include "connection.php";
    
    #Проверка поля Никнейм на ввод
    if (mb_ereg('^[a-zA-Z0-9]+$', $_POST['nickname']) && mb_ereg('^[^0-9]+', $_POST['nickname']) ) {
      
       #Проверка поля Никнейм на существование в базе данных
       $query = mysql_query("SELECT * FROM users WHERE nickname='".$_POST['nickname']."'");
       
       if(mysql_num_rows($query) > 0) {
        echo "exists_in_nn";
       } else {
        echo "checked_in_nn";
       }
    } else {
      echo "wrongDial_in_nn";
    }

    #Проверка поля Имя
    if (!mb_ereg('^[а-яА-ЯёЁ]+$', $_POST['username'])) {
      echo "wrongDial_in_un";
    } else {
      echo "checked_in_un";
    } 

    #Проверка поля Фамилия
    if (!mb_ereg('^[а-яА-ЯёЁ]+$', $_POST['usersecondname'])) {
      echo "wrongDial_in_usn";
    } else {
      echo "checked_in_usn";
    } 
 

    #Проверка поля Электронная почта на ввод
    if (mb_eregi("^[a-z0-9_.-]+@([a-z0-9-]+\.)+[a-z]{2,6}$", $_POST['email'])) {
      
      #Проверка поля Электронная почта на существование в базе данных
       $equery = mysql_query("SELECT * FROM users WHERE email='".$_POST['email']."'");
       
       if(mysql_num_rows($equery) > 0) {
        echo "exists_in_em";
       } else {
        echo "checked_in_em";
       }
    } else {
      echo "wrongDial_in_em";
    }

    #Проверка поля Пароль
    if(strlen($_POST['password']) < 5) {
      echo "wrongDial_in_pw";
    } else {
      echo "checked_in_pw";
    }  
?>