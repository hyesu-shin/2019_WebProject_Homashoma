function logincheck() {
	if ( document.loginform.id.value=="" ) {
		alert("아이디를 입력해 주세요.");
		document.loginform.id.focus();
		return;
	}
	if ( document.loginform.password.value=="" ) {
		alert("비밀번호를 입력해 주세요.");
		document.loginform.password.focus();
		return;
	}
	 
	document.loginform.submit();
}

// 엔터키 눌렀을 때
function onEnterSubmit() {
	
	if(window.event.keyCode == 13) {
		if ( document.loginform.id.value=="" ) {
			alert("아이디를 입력해 주세요.");
			document.loginform.id.focus();
			return;
		}
		if ( document.loginform.password.value=="" ) {
			alert("비밀번호를 입력해 주세요.");
			document.loginform.password.focus();
			return;
		}
		
		document.loginform.submit();
	}
	
}