
function insertcheck() {
	if ( document.joinform.id.value=="" ) {
		alert("아이디를 입력해 주세요.");
		document.joinform.id.focus();
		return;
	}
	if ( document.joinform.password.value=="" ) {
		alert("비밀번호를 입력해 주세요.");
		document.joinform.password.focus();
		return;
	}
	if ( document.joinform.passwordconfirm.value=="" ) {
		alert("비밀번호 확인을 입력해 주세요.");
		document.joinform.passwordconfirm.focus();
		return;
	}
	if ( document.joinform.name.value=="" ) {
		alert("이름을 입력해 주세요.");
		document.joinform.name.focus();
		return;
	}
	if ( document.joinform.address.value=="" ) {
		alert("주소를 입력해 주세요.");
		document.joinform.postcodebutton.focus();
		return;
	}
	if ( document.joinform.phone2.value=="" || document.joinform.phone3.value=="") {
		alert("전화번호를 입력해 주세요.");
		if(document.joinform.phone2.value=="") {
			document.joinform.phone2.focus();
			return;}
		else if(document.joinform.phone3.value=="") {
			document.joinform.phone3.focus();
			return;}
		
	}
	if ( document.joinform.email.value=="" ) {
		alert("이메일을 입력해 주세요.");
		document.joinform.email.focus();
		return;
	}
	
	var fulladdress = document.getElementById("fulladdress");
	var address = document.getElementById("address"), extraaddress  = document.getElementById("extraaddress"), detailaddress = document.getElementById("detailaddress");

	fulladdress.value = address.value + " " + extraaddress.value + " " + detailaddress.value;
	
	var phonenum = document.getElementById("phonenum");
	var phone1 = document.getElementById("phone1"), phone2 = document.getElementById("phone2"), phone3 = document.getElementById("phone3");
	
	phonenum.value = phone1.value + "-" + phone2.value + "-" + phone3.value;
	
	document.joinform.submit();
}

// 아이디 중복체크하는 부분
function idDuplicateCheck() {
	
	var id = document.getElementById("id").value;
	var role = document.getElementById("role").value;

	$.ajax({
		url: './idcheck/',
		type: 'post',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify({'id':id, 'role':role}),
		success: function(response) {
			console.log(response['result'])
			if(response['result']['length']==1) {
				document.getElementById("idmsg").innerHTML = "중복된 아이디가 존재합니다";
				document.getElementById("id").value = "";
			}
			else {
				document.getElementById("idmsg").innerHTML = "사용가능한 아이디입니다";
			}
		},
		error: function(xhr, error) {
			console.log(error)
		}
	});

	// httpRequest = new XMLHttpRequest();
	// httpRequest.onreadystatechange = callback;
	// httpRequest.open("POST", "processjoin.jsp", true);
	// httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// httpRequest.send(param);
}

// function callback() {
	
// 	resultText = idDuplicateCheck()
// 	if(resultText == 0) {
// 		console.log(resultText);
// 		document.getElementById("idmsg").innerHTML = "사용가능한 아이디입니다";
// 	}
// 	else if(resultText == 1){
// 		console.log(resultText);
// 		document.getElementById("idmsg").innerHTML = "중복된 아이디가 존재합니다";
// 		document.getElementById("id").value = "";
// 	}
// }

function passwordEqualCheck() {
	 
	 var password = document.getElementById("password").value;
	 var passwordconfirm = document.getElementById("passwordconfirm").value;
	 
	 if(password != passwordconfirm) {
		 document.getElementById("passwordmsg").innerHTML = "비밀번호가 일치하지 않습니다";
			document.getElementById("passwordconfirm").value = "";
	 }
	 else
		 document.getElementById("passwordmsg").innerHTML = "";
	 
}