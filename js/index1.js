$(function(){
				$('.rm').click(function(){
					$('.rm').css(
					{
						'color':'#FF6700',
						'border-bottom': '3px solid #FF6700'
						}
					)
					$('.dy').css(
					{
						'color':'#000',
						'border-bottom': 'none'
						}
					)
					$('.show-right1').css('display','none')
					$('.rg-left').css('display','block')
				})
				$('.dy').click(function(){
					$('.dy').css(
					{
						'color':'#FF6700',
						'border-bottom': '3px solid #FF6700'
						}
					)
					$('.rm').css(
					{
						'color':'#000',
						'border-bottom': 'none'
						}
					)
					$('.rg-left').css('display','none')
					$('.show-right1').css('display','block')
				})
				$('.t2').click(function(){
					$('.pic-right-div').animate({left:-1200},1000)
				})
				$('.t1').click(function(){
					$('.pic-right-div').animate({left:0},1000)
				})
			})