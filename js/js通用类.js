//获取特定元素class节点。
function elementByClassName(nodes, classStr) {
	var oDivAll = nodes.getElementsByTagName('*');
	var res = [];
	for (var i = 0; i < oDivAll.length; i++) {
		if (oDivAll[i].className == classStr) {
			res.push(oDivAll[i]);
		}
	}
	return res;
}


//￥封装
function $(str) {
	switch (str.charAt(0)) {
		case '#':
			return document.getElementById(str.slice(1));
			break;
		case '.':
			return elementByClassName(document, str.slice(1));
			break;
		case '[':
			return document.elementByClassName(str.slice(6, str.length - 1));
			break;
		default:
			return document.getElementsByTagName(str);
	}
}

// 写一个方法，求两个数之间所有数字的和；
function fn(a, b) {
	var sum = 0;
	for (var i = a + 1; i < b; i++) {
		sum += i;
	}
	return sum;
}


// 实现一个数组去重的方法
var arr = [1, 1, 1, 2, 2, 2, 3];

function sum1(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j, 1);
				j--;
			}
		}
	}
	return arr;
}



// 写一个方法可以得到整数数组里面数据的和
function fn(arr) {
			var sum = 0;
			for (var i = 0; i < arr.length; i++) {
				sum += arr[i];
			}
			return sum;
		}