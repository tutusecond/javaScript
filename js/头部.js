// window.onload = function(){
				var Otime = document.getElementById("time")
				var navtop = document.getElementById("navtop1")
				showtime()
				var time = setInterval(showtime,1000)
				var Ohidden = document.getElementById("hidden1")
				
				var left = document.getElementById("left")
				var right = document.getElementById("right")
				var box = document.getElementById("box1")
				var sign = document.getElementsByClassName("sign")
				
				var ul = Ohidden.getElementsByTagName("ul")
				box.onmouseover = function(){
					left.style.display = "block"
					right.style.display = "block"
					startMove(left,"opacity",100)
					startMove(right,"opacity",100)
				}
				box.onmouseout = function(){
					left.style.display = "none"
					right.style.display = "none"
					startMove(left,"opacity",0)
					startMove(right,"opacity",0)
				}
				// var a = navtop.getElementsByTagName("a")
				// for(i = 0;i<a.length;i++){
				// 	a[i].onmouseover = function(){
				// 		Ohidden.style.display = "block"
				// 	}
				// 	a[i].onmouseout = function(){
				// 		Ohidden.style.display = "none"
				// 	}
				// }
				
				var appear = document.getElementsByClassName("appear")
				// var show = null
				// show = setInterval(function(){
				// 	// clearInterval(show)
				// 	// startMove(Ohidden,"height","100")
				// 	Ohidden.style.background = randomColor()
				// },1000)
				for(let i = 0;i<appear.length;i++){
					var appear = document.getElementsByClassName("appear")
					appear[i].onmouseover = function(){
						
						sign[i].style.transform =  "rotate(180deg)"
						sign[i].style.transitionDuration = 0.3 + "s"
						
						Ohidden.style.display = "block"
						left.style.top = 300+'px'
						right.style.top = 300+'px'
						startMove(Ohidden,"height","100")
						Ohidden.style.background = randomColor()
						
					}
					appear[i].onmouseout = function(){
						sign[i].style.transform =  "rotate(0deg)"
						sign[i].style.transitionDuration = 0.3 + "s"
						Ohidden.style.display = "none"
						left.style.top = 200+'px'
						right.style.top = 200+'px'
						startMove(Ohidden,"height","0")
					}
					
					
				}
				
				Ohidden.onmouseover = function(){
					Ohidden.style.display = "block"
					
				}
				Ohidden.onmouseout = function(){
					Ohidden.style.display = "none"
				}
				
				
				// //图片
				// var  imgArr = ["./img/首页.jpg","./img/1.jpg","./img/2.jpg"]
				// var i = 0;
				// var left = document.querySelector(".left")
				// var right = document.querySelector(".right")
				// var img = document.getElementById("img")
				// left.onclick = function(){
				// 	i--;
				// 	if(i<0){
				// 		i=2
				// 	}
				// 	img.src = imgArr[i]
				// }
				// right.onclick = function(){
				// 	i++;
				// 	if(i>2){
				// 		i=0;
				// 	}
				// 	img.src = imgArr[i];
				// }
					
				// if(img.src == '2.jpg'){
				// 	img.style.height = 500 + 'px'
				// }
				// // }
			
			function showtime(){
				var Otime = document.getElementById("time")
				var date = new Date
				str = ''
				str+=date.getFullYear()+'年'
				str+=Number(date.getMonth()+1)+'月'
				str+=date.getDate()+'日'
				str+='星期'+date.getDay()+'   '
				str+=date.getHours() + '时'
				minutes = date.getMinutes()
				if(minutes < 10){
					minutes = '0'+minutes
				}else{
					minutes = minutes 
				}
				str+=minutes + '分'
				
				second = date.getSeconds()
				
				if(second < 10){
					second = '0'+second
				}else{
					second = second 
				}
				str+=second + '秒'
				
				Otime.innerHTML = str
				
			}