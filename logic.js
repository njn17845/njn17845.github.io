var layer1    = document.getElementById("l1"),
	layer2    = document.getElementById("l2"),
	layer3    = document.getElementById("l3"),
	layer4 	  = document.getElementById("l4"),
	astronaut = document.getElementById("astronaut"),
	bio 	  = document.getElementById("bio"),
	devTools  = document.getElementById("dev-tools"),
	slideLeft = "slide-left";
	
function initScrollEffects() {
   	parallax(layer1, 1.5);
   	parallax(layer2, 1.5);
   	parallax(layer3, 2);
    spaceFloat();
    inView(bio, slideLeft);
    inView(devTools, slideLeft);
}

function parallax(layer, speed) {
	layer.style.top = (window.pageYOffset / speed) + "px";
}

function spaceFloat() {
	parallax(layer4, 1.2);
    layer4.style.right = (window.pageYOffset) + "px";
    astronaut.style.width = (1800 - pageYOffset)/6 +"px";
}

function inView(element, cssClass) {
	var windowBottom = window.innerHeight + window.pageYOffset;
	var triggerOn = element.offsetTop + 200;
	if ((windowBottom >= triggerOn)&&(element.classList.contains(cssClass) === false)){
		element.className += cssClass;
	}
}

window.addEventListener("scroll", initScrollEffects);
