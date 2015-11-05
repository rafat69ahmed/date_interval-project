function timeLapse (a) {

	this.previousDate =  a;
	if (!(this.previousDate instanceof Date))
	{
		return console.error("The object should be construct with Date object "+typeof(this.previousDate)+" given");
	}

	this.presentTime = new Date().getTime();
	this.years;
	this.months;
	this.weeks;
	this.days;
	this.hours;
	this.mins;
	this.secs;
	this.methodSub = function sub(a, b){
					 return a - b;
	}
	this.cal = function(){
	this.years = this.methodSub(this.presentTime, this.previousDate) / (3600*1000*24*7*4*12);
	this.months = (this.methodSub(this.years, Math.floor(this.years)) * 12);
	this.weeks = (this.methodSub(this.months, Math.floor(this.months)) * 4);
	this.days = (this.methodSub(this.weeks, Math.floor(this.weeks)) * 7);
	this.hours = (this.methodSub(this.days, Math.floor(this.days)) * 24);
	this.mins = (this.methodSub(this.hours, Math.floor(this.hours)) * 60);
	this.secs = (this.methodSub(this.mins, Math.floor(this.mins)) * 60);
}
	this.show = function(){
		this.cal();
	if (Math.floor(this.years) >=1){
	return(Math.floor(this.years) >1 ? Math.floor(this.years) + " years ago" : Math.floor(this.years) + " year ago");	
	}
	else {
		if(Math.floor(this.months) < 12 && Math.floor(this.months)!==0){
			return(Math.floor(this.months) >1 ? Math.floor(this.months) + " months ago" : Math.floor(this.months) + " month ago");
		}
		else{
			if(Math.floor(this.weeks) < 4 && Math.floor(this.weeks) !==0){
				return(Math.floor(this.weeks) >1 ? Math.floor(this.weeks) + " weeks ago" : Math.floor(this.weeks) + " week ago");
			}
			else{
				if(Math.floor(this.days) < 7 && Math.floor(this.days) !==0){
					return(Math.floor(this.days) >1 ? Math.floor(this.days) + " days ago" : Math.floor(this.days) + " day ago");
				}
				else{
					if(Math.floor(this.hours) < 24 && Math.floor(this.hours) !==0){
						return(Math.floor(this.hours) >1 ? Math.floor(this.hours) + " hours ago" : Math.floor(this.hours) + " hour");
					}
					else{
						if(Math.floor(this.mins) < 60 && Math.floor(this.mins) !==0){
							return(Math.floor(this.mins) >1 ? Math.floor(this.mins) + " mins ago" : Math.floor(this.mins) + " min ago");
						}
						else{
							return(Math.floor(this.secs) >30 ? Math.floor(this.secs) + " secs ago" : " just now");
						}
					}
				}
			}
		}
	}



	}
}
	
	function loaded(){
		var obj = new timeLapse(new Date("Nov 03 2014 9:30:16 GMT+0600 (BDT)"));
		document.getElementById('date').innerHTML = obj.show();
	}
	


