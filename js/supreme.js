$(function(){
	var index = 0;
	var f;
	dingshiqi();
	function dingshiqi(){
		 f=setInterval(function(){
			if(index==$('.pic-img').length-1){
				index=0;
				$('.pic-img').css('opacity','0');
				$('.pic-img').eq(index).css('opacity','1');
				$('.booton').css('background','#ccc');
				$('.booton').eq(index).css('background','#eee');
			}else{
				index++;
				$('.pic-img').css('opacity','0');
				$('.pic-img').eq(index).css('opacity','1');
				$('.booton').css('background','#ccc');
				$('.booton').eq(index).css('background','#eee');
			}
		},5000)
	}
	$('.box-left').click(function(){
		clearInterval(f);
		if(index==0){
			index=$('.pic-img').length-1;
			$('.pic-img').css('opacity','0');
			$('.pic-img').eq(index).css('opacity','1');
			$('.booton').css('background','#ccc');
			$('.booton').eq(index).css('background','#eee');
			dingshiqi();
		}else{
			index--;
			$('.pic-img').css('opacity','0');
			$('.pic-img').eq(index).css('opacity','1');
			$('.booton').css('background','#ccc');
			$('.booton').eq(index).css('background','#eee');
			dingshiqi();
		}
	})
	$('.box-right').click(function(){
		clearInterval(f);
		if(index==$('.pic-img').length-1){
			index=0;
			$('.pic-img').css('opacity','0');
			$('.pic-img').eq(index).css('opacity','1');
			$('.booton').css('background','#ccc');
			$('.booton').eq(index).css('background','#eee');
			dingshiqi();
		}else{
			index++;
			$('.pic-img').css('opacity','0');
			$('.pic-img').eq(index).css('opacity','1');
			$('.booton').css('background','#ccc');
			$('.booton').eq(index).css('background','#eee');
			dingshiqi();
		}
	})
	$('.booton').click(function(){
		clearInterval(f);
		var indexx = $(this).index();
		// console.log(indexx);
		index = indexx;
		$('.pic-img').css('opacity','0');
		$('.pic-img').eq(index).css('opacity','1');
		$('.booton').css('background','#ccc');
		$('.booton').eq(index).css('background','#eee');
		dingshiqi();
	})
	
	
	
	$('.color1').click(function(){
		// var inde = $(this).index();
		// console.log(inde)
		// index = inde;
		$('.color1').css('background','#FF6700')
		$('.color').css('background','#ccc')
		$('.color2').css('background','#ccc')
	})
	
	
	$('.circular').click(function(){
		$('.circular').text('√')
		$('.list-a').css('color','#FF6700')
		$('.anniu').prop('checked',true)
	})
	
	$('.anniu').click(function(){
		$('.circular').text('')
		$('.list-a').css('color','#000')
		$('.anniu').prop('checked',false)
	})
})