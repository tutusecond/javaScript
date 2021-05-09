/*
				1、匀速运动
					<1>每次启动定时器，关闭上一个定时器
					<2>if...else将运动和停止分开
				2、分享到菜单，淡入淡出(alpha)中间变量
					startMove(iTarge)
				3、缓冲运动
					speed = (目的值 - 当前值) / 8	8是最好的选择
					speed = speed > 0? Math.ceil(speed) : Math.floor(speed)
					
			*/
			window.onload = function(){
				var Odiv = document.getElementById("div")
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				var windowheight = document.documentElement.clientHeight || document.body.clientHeight
				
				var height = parseInt(scrollTop + (windowheight-Odiv.offsetHeight) / 2)
				console.log(scrollTop,windowheight,height)
				
				window.onscroll = function(){
					var Odiv = document.getElementById("div")
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
					var windowheight = document.documentElement.clientHeight || document.body.clientHeight
					
					var height = parseInt(scrollTop + (windowheight-Odiv.offsetHeight) / 2)
					// var height = parseInt(scrollTop + (windowheight-Odiv.offsetHeight))
					stratMovepeople(height)
				}
				
				window.onresize = function(){
					var Odiv = document.getElementById("div")
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
					var windowheight = document.documentElement.clientHeight || document.body.clientHeight
					
					var height = parseInt(scrollTop + (windowheight-Odiv.offsetHeight) / 2)
					stratMovepeople(height)
				}
				
			}
			
			var time = null
			function stratMovepeople(iTarge){
				clearInterval(time)
				var Odiv = document.getElementById("div")
				time = setInterval(function(){
					var speed = (iTarge - Odiv.offsetTop) / 8
					// speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
					if(Odiv.offsetTop == iTarge){
						clearInterval(time)
					}else{
						Odiv.style.top = Odiv.offsetTop + speed + 'px'
						// console.log(Odiv.style.top,Odiv.offsetTop,speed)
					}
				},30)
			}