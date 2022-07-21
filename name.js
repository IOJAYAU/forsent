let specials;
const currentDay = new Date().getDay();

// from sunday to saturday
switch(currentDay) {
  case 0:
    specials = 'Sunday';
    break;
 case 1:
    specials = 'Monday';
    break;
 case 2:
    specials = 'Tuesday';
    break;
 case 3:
    specials = 'Wednesday';
    break;
 case 4:
   specials = 'Thursday';
    break;
 case 5:
    specials = 'Friday';
    break;
 case 6:
    specials = 'Saturday';
    break;
}

document.getElementById("specials").innerHTML = specials;