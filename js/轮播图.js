var p = document.getElementById("pmain");
var Carousel = document.getElementById("Carousel")
var aimge = p.children;
	for (var i = 0; i < aimge.length; i++) {
		aimge[i].style.transform = "rotateY(" + i * 40 + "deg)  translateZ(296px)";
	}
	var index = 0;
	
		Carousel.onclick = function(){
		index ++;
		p.style.transform = "rotateY("+ -index*40+"deg)";
			var now = index % 9;
			var beforeimge = now - 1;
			var afterimage = now + 1;
			if(now == 8){
				afterimage = 0;
			}
			if(now == 0){
				beforeimge = 8;
			}
		}	
	
	