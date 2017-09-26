var cont=setInterval(dtime,1000);
function dtime() {
	var today=new Date();
	var hours=today.getHours();
	var minutes=today.getMinutes();
	var seconds=today.getSeconds();
	minutes=checkingTime(minutes);
	seconds=checkingTime(seconds);
	var morni="AM";
	if(hours>12){
		hours=hours%12;
		morni="PM";
	}
	
	if(hours==0){
		hours=12;
	}
		
	document.getElementById("clock").innerHTML=hours+" "+":"+" "+minutes+" "+":"+" "+seconds+" "+" "+morni;
	
	
}
function checkingTime(i){
	if(i<10)
		i="0"+i;
	return i;
}
function stopTime(){
	
clearInterval(cont);
}
 function resume() {
    cont=setInterval(function(){dtime()},1000);
  }
  
var resumeClock=true;
function fun(){
	;
	if(resumeClock){
			stopTime();
	resumeClock=false;
	}
	else{
	resume();
resumeClock=true;
}
}