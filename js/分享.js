
var Odiv = document.getElementById("share")
var Ospan = Odiv.getElementsByTagName("span")[0]
Ospan.onmouseover = function(){
	startMoveshare(0)
}
Odiv.onmouseleave = function(){
	startMoveshare(-100)
}
var time = null
function startMoveshare(intent){
	clearInterval(time)
	var Odiv = document.getElementById("share")
	
	time = setInterval(function(){
		var speed = (intent - Odiv.offsetLeft) / 8
		if(Odiv.offsetLeft >= intent)
		{
			console.log(Odiv.offsetLeft)
			console.log(intent)
			speed = -Math.abs(speed)
		}else{
			speed = Math.abs(speed)
		}
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
		if(Odiv.offsetLeft == intent){
			clearInterval(time)
		}else{
			Odiv.style.left = Odiv.offsetLeft + speed + 'px'
		}
	},30)
}


// window.onscroll = function(){
	
// 	var Odiv = document.getElementById("share")
// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
// 	var windowheight = document.documentElement.clientHeight || document.body.clientHeight
	
// 	var height = parseInt(scrollTop + (windowheight-Odiv.offsetHeight) / 2)
// 	// var height = parseInt(scrollTop + (windowheight-Odiv.offsetHeight))
// 	stratMoveshare(height)
// }

// function stratMoveshare(iTarge){
// 	clearInterval(time)
// 	var Odiv = document.getElementById("div")
// 	time = setInterval(function(){
// 		var speed = (iTarge - Odiv.offsetTop) / 8
// 		// speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
// 		if(Odiv.offsetTop == iTarge){
// 			clearInterval(time)
// 		}else{
// 			Odiv.style.top = Odiv.offsetTop + speed + 'px'
// 			// console.log(Odiv.style.top,Odiv.offsetTop,speed)
// 		}
// 	},30)
// }