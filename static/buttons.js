var bu_clicked = 0;
var b_count = 0;
var counter= 0;
var dvd_but = document.getElementById("start");
var leadership =0;
var social_skills =0;
var challenging =0;
var creativity =0;
var hands_on =0;
var new_idea = 0;
var patience = 0;
var flexibility = 0;
var mastery = 0;
var problem_solving = 0;
var backgrounds = ["../images/question1.png","../images/question2.png","../images/question3.png","../images/question4.png","../images/question5.png"];


var game = [
  [
  [2,1,4,0,5,0,2,1,4,1],
  [3,2,0,2,0,2,2,2,2,5],
  [0,0,3,0,7,0,3,1,6,0],
  [1,3,1,3,2,1,1,0,5,3]
],
[
[3,1,5,0,4,1,0,0,2,5],
[0,3,0,1,0,7,3,5,1,0],
[4,4,1,1,0,1,4,1,0,4],
[1,1,0,2,0,3,3,4,0,6]
],
[
[1,3,0,2,0,5,2,3,0,4],
[3,5,1,2,1,1,3,1,1,2],
[0,6,0,3,0,7,1,3,0,0],
[2,0,5,3,5,0,0,0,5,0]
],
[
[1,0,6,3,5,0,0,0,4,1],
[2,0,3,0,5,0,4,0,6,6],
[1,1,3,6,3,0,1,3,1,1],
[8,1,2,3,4,5,6,7,8,7]
],
 [
[1,2,3,4,5,6,7,8,9,5],
[0,1,2,3,4,5,6,7,8,5],
[0,2,3,3,3,3,4,4,6,8],
[8,1,2,3,4,5,6,7,8,8]
],
]

  var rect1 = {
      x:20*3.2,
      y:32.5*4,
      width:263*3.2,
      height:7*4
  };
  var rect2 = {
      x:20*3.2,
      y:42.5*4,
      width:263*3.2,
      height:7*4
  };
  var rect3 = {
      x:20*3.2,
      y:52.5*4,
      width:263.5*3.2,
      height:7*4
  };
  var rect4 = {
      x:20*3.2,
      y:62.5*4,
      width:263*3.2,
      height:7*4
  };
  // console.log(rect.x);
   function clr_canvas(evt) {
        context.clearRect(0, 0, c.width, c.height);

  }

//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect1 = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect1.left,
        y: event.clientY - rect1.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
  console.log("pos.x :",pos.x);
  console.log("rect.x :", rect.x);

  console.log(rect.x+rect.width);
  console.log(pos.y);
  console.log(rect.y+rect.height);



    return pos.x> rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}
var canvas = document.getElementById('playground');
var context = canvas.getContext('2d');
function rects(){
  // if(counter <5){
context.beginPath();
var pic = new Image();
console.log("b_count", b_count);
pic.src= backgrounds[b_count];
if(b_count <4){b_count ++;}
console.log(pic.src);
context.drawImage(pic, 0, 0, 960, 600);
// context.rect(20, 100, 20, 10);
context.fillStyle = '#FF0000';
// context.fillStyle = 'rgba(225,225,225,10)';
// context.fillRect(20,32.5,263,7);
//context.fill();
context.lineWidth = 1;
context.strokeStyle = '#FF0000';
context.stroke();
context.closePath();
context.font = '8pt Kremlin Pro Web';
// context.fillStyle = '#000000';
 // context.fillText('Start', 5, 5);
 context.textAlign="center";
context.textBaseline = "middle";
 // context.fillText("1",30,36);
//rect2
 context.beginPath();
 // context.rect(60, 100, 20, 10);
 context.fillStyle = '#FF0000';
 // context.fillStyle = 'rgba(225,225,225,10)';
 // context.fillRect(20,42,20,7);
 //context.fill();
 context.lineWidth = 1;
 context.strokeStyle = '#FF0000';
 context.stroke();
 context.closePath();
 context.font = '8pt Kremlin Pro Web';
 context.fillStyle = '#000000';
  // context.fillText('Start', 5, 5);
  context.textAlign="center";
 context.textBaseline = "middle";
  // context.fillText("2",30,46);
//rect3
 context.beginPath();
 // context.rect(100, 100, 20, 10);
 context.fillStyle = '#FF0000';
 // context.fillStyle = 'rgba(225,225,225,10)';
 // context.fillRect(20,52,20,7);
 //context.fill();
 context.lineWidth = 1;
 context.strokeStyle = '#FF0000';
 context.stroke();
 context.closePath();
 context.font = '8pt Kremlin Pro Web';
 context.fillStyle = '#000000';
  // context.fillText('Start', 5, 5);
  context.textAlign="center";
 // context.textBaseline = "middle";
  // context.fillText("3",30,56);
//rect4
 context.beginPath();
 // context.rect(140, 100, 20, 10);
 context.fillStyle = '#FF0000';
 // context.fillStyle = 'rgba(225,225,225,10)';
 // context.fillRect(20,62,20,7);
 //context.fill();
 context.lineWidth = 1;
 context.strokeStyle = '#FF0000';
 context.stroke();
 context.closePath();
 context.font = '8pt Kremlin Pro Web';
 context.fillStyle = '#000000';
  // context.fillText('Start', 5, 5);
  context.textAlign="center";
 context.textBaseline = "middle";
  // context.fillText("4",30,66);

// }
// else{
//   return false;
// }
// counter ++;
// rects();
   // return false;
}

dvd_but.addEventListener('click', function(evt){
  b_count = 0;


  // if(counter <5){
  //  context.clearRect(0,0,960,600);
    // console.log("work")
    // while (!button_pressed){
      // console.log("i");
    rects();
    // console.log("hello");
   // }
  button_pressed = false;
    // console.log("hfei");
    //context.clearRect(0,0,960,600);
    // counter ++;
  }
  //if(counter >=5){
  //  context.clearRect(0,0,960,600);}
 , false)
function ending(){
  window.location.href = "../templates/endpage.html";
  // console.log("hduh");
}

//The rectangle should have x,y,width,height properties

//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    // Playbutton(200,200,200,200,red,red);
  //  makeRects();
  // while(counter <5){
    if(counter <5){
      rects();

    var mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos,rect1)) {
      bu_clicked = 0;
      leadership += game[counter][bu_clicked][0];
      social_skills += game[counter][bu_clicked][1];
       challenging += game[counter][bu_clicked][2];
       creativity += game[counter][bu_clicked][3];
       hands_on += game[counter][bu_clicked][4];
       new_idea +=  game[counter][bu_clicked][5];
       patience +=  game[counter][bu_clicked][6];
       flexibility +=  game[counter][bu_clicked][7];
       mastery +=  game[counter][bu_clicked][8];
       problem_solving += game[counter][bu_clicked][9];


    }
    else if (isInside(mousePos,rect2)){
      bu_clicked = 1;
      leadership += game[counter][bu_clicked][0];
      social_skills += game[counter][bu_clicked][1];
       challenging += game[counter][bu_clicked][2];
       creativity += game[counter][bu_clicked][3];
       hands_on += game[counter][bu_clicked][4];
       new_idea +=  game[counter][bu_clicked][5];
       patience +=  game[counter][bu_clicked][6];
       flexibility +=  game[counter][bu_clicked][7];
       mastery +=  game[counter][bu_clicked][8];
       problem_solving += game[counter][bu_clicked][9];
    }
    else if (isInside(mousePos,rect3)){
      bu_clicked = 2;
      leadership += game[counter][bu_clicked][0];
      social_skills += game[counter][bu_clicked][1];
       challenging += game[counter][bu_clicked][2];
       creativity += game[counter][bu_clicked][3];
       hands_on += game[counter][bu_clicked][4];
       new_idea +=  game[counter][bu_clicked][5];
       patience +=  game[counter][bu_clicked][6];
       flexibility +=  game[counter][bu_clicked][7];
       mastery +=  game[counter][bu_clicked][8];
       problem_solving += game[counter][bu_clicked][9];
     }
    else if (isInside(mousePos,rect4)){
      bu_clicked = 3;
      leadership += game[counter][bu_clicked][0];
      social_skills += game[counter][bu_clicked][1];
       challenging += game[counter][bu_clicked][2];
       creativity += game[counter][bu_clicked][3];
       hands_on += game[counter][bu_clicked][4];
       new_idea +=  game[counter][bu_clicked][5];
       patience +=  game[counter][bu_clicked][6];
       flexibility +=  game[counter][bu_clicked][7];
       mastery +=  game[counter][bu_clicked][8];
       problem_solving += game[counter][bu_clicked][9];
    }
    else{
      alert('You didn\'t click an option! ');
      b_count --;
      counter --;
    }
    counter ++;
    if(counter ==5){
      ending();
    }

  }

  // else{
  //   ending();
  // }
  console.log("counter ", counter);

    //counter++;
  // }
  console.log("leadership ", leadership);
  console.log("problem ", problem_solving);
  localStorage.setItem("leadership", leadership);
  // var obj = {""}
  // localStorage.setItem('myStorage', JSON.stringify(obj));




}, false);
