$(function() {
	var userName = '17176486806';
	var password = 'abc';
	$('#login').click(function() {
		if($('#in').val() == userName && $('#in1').val() == password) {
			$('#err').html('登陆成功,两秒之后跳转到首页');
			$('#err').css('color','yellowGreen');
			setTimeout(function() {
				location.assign('./index.html');
			},2000)
		}else{
			$('#err').html('账号或密码错误');
			$('#err').css('color','red');
		}
	})
});