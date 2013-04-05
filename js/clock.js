/*
 *	Draw() : set canvas size and position according to the screen size.
*/
function Draw() {  
        var canvas = document.getElementById("myCanvas");  
        // Set canvas size and position
		//if (canvas.getContext) {  
            //canvas.width = window.innerWidth;
	//		canvas.height = window.innerHeight;
	//		var height = (-1)*canvas.height;
	//		canvas.style.top = height + "px";
        //}		
    }

/*
*	DrawSeconds() : on myCanvas draw a round clock that displays seconds with digits inside the time rim.
*	@param position: position of the clock within canvas.
*	@param seconds: time to display.
*/
function DrawSeconds(position, radius, seconds)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	//reset canvas for a new instance of clock
	 c.width = c.width;
	
	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(seconds,"Seconds", position,"rgb(248,218,7)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.lineWidth=9;
	ctx.strokeStyle = "rgba(248,218,7,.85)";
	ctx.arc(position.x, position.y, radius, DegreesToRadians(-90), DegreesToRadians(SecondsToDegrees(seconds)-90), anticlockwise);
	ctx.stroke();
}

/**
*	DrawMinutes() : on myCanvas draw a round clock that displays minutes with digits inside the time rim.
*	@param position: position of the clock within canvas.
*	@param minutes: time to display.
*/
function DrawMinutes(position, radius, minutes)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	// Reset canvas for a new instance of clock. Otherwise new instance is printet over the old one.
	//c.width = c.width;
	
	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(minutes,"Minutes", position,"rgb(58,215,102)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.lineWidth=9;
	ctx.strokeStyle = "rgba(158,215,102,.85)";
	ctx.arc(position.x, position.y, radius, DegreesToRadians(-90), DegreesToRadians(SecondsToDegrees(minutes)-90), anticlockwise);
	ctx.stroke();
}

function DrawMinutes(position, radius, minutes)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	// Reset canvas for a new instance of clock. Otherwise new instance is printet over the old one.
	//c.width = c.width;
	
	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(minutes,"Minutes", position,"rgb(58,215,102)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.lineWidth=9;
	ctx.strokeStyle = "rgba(158,215,102,.85)";
	ctx.arc(position.x, position.y, radius, DegreesToRadians(-90), DegreesToRadians(SecondsToDegrees(minutes)-90), anticlockwise);
	ctx.stroke();
}


/**
*	DrawHours() : on myCanvas draw a round clock that displays hours with digits inside the time rim.
*	@param position: position of the clock within canvas.
*	@param hours: time to display.
*/
function DrawHours(position, radius, hours)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	// Reset canvas for a new instance of clock. Otherwise new instance is printet over the old one.
	//c.width = c.width;
	
	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(hours,"Hours", position,"rgb(65,126,255)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.lineWidth=9;
	ctx.strokeStyle = "rgba(65,126,255,.85)";
	ctx.arc(position.x, position.y, radius, DegreesToRadians(-90), DegreesToRadians(HoursToDegrees(hours)-90), anticlockwise);
	ctx.stroke();
}

/**
*	DrawDays() : on myCanvas draw a round clock that displays days with digits inside the time rim.
*	@param position: position of the clock within canvas.
*	@param days: time to display.
*/
function DrawDays(position, radius, days)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	// Reset canvas for a new instance of clock. Otherwise new instance is printet over the old one.
	//c.width = c.width;
	
	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(days,"Days", position,"rgb(236,94,84)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.lineWidth=9;
	ctx.strokeStyle = "rgba(236,94,84,.85)";
	ctx.arc(position.x, position.y, radius, DegreesToRadians(-90), DegreesToRadians(DaysToDegrees(days)-90), anticlockwise);
	ctx.stroke();
}

/**
*	DrawMonths() : on myCanvas draw a round clock that displays months with digits inside the time rim.
*	@param position: position of the clock within canvas.
*	@param months: time to display.
*/
function DrawMonths(position, radius, months)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	// Reset canvas for a new instance of clock. Otherwise new instance is printet over the old one.
	//c.width = c.width;
	
	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(months,"Months", position,"rgb(234,62,222)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.lineWidth=9;
	ctx.strokeStyle = "rgba(234,62,222,.75)";
	ctx.arc(position.x, position.y, radius, DegreesToRadians(-90), DegreesToRadians(MonthsToDegrees(months)-90), anticlockwise);
	ctx.stroke();
}

/*
*	DrawBigClock() : on myCanvas draw a round clock that displays time with digits inside the time rim.
*	@param position: position of the clock within canvas.
*	@param seconds: time to display.
*/
function DrawBigClock(position, radius, time)
{
	var anticlockwise = false;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	//reset canvas for a new instance of clock
	// c.width = c.width;

	// Draw the inner transparent filled circle.
	DrawTransparentCircle(position, radius);
	
	// Draw digits
	DrawDigits(time,"Time", position,"rgb(248,218,7)");
	
	// Draw a time rim around the transparent inner circle
	ctx.beginPath();
	ctx.shadowColor ="rgba(255,255,26,.8)";
	ctx.shadowBlur = 12;
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	ctx.lineWidth=4;
	ctx.strokeStyle = "rgba(248,218,7,.8)";
	ctx.arc(position.x, position.y, radius-3, DegreesToRadians(-90), DegreesToRadians(SecondsToDegrees(time)-90), anticlockwise);
	ctx.stroke();
}

/*
*	DrawTransparentCircle() : draws on myCanvas white transparent circle.
*/
function DrawTransparentCircle(position, radius)
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	ctx.beginPath();
	ctx.arc(position.x, position.y, radius-5, 0, 2 * Math.PI, false);
	//ctx.fillStyle = "rgba(201, 201, 201, .25)";
	ctx.fillStyle = "rgba(201, 201, 201, .01)";
	ctx.fill();
	ctx.lineWidth=.5;
	ctx.strokeStyle = "rgba(255,255,255,.5)";;
	ctx.stroke();
}

function DrawCaption(caption, userBirthDate, aBirthDate, aDeathDate)
{
	var timeLeft = TimeLeft(userBirthDate, aBirthDate, aDeathDate);
	
	// Draw caption
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	ctx.fillStyle="#E60000";
	ctx.font="italic bold 18px Corsiva";
	ctx.shadowColor = "#000"
	ctx.shadowBlur = 10;
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	var textCounter = timeLeft.getUTCDate() + " Days " + timeLeft.getUTCHours() + " hours " + timeLeft.getUTCMinutes() + " Minutes " +  timeLeft.getUTCSeconds() + " Seconds";
	ctx.fillText(textCounter, 500, 400);
}

/**
*	TimeLeft() : calculate age difference between the user's age and the life length of a famous person.
*	@param userBirthDate: date of birth of a user.
*	@param aBirthDate: date of birth of a famous person.
*	@param aDeathDate: date of death of a famous person.
*	@return timeLeft: difference between the user's age and a famous person's age at the time of death.
*/
function TimeLeft(userBirthDate, aBirthDate, aDeathDate)
{	
	// User's age
	var userAge = new Date();
	userAge.setUTCFullYear( userAge.getUTCFullYear() - userBirthDate.getUTCFullYear() );
	userAge.setUTCMonth( userAge.getUTCMonth() - userBirthDate.getUTCMonth() );
	userAge.setUTCDate( userAge.getUTCDate() - userBirthDate.getUTCDate() );
	userAge.setUTCHours( userAge.getUTCHours() - userBirthDate.getUTCHours() );
	userAge.setUTCMinutes( userAge.getUTCMinutes() - userBirthDate.getUTCMinutes() );
	userAge.setUTCSeconds( userAge.getUTCSeconds() - userBirthDate.getUTCSeconds() );
	
	// Famou's person age at the time of death
	var aLifeLength = new Date();
	aLifeLength.setUTCFullYear( aDeathDate.getUTCFullYear() - aBirthDate.getUTCFullYear());
	aLifeLength.setUTCMonth( aDeathDate.getUTCMonth() - aBirthDate.getUTCMonth() );
	aLifeLength.setUTCDate( aDeathDate.getUTCDate() - aBirthDate.getUTCDate() );
	aLifeLength.setUTCHours( aDeathDate.getUTCHours() - aBirthDate.getUTCHours() );
	aLifeLength.setUTCMinutes( aDeathDate.getUTCMinutes() - aBirthDate.getUTCMinutes() );
	aLifeLength.setUTCSeconds( aDeathDate.getUTCSeconds() - aBirthDate.getUTCSeconds() );
	
	// Users time left in comparing to the famous person
	var timeLeft = new Date();
	timeLeft.setUTCFullYear( aLifeLength.getUTCFullYear() - userAge.getUTCFullYear());
	timeLeft.setUTCMonth( aLifeLength.getUTCMonth() - userAge.getUTCMonth() );
	timeLeft.setUTCDate( aLifeLength.getUTCDate() - userAge.getUTCDate() );
	timeLeft.setUTCHours( aLifeLength.getUTCHours() - userAge.getUTCHours() );
	timeLeft.setUTCMinutes( aLifeLength.getUTCMinutes() - userAge.getUTCMinutes() );
	timeLeft.setUTCSeconds( aLifeLength.getUTCSeconds() - userAge.getUTCSeconds() );

	return timeLeft;
}

/*
*	DrawDigits() : draw digits with type they represent (seconds, hours, etc) at given position.
*	@param time
*	@param timeType
*	@param position
*	@param textColor
*/
function DrawDigits(time, timeType, position, textColor)
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	// Draw digits
	ctx.fillStyle="#fff";
	ctx.font="30px Arial";
	ctx.shadowColor = "#000"
	ctx.shadowBlur = 10;
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	if( time>=10)
	{
		ctx.fillText(time,position.x-15, position.y+10);
	}
	else
	{
		ctx.fillText(time,position.x-7.5, position.y+10);
	}
	
	// Text below digits
	ctx.fillStyle=textColor;
	ctx.font="10px Arial";
	ctx.shadowColor = "#000"
	ctx.shadowBlur = 10;
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	ctx.fillText(timeType,position.x-19,position.y+20);
}

/**
*	SecondsToDegrees() : function also serves for minutes. Changes given number 
*	to degrees on a 360. If number is greater than 60 the remainder of "number % 60" is calculated.
*	@param
*	@return 
*/
function SecondsToDegrees(seconds)
{
	if(seconds == 60)
	{
		return 360;
	}
	else
	{
		return (seconds%60) * 6;
	}
}

/**
*	HoursToDegrees() : Changes given number to degrees on a 360. If number is 
*	greater than 24 the remainder (number % 24) is calculated.
*	@param: hours to be changed to degree.
*	@return: degrees.
*/
function HoursToDegrees(hours)
{
	if(hours == 24)
	{
		return 360;
	}
	else
	{
		return (hours%24) * 15;
	}
}


/**
*	DaysToDegrees() : Changes given number to degrees on a 360. If number is 
*	greater than 365 the remainder (number % 365) is calculated.
*	@param: days to be changed to degree.
*	@return: degrees.
*/
function DaysToDegrees(days)
{
	if(days == 365)
	{
		return 360;
	}
	else
	{
		return (days%365) * .986;
	}
}

/**
*	MonthsToDegrees() : Changes given number to degrees on a 360. If number is 
*	greater than 12 the remainder (number % 12) is calculated.
*	@param: months to be changed to degree.
*	@return: degrees.
*/
function MonthsToDegrees(months)
{
	if(months == 12)
	{
		return 360;
	}
	else
	{
		return (months%12) * 30;
	}
}

/**
*	DegreesToRadians() : change value of defrees to radians.
*   @param degrees integer or float value of degrees.
*	@return radians value.
*/
function DegreesToRadians(degrees)
{
	return (Math.PI/180)*degrees;
}


/**
*	PeopleArray() : instantiate an array with objects that represent people. Each 
*	instance contains person's dates of birth and death, and a quote about the person.
*
*/
function PeopleArray()
{
	var people = new Array();
	
	// Jimmy Hendrix
	var personBirtd = new Date(1942, 10, 27, 0, 0, 0, 0);
	var personDeath = new Date(1970, 8, 18, 0, 0, 0, 0);
	var quote = "Jimmy Hendrix wrote \"Voodoo Child\" at age of 25.";
	var person1 = new Object();
	person1.birthDate = personBirtd;
	person1.deathDate = personDeath;
	person1.text = quote;
	
	people[0] = person1;
	
	window.people = people;
}

/*
	RED (days) = #EC5E54
	BLUE (hours) = #417EFF
	GREEN (minutes) = #9ED766
	YELLOW (seconds)= #F8CE07
*/
