/*!
Intelligent auto-scrolling to hide the mobile device address bar
Optic Swerve, opticswerve.com
Documented at http://menacingcloud.com/?c=iPhoneAddressBar
*/

var bodyTag;
var executionTime = new Date().getTime(); // JavaScript execution time
var aMenuClicked = false;

// Document ready
//----------------
documentReady(function() {
	// Don't hide address bar after a distracting amount of time
	var readyTime = new Date().getTime()
	if((readyTime - executionTime) < 3000) hideAddressBar(true);


	// -------- Search box hover active state end（搜索） ------ //

	// Toggle script

	$("#menu-wrapper").height($(window).height()+40);
	$("#content-wrapper").css("min-height",$(window).height());
	$(".toggle").click(function(){
		$(this).toggleClass("active").next().slideToggle(350);
			return false;
	});

	// -------- Toggle script end ------ //

	$("#submenu-1").hide();
	$("#submenu-2").hide();
	$("#submenu-3").hide();
	var heightCon=$("#content-wrapper").height();
			$('#a-menu').on('click', function(event){

					if(aMenuClicked)
					{
						$('#content-wrapper').removeClass('moved');
                        $('#content-wrapper').css('height',"100%");
						$('.menu').removeClass('activeState');
						$("content").css("pointer-events","auto");
						aMenuClicked = false;
					}
					else
					{

						$('#content-wrapper').addClass('moved');
						$('.menu').addClass('activeState');
                        $("#content-wrapper").height($(window).height());
                        $("content").css("pointer-events","none");
						aMenuClicked = true;

					}
			});


			$('#a-submenu-1').bind('click', function(event){

				$('#submenu-1').toggle(250);

			});
			$('#public').bind('click', function(event){

				$('#submenu-2').toggle(450);

			});
			$('#private').bind('click', function(event){

				$('#submenu-3').toggle(550);

			});


});

// Run specified function when document is ready (HTML5)
//------------------------------------------------------
function documentReady(readyFunction) {
	document.addEventListener('DOMContentLoaded', function() {
		document.removeEventListener('DOMContentLoaded', arguments.callee, false);
		readyFunction();

	}, false);

}

// Hide address bar on devices like the iPhone
//---------------------------------------------
function hideAddressBar(bPad) {
	// Big screen. Fixed chrome likely.
	if(screen.width > 980 || screen.height > 980) return;

	// Standalone (full screen webapp) mode
	if(window.navigator.standalone === true) return;

	// Page zoom or vertical scrollbars
	if(window.innerWidth !== document.documentElement.clientWidth) {
		// Sometimes one pixel too much. Compensate.
		if((window.innerWidth - 1) !== document.documentElement.clientWidth) return;

	}

	// Pad content if necessary.
	if(bPad === true && (document.documentElement.scrollHeight <= document.documentElement.clientHeight)) {
		// Extend body height to overflow and cause scrolling
		bodyTag = document.getElementsByTagName('body')[0];

		// Viewport height at fullscreen
		bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';

	}

	setTimeout(function() {
		// Already scrolled?
		if(window.pageYOffset !== 0) return;

		// Perform autoscroll
		window.scrollTo(0, 1);

		// Reset body height and scroll
		if(bodyTag !== undefined) bodyTag.style.height = window.innerHeight + 'px';
		window.scrollTo(0, 0);

	}, 1000);

}

// Quick address bar hide on devices like the iPhone
//---------------------------------------------------
function quickHideAddressBar() {
	setTimeout(function() {
		if(window.pageYOffset !== 0) return;
		window.scrollTo(0, window.pageYOffset + 1);

	}, 1000);

}

function test(){
 if (document.addEventListener) {
document.addEventListener('DOMMouseScroll', Func, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = Func;//IE/Opera/Chrome
}
function disabledMouseWheel() {
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
}
function scrollFunc(evt) {
  evt = evt || window.event;
    if(evt.preventDefault) {
    // Firefox
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      // IE
      evt.cancelBubble=true;
      evt.returnValue = false;
  }
  return false;
}
function Func(evt) {
  evt = evt || window.event;
    if(evt.preventDefault) {
      /* location.reload();*/
    } else {
      // IE
      evt.cancelBubble=false;
      evt.returnValue = true;
  }
  return true;
}
function closemouse(){
alert("将要关闭鼠标滚轮事件，滚动条将不会随着鼠标滚动了！");
disabledMouseWheel();
}
