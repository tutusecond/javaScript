//选择
function choose(a) {
	for(i = 0;i<a.length-1;i++)
	{
	  for(j = i+1;j=a.length;j++)
	  {
		  if(a[i]<a[j])
		  {
			  var tmp = a[i];
			  a[i] = a[j];
			  a[j] = tmp;
		  }
	  }
	}
}
//冒泡
function choose(a) {
	for(i = 0;i<a.length-1;i++)
	{
	  for(j = 0;j=a.length-i-1;j++)
	  {
		  if(a[j]<a[j+1])
		  {
			  var tmp = a[j];
			  a[j] = a[j+1];
			  a[j+1] = tmp;
		  }
	  }
	}
}
//快速获得id节点
function getid(id){
	return document.getElementById(id)
}

//添加带有文本内容的属性节点
function createElementwithTxt(tagname,txt){
	var node = document.createElement(tagname)
	var Otext = document.createTextNode(txt)
	node.appendChild(Otext)
	return node
	
}


//删除空白节点(新创一个数组放不是空白节点)
function removeSpacecode(nodes){
   let result = []//用来存放不是空白节点的元素
   for(let i =0;i<nodes.length;i++){
	   if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))
	   {
		   continue
	   }
	   result.push(nodes[i])
   }
   return result
}


//在原有的属性上删除空白节点
function removeSpacecode2(parent){
   var nodes = parent.childNodes;
   for(var i=nodes.length-1;i>=0;i--){
	   if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))
	   {
			parent.removeChild(nodes[i])
	   }
	   
   }
   
}
//往后插入节点
 function insertafter(newNode,oldNode){
   //判断oldnode是不是最后一个
   var parent = oldNode.parentNode
   if(oldnode == parent.lastChild){
	   parent.appendChild(newNode)
   }else{
		parent.insertBefore(newNode,oldNode.nextSibling)
   }
  
}
//解析search
function getvalue(search,key){
   var start = search.indexOf(key)
   if (start == -1){
	   return		//indexOf等于-1就相当于没找到
   }else{
	   var end = search.indexOf("&",start)
	   if(end == -1){
		   end = search.length
	   }
	  
   }
   var str = search.substring(start,end)
   str = str.split("=")
   return str[1]
}

//生成验证码数字和字母
 function TestCode(n){
   var arr = []
   for(var i =0;i<n-1;i++){
	   var num =parseInt(Math.random()*123)
	   if(num >= 0 && num <=9){
					   arr.push(num);
	   }else if(num >=65  && num<=90 || num>=97 && num<=122){
					   arr.push(String.fromCharCode(num));
	   }else{
					   i--;
	   }
   }
   return arr.join("")
}

//生成数组验证码
 function numTestCode(n){
   var arr = []
   for(var i =0;i<n;i++){
	   arr.push(parseInt(Math.random()*10))
   }
   return arr.join("")
}

//生成验证码数字和字母和符号
 function TestCode(n){
   var arr = []
   for(var i =0;i<n-1;i++){
	   var num =parseInt(Math.random()*123)
	   if(num >= 0 && num <=9){
					   arr.push(num);
	   }else if(num >=65  && num<=122){
					   arr.push(String.fromCharCode(num));
	   }
   }
   return arr.join("")
}


//对称数组
function symmetryArr(arr){
   var newarr = arr.slice()
   for(var i =newarr.length-1;i>=0;i--)
   {
	   newarr.push(arr[i])
   }
   return newarr
}

//判断是否是字母
function isword(charstr){
	if(charstr >= 'a' && charstr <= 'z' || charstr >= 'A' && charstr <= 'Z')
	{
		return true
	}else{
		return false
	}
}

//判断是否是单词
function countofword(str){
	var count = 0;
	for(var i =0;i<str.length;i++){
		if(isword(str[i]) && !isword(str[i+1])){
			count++;
		}
	}
	return count
}
//查找子字符串在字符串出现几次
function countofStr(supstr,str){
	let arr = supstr.split(str)
	return arr.length-1
}
//验证邮箱
function isEmail(email){
   var index = email.indexOf("@")
   if(index == -1)
   {
	   return false
   }else{
	   var endstr = email.slice(index)
	   if(endstr != "@163.com")
	   {
		   return false
	   }else{
		   username = email.slice(0,index)
		   var flag = true
		   for(let i = 0;i<username.length;i++){
			   if(!isDEF([username[i]])){
				   flag = false
			   }
		return flag}
	  }
   }
   
}


//数字、字母、下划线
function isDEF(charstr){
	if(charstr >= 'a' && charstr <= 'z' || charstr >= 'A' && charstr <= 'Z' || charstr == "_" || charstr>=0 && charstr <=9)
	{
		return true;
	}else{
		return false;
	}
}

//判断两天相差几天
function countofDate(date1,date2){
	var date1 = new Date(date1)
	var date2 = new Date(date2)
	var time1 = date1.getTime()
	var time2 = date2.getTime()
	var time = Math.abs(time1-time2)
	return parseInt(time/1000/3600/24)
}

//显示几天后日期
function afterofDate(n){
	var date = new Date()
	var d = date.getDate()
	date.setDate(d+n)
	return date
}
//获取当前元素的有效样式
function getStyle(elem,attr){
   return elem.currentStyle ? elem.currentStyle[attr]:getComputedStyle(elem)[attr]
}
//取消事件冒泡
 function stopBubble(e){
   return e.stopPropagation()?e.cancelBubble = true:e.stopPropagation()
}

//阻止a标签的默认行为
function a_return(e){
	if(e.preventDefault()){
		return e.preventDefault()
	}else{
		return window.event.returnValue = false
	}
}



//拖拽事件
function drag(dv){
	//鼠标按下事件
	dv.onmousedown = function(e) {
		//获取x坐标和y坐标
		x = e.clientX;
		y = e.clientY;
	
		//获取左部和顶部的偏移量
		l = dv.offsetLeft;
		t = dv.offsetTop;
		//开关打开
		isDown = true;
		//设置样式  
		dv.style.cursor = 'move';
	}
	//鼠标移动
	window.onmousemove = function(e) {
		if (isDown == false) {
			return;
		}
		//获取x和y
		var nx = e.clientX;
		var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nl = nx - (x - l);
		var nt = ny - (y - t);
		
		if(nl <= 0){
			nl = 0
		}
		var windowWorld = document.documentElement.clientWidth || document.body.clientWidth
		if(nl >= windowWorld - dv.offsetWidth){
			nl = windowWorld - dv.offsetWidth
		}
		if(nt <= 0){
			nt = 0
		}
		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
		if(nt >= windowHeight - dv.offsetHeight){
			nt = windowHeight - dv.offsetHeight
		}
		dv.style.left = nl + 'px';
		dv.style.top = nt + 'px';
	}
	//鼠标抬起事件
	dv.onmouseup = function() {
		//开关关闭
		isDown = false;
		dv.style.cursor = 'default';
	}
}

function startMove(node,attr,iTarge){
	clearInterval(node.time)
	node.time = setInterval(function(){
		// var icur = parseInt(getStyle(node,attr))
		var icur = null
		if(attr == "opacity"){
			icur = parseInt(parseFloat(getStyle(node,"opacity"))*100)
			// console.log(icur)
		}else{
			icur = parseInt(getStyle(node,attr))
		}
		var speed = (iTarge - icur)/8
		speed = speed > 0 ? Math.ceil(speed):Math.floor(speed)
		if(iTarge == icur){
			clearInterval(node.time)
		}else{
			// node.style[attr] = icur + speed +'px'
			if(attr == "opacity"){
				icur += speed
				node.style.opacity = icur / 100
				// console.log(icur,speed)
			}else{
				node.style[attr] = icur + speed +'px'
			}
		}
		
	},30)
}
function randomColor(){
	var str = "rgba(" + parseInt(Math.random()*256) + ',' + parseInt(Math.random()*256)+','+parseInt(Math.random()*256)
	return str
}