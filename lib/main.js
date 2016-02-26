
.alertify-log-custom {
	background: blue;
}
body {

	background-image: url("http://www.bearvalleymusicfestival.org/wp-content/themes/banda/app/assets/css/images/light-linen-bg-tile.jpg");
	background-repeat: repeat;
}
/*NO REPEAT COVER BG*/
  /*  background: url('http://i.stack.imgur.com/IehB7.png') no-repeat scroll;
        background-size: 100% 100%;
         background-size:cover;
         background-color:black;*/

    /*http://webneel.com/wallpaper/sites/default/files/images/04-2013/15-beach-sea-photography.jpg*/
    /*https://cdn.creativelive.com/fit/https%3A%2F%2Fcdn.creativelive.com%2Fagc%2Fcourses%2F5842-1.jpg/1600*/
    /*http://www.siwallpaper.com/wp-content/uploads/2015/09/sky_hd_wallpaper.jpg*/


//** CLOCK ESLAPSED TIMER
//
//
window.onload=function() {
//upTime('jan,01,2014,00:00:00'); //** Month,Day,Year,Hour,Minute,Second
var currentdate = new Date(); 
upTime(currentdate); //** Change this line!
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  // document.getElementById('days').firstChild.nodeValue = pad(days);
  document.getElementById('hours').firstChild.nodeValue = pad(hours);
  document.getElementById('minutes').firstChild.nodeValue = pad(mins);
  document.getElementById('seconds').firstChild.nodeValue = pad(secs);

    function pad(val){
        var valString = val + "";
	        if(valString.length < 2)
	        {
	            return "0" + valString;
	        }
	        else
	        {
	            return valString;
	        }
	}
  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

window.onbeforeunload = confirmExit;
	function confirmExit(){
		return "You have attempted to leave this page. If you have made any changes to the fields without clicking the Save button, your changes will be lost. Are you sure you want to exit this page?";
	}

	<script>
			// ONLOAD DIAGLOGE
			$(document).ready(function() {
				alertify.alert("<h5>Hello, welcome to EYE CARE*</h5><p>This little web app is created to help reduce computer eye strains from long hours of staring into the monitors. It will alert you every 20 minutes to hint that your should take a short break from the computer. Please do not click the 'prevent this page from creating additional dialogs?', this will stop the program and no longer provide inteval helpful tips.</p>", function (e) {
		    	if (e) {
		        	start();
		    	}
		    	else {
		        // user clicked "cancel"
				    }
				});
			});

			// ARRAY OF DIFFERENT QUOTES / TIPS
			var r_text = new Array ();
				r_text[0] = "Remember the 20-20-20 rule: every 20 minutes, look 20 feet away (six metres) for 20 seconds to give your eye muscles a break and help increase the rate of blinking.";
				r_text[1] = "Blink regularly. When focusing on a screen your reflexes will slow down, tear production will reduce, and you will blink less, causing dry and uncomfortable eyes.";
				r_text[2] = "Make sure your workstation is set up comfortably; avoid poor posture which can lead to neck, back, arm or other aches.";
				r_text[3] = "Adjusting your computer’s display settings can help reduce eye strain and fatigue.";
				r_text[4] = "Try and position your monitor so that you do not get distracting reflections (e.g. from a window).";
				r_text[5] = "Improper posture while working on your computer also adds to the problem.";
				r_text[6] = "Make sure that the top of the monitor is at a level at or slightly below your horizontal eye level.";
				r_text[7] = "Make sure the brightness is the same as the surroundings and adjust the text size and contrast so that it is comfortable to read.";
				r_text[8] = "Reducing the amount of blue colours on your screen can also help.";
				



			// var i = Math.floor(7*Math.random());
			var i = Math.floor(Math.random() * r_text.length);


			// TIMER FUNCTION
			function start(){
				// timer = setInterval(function() {
				timer = setTimeout(function() {
					// var i = Math.floor(Math.random() * r_text.length);
					var i = Math.floor(7*Math.random());
					reset();
					// alertify.alert(r_text[Math.floor(Math.random() * r_text.length)]);
				    // alertify.log(r_text[Math.floor(Math.random() * r_text.length)], "", 0);
				    // alertify.alert(r_text[i]);

					alertify.confirm(r_text[i], function (e) {
					    if (e) {
					        alertify.log(r_text[i], "success", 40000);
					        start();
					    }
					    else {
					    	// alertify.custom = alertify.extend("custom");
					    	// alertify.custom(r_text[i], "", 50000);
					    	alertify.log(r_text[i], "error", 45000);
					        clearTimeout(timer);
					        $("#startButton").fadeIn( "slow", function(){$( this ).removeClass( "disabled" );});
					    }
					});
					alert('Eye Care*');
				    // alertify.log(r_text[i], "", 0);

				}, 5000);//3 *(60 * 1000)); // 60 * 1000 milsec = 60sec = 1min
			};


			//BUTTON FUNCTION
			$("#startButton").hide();
			$( "#startButton" ).click(function() {
			// $( this ).toggleClass( "disabled" ).fadeOut("slow", function(){});
			    $( this ).addClass( "disabled" ).fadeOut("slow", function(){});
			    clearTimeout(timer);
			    start();
			});


			// RESET FUNCTION
			function reset() {
				$("#toggleCSS").attr("href", "./themes/alertify.default.css");
				alertify.set({
					labels : {
						ok     : "OK",
						cancel : "Cancel"
					},
					delay : 5000,
					buttonReverse : false,
					buttonFocus   : "ok"
				});
			}
			</script>