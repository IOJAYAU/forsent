let specials, message;
const d = new Date();
let day = d.getDay()

// from sunday to saturday
switch(day) {
  case 0:
    specials = 'Sunday';
    message = 'พี่เป็นคนเขียนบทความบทวิกิพีเดีย (ผู้ใช้: OraMAAG)';
    break;
 case 1:
    specials = 'Monday';
    message = 'พี่ไม่ได้สวมแว่น';
    break;
 case 2:
    specials = 'Tuesday';
    message = 'พี่มี Laptop ที่ห้องอยู่สองเครื่อง';
    break;
 case 3:
    specials = 'Wednesday';
    message = 'พี่ขอบกิน Chocolate';
    break;
 case 4:
   specials = 'Thursday';
   message = 'พี่น้ำหนัก 80 กก. สูง 170 ซม. (ประมาณค่า)';
    break;
 case 5:
    specials = 'Friday';
    message = 'พี่อยู่ชั้นสี่ของหอพัก';
    break;
 case 6:
    specials = 'Saturday';
    message = 'พี่เอา Laptop ของโรงเรียนมาแทบทุกวัน';
    break;
}

document.getElementById("specials").innerHTML = specials;
document.getElementById("messgae").innerHTML = messgae;