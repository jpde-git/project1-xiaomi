window.onload = function() {
	$(function() {
		var index = 0;
		var f;
		dingshi();
		$(".box-qiehuan-left").click(function() {
			clearInterval(f);
			if (index == 0) {
				index = $(".box-img").length - 1;
				$(".box-img").css("opacity", "0");
				$(".box-img").eq(index).css("opacity", "1");
				setTimeout(dingshi(), 3000)
				clearfff($(".box-qiehuan-dian-li").eq(index));
			} else {
				index--;
				$(".box-img").css("opacity", "0");
				$(".box-img").eq(index).css("opacity", "1");
				setTimeout(dingshi(), 3000)
				clearfff($(".box-qiehuan-dian-li").eq(index));
			}
		})
		$(".box-qiehuan-right").click(function() {
			clearInterval(f);
			if (index == $(".box-img").length - 1) {
				index = 0;
				$(".box-img").css("opacity", "0");
				$(".box-img").eq(index).css("opacity", "1");
				setTimeout(dingshi(), 3000)
				clearfff($(".box-qiehuan-dian-li").eq(index));
			} else {
				index++;
				$(".box-img").css("opacity", "0");
				$(".box-img").eq(index).css("opacity", "1");
				setTimeout(dingshi(), 3000)
				clearfff($(".box-qiehuan-dian-li").eq(index));
			}
		})

		function dingshi() {
			f = setInterval(function() {
				if (index == $(".box-img").length - 1) {
					index = 0;
					$(".box-img").css("opacity", "0");
					$(".box-img").eq(index).css("opacity", "1");
					clearfff($(".box-qiehuan-dian-li").eq(index));
				} else {
					index++;
					$(".box-img").css("opacity", "0");
					$(".box-img").eq(index).css("opacity", "1");
					clearfff($(".box-qiehuan-dian-li").eq(index));
				}
			}, 7000)
		}

		function clearfff(li) {
			$(".box-qiehuan-dian-li").css("background-color", "#ccc");
			li.css("background-color", "#fff");
		}
		li_click();

		function li_click() {
			li_click_public(0);
			li_click_public(1);
			li_click_public(2);
			li_click_public(3);
			li_click_public(4);
			li_click_public(5);
		}

		function li_click_public(ix) {
			$(".box-qiehuan-dian-li").eq(ix).click(function() {
				clearInterval(f);
				$(".box-qiehuan-dian-li").css("background-color", "#ccc");
				$(".box-qiehuan-dian-li").eq(ix).css("background-color", "#fff");
				index = ix;
				$(".box-img").css("opacity", "0");
				$(".box-img").eq(index).css("opacity", "1");
				setTimeout(dingshi(), 3000)
			});
		}
		$(".header-ul-heng>li:nth-child(2)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})
		$(".header-ul-heng>li:nth-child(4)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/d1.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/d2.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/d3.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/d4.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/d5.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/d6.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})
		$(".header-ul-heng>li:nth-child(6)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})
		$(".header-ul-heng>li:nth-child(8)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/mi10.png"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})
		$(".header-ul-heng>li:nth-child(3)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})
		$(".header-ul-heng>li:nth-child(5)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})
		$(".header-ul-heng>li:nth-child(7)").hover(function() {
			$(".header .header-span-hengs").css({
				"border-top": "1px #e0e0e0 solid",
				"display": "block",
				"animation": "xiala 0.3s forwards ease-in-out"
			})
			$(".header-span-hengs").html(
				'<div class="container"><ul class="header-ul-hengs"><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li><li><div></div></li><li><a href="#"><img src="image/redmi.jpg"><p>小米10 青春版 5G</p><p>2099元起</p></a></li></ul></div>'
			);

		}, function() {})

		$(".header-ul-heng>li:nth-child(1)").hover(function() {
			$(".header .header-span-hengs").css({
				"animation": "xialas 0.3s forwards ease-in-out",
				"border": "0"
			})
			setTimeout(function() {
				$(".header .header-span-hengs").css("display", "none")
			}, 300)
		}, function() {})
		$(".header-ul-heng>li:nth-child(9)").hover(function() {
			$(".header .header-span-hengs").css({
				"animation": "xialas 0.3s forwards ease-in-out",
				"border": "0"
			})
			setTimeout(function() {
				$(".header .header-span-hengs").css("display", "none")
			}, 300)
		}, function() {})
		$(".header-ul-heng>li:nth-child(10)").hover(function() {
			$(".header .header-span-hengs").css({
				"animation": "xialas 0.3s forwards ease-in-out",
				"border": "0"
			})
			setTimeout(function() {
				$(".header .header-span-hengs").css("display", "none")
			}, 300)
		}, function() {})

		$(".header-list").hover(function() {}, function() {
			$(".header .header-span-hengs").css({
				"animation": "xialas 0.3s forwards ease-in-out",
				"border": "0"
			})
			setTimeout(function() {
				$(".header .header-span-hengs").css("display", "none")
			}, 300)
		})
	})
}
