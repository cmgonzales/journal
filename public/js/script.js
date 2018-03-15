//document.getElementById("btn").addEventListener("click", timeStamp);

var months = "";

function fulldate(mo){
  
    document.cookie = mo;
}

function test(){
    

    var d = new Date();
    var m = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
 
    
    if(m == 0){
        months = "January";

  return fulldate(months + " " + day + "," + year); 

}

if(m == 1){
    months = "Febuary";

return fulldate(months + " " + day + "," + year); 

}

    if(m == 2){
        months = "March";

  return fulldate(months + " " + day + "," + year); 

}

if(m == 3){
    months = "April";

return fulldate(months + " " + day + "," + year); 

}


if(m == 4){
    months = "May";

return fulldate(months + " " + day + "," + year); 

}


if(m == 5){
    months = "June";

return fulldate(months + " " + day + "," + year); 

}


if(m == 6){
    months = "July";

return fulldate(months + " " + day + "," + year); 

}

if(m == 7){
    months = "August";

return fulldate(months + " " + day + "," + year); 

}
if(m == 8){
    months = "September";

return fulldate(months + " " + day + "," + year); 

}

if(m == 9){
    months = "October";

return fulldate(months + " " + day + "," + year); 

}

if(m == 10){
    months = "November";

return fulldate(months + " " + day + "," + year); 

}

if(m == 11){
    months = "December";

return fulldate(months + " " + day + "," + year); 

}


}