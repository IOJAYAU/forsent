let specials;
const currentDay = new Date().getDay();

// from sunday to saturday
switch(currentDay) {
  case 0:
    specials = '';
    break;
 case 1:
    specials = '$4.00 Burgers All Day';
    break;
 case 2:
    specials = '$1.25 Tacos All Day';
    break;
 case 3:
    specials = '$0.70 Wings All Day';
    break;
 case 4:
   specials = '$6.49 Steak or Chicken Philly';
    break;
 case 5:
    specials = '';
    break;
 case 6:
    specials = '';
    break;
}

document.getElementById("specials").innerHTML = specials;