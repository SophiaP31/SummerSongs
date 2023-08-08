let songlist =
  [
    'Cruel Summer',
    'Barbie World',
    'Vampire',
    'Seven',
    'Kokomo',
    'Super Shy',
    'Steal my Sunshine',
    'Snooze',
    'Anti-Hero',
    'zombie pop',
    'Deep - Summer Walker',
    'Seven',
    'Snooze',
    'Loneliest',
    'Kids',
    'Fearless',
    'Snooze'
    'Shut Up and Dance',
    'Snooze',
    'Cupid'
  ];

let index = 0;
let y_value = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300);
  fill("pink");
  textSize(40);
  text("The top songs of the summer are...", 10, 30)
}

function draw() {
  frameRate(2);
  fill("blue");
  textSize(34);
  let x_value = random(10, 300);
  text(songlist[index], x_value, y_value);
  y_value += 30;
  index += 1;
  if (index == songlist.length){
    noLoop();
  }
}
