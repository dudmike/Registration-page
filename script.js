
button.style.width = password.offsetWidth + 'px'; // Установка размеров кнопки

//Функция включения\выключения кнопки
function checkData(data) {
	if(nicksign.firstChild.data == 'V' &&
		usersign.firstChild.data == 'V' &&
		userssign.firstChild.data == 'V' &&
		emailsign.firstChild.data == 'V' &&
		passwordsign.firstChild.data == 'V') {
		button.removeAttribute('disabled');
	} else {
		button.setAttribute('disabled', '');
	}
}

//Функция вывода ответа скрипта
function outputResult(signId, textId, error) {	
	if(!error) {
		textId.style.visibility='hidden';
		signId.style.visibility= 'visible';
		signId.style.color="green";
		signId.innerHTML = 'V';
	} else {
		signId.style.visibility='visible';
		signId.style.color="red";
		signId.innerHTML = '!';
		textId.innerHTML = error;
		textId.style.visibility='visible';
	}
}
		  
		  
$(document).ready (function() {
	//Обработка поля Никнейм
	$("#nickname").bind("input", function() {
		$.ajax ({
			url: "checking.php",
			type: "POST",
			data: ({nickname: $("#nickname").val()}),
			dataType: "html",
			success: function (data) {
				if(data.indexOf('exists_in_nn') >= 0) {
					outputResult(nicksign, nicktext, 'Пользователь с таким никнеймом уже существует');

				//Если ошибок нет 
				} else if (data.indexOf('checked_in_nn') >= 0) {
					outputResult(nicksign, nicktext);
							  
				} else if(data.indexOf('wrongDial_in_nn') >= 0) {
					outputResult(nicksign, nicktext, 'Логин должен содержать только буквы латинского алфавита и цифры');

				}

					checkData(data);


			}
		});
	});
			
	//Обработка поля Имя
	$("#username").bind("input", function() {
		$.ajax ({
			url: "checking.php",  
			type: "POST",  
			data: ({username: $("#username").val()}),  
			dataType: "html",  
			success: function (data) {  	
				if(data.indexOf('wrongDial_in_un') >= 0) {
					outputResult(usersign, usertext, 'Допустимы только русские буквы');

				//Если ошибок нет  
				} else if(data.indexOf('checked_in_un') >= 0) {
					outputResult(usersign, usertext);
				}

					checkData(data);


			}
		});
	});

	//Обработка поля Фамилия
	$("#usersecondname").bind("input", function() {
		$.ajax ({
			url: "checking.php",
			type: "POST",
			data: ({usersecondname: $("#usersecondname").val()}),
			dataType: "html",
			success: function (data) {
				if(data.indexOf('wrongDial_in_usn') >= 0) {
					outputResult(userssign, userstext, 'Допустимы только русские буквы');

				//Если ошибок нет   
				} else if(data.indexOf('checked_in_usn') >= 0) {
					outputResult(usersign, usertext);
								
				}

					checkData(data);


			}
		});
	});

	//Обработка поля Электронная почта
	$("#email").bind("input", function() {
		$.ajax ({
			url: "checking.php",
			type: "POST",
			data: ({email: $("#email").val()}),
			dataType: "html",
			success: function (data) {
				if(data.indexOf('exists_in_em') >= 0) {
					outputResult(emailsign, emailtext, 'На этот ящик уже зарегистрирован аккаунт');

				//Если ошибок нет 
				} else if (data.indexOf('checked_in_em') >= 0) {
					outputResult(emailsign, emailtext);
														  
				} else if(data.indexOf('wrongDial_in_em') >= 0) {
					outputResult(emailsign, emailtext, 'Неверный адрес почты');				  
				}

					checkData(data);


			}
		});
	});

	//Обработка поля Пароль
	$("#password").bind("input", function() {
		$.ajax ({
			url: "checking.php",
			type: "POST",
			data: ({password: $("#password").val()}),
			dataType: "html",
			success: function (data) {
				if(data.indexOf('wrongDial_in_pw') >= 0) {
					outputResult(passwordsign, passwordtext, 'Придумайте пароль длиннее 5 символов');

				//Если ошибок нет    
				} else if(data.indexOf('checked_in_pw') >= 0) {
					outputResult(passwordsign, passwordtext);
							   
				}

					checkData(data);


			}
		});
	});

});