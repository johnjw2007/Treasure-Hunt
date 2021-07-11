var startPage, startPageImage, start, startImage;
var cave, caveImage;
var carpet, carpetImage;
var endPage, endPageImage, gameOver, gameOverImage;
var gameState;
var question1, question2, question3, question4, question5, question6;
var score;
var q1, q2, q3, q4, q5, q6;
function preload() {
  startPageImage = loadImage("Start Page.jpg");
  startImage = loadImage("Start.png");
  caveImage = loadImage("ICave of wonder.jpg")
  carpetImage = loadImage("Carpet.png")
  endPageImage = loadImage("End page.jpg")
  gameOverImage = loadImage("Game Over.png")
}

function setup() {
  createCanvas(960,540);
  startPage = createSprite(480, 270)
  startPage.addImage(startPageImage)
  startPage.scale = 0.5;
  start = createSprite(750, 450)
  start.addImage(startImage)
  start.scale = 0.5;
  cave = createSprite(480, 270)
  cave.addImage(caveImage)
  cave.scale = 0.5;
  endPage = createSprite(480, 270);
  endPage.addImage(endPageImage);
  endPage.scale = 0.78;
  gameOver = createSprite(480, 490);
  gameOver.addImage(gameOverImage)
  gameOver.scale = 1
  question1 = new Input1();
  question2 = new Input2();
  question3 = new Input3();
  question4 = new Input4();
  question5 = new Input5();
  question6 = new Input6();
  score = 0;
  q1 = 0;
  q2 = 0;
  q3 = 0;
  q4 = 0;
  q5 = 0;
  q6 = 0;
  gameState = "start";
  button = createButton('Submit')
}

function draw() {
  background("white"); 
  console.log(score)
  console.log(gameState + score) 
  console.log(gameState)
  if(gameState === "start"){
    startPage.visible = true;
    start.visible = true;
    cave.visible = false;
    endPage.visible = false
    gameOver.visible = false;
    question1.hide();
    question2.hide();
    question3.hide();
    question4.hide();
    question5.hide();
    question6.hide();
    button.hide();
    if(mousePressedOver(start)){
      gameState = "playing";
    }
    }
    if(gameState === "playing")
    {
      startPage.visible = false;
      start.visible = false;
      cave.visible = true;
      endPage.visible = false;
      gameOver.visible = false;
      question1.display();
      question2.display();
      question3.display();
      question4.display();
      question5.display();
      question6.display();
      button.show();
      button.position(380, 480)
      button.mousePressed(() => {
        if(q1 === 0){
          question1.check();
          q1+=1;
        }
        if(q2 === 0){
          question2.check();
          q2+=1;
        }
        if(q3 === 0){
          question3.check();
          q3+=1;
        }
        if(q4 === 0){
          question4.check();
          q4+=1;
        }
        if(q5 === 0){
          question5.check();
          q5+=5;
        }
        if(q6 === 0){
          question6.check();
          q6+=1;
        }
        if(score === 6){
          gameState = "end";
        }
      })
    }
    if(gameState === "end"){
      question1.hide();
      question2.hide();
      question3.hide();
      question4.hide();
      question5.hide();
      button.hide();
      question6.hide();
      startPage.visible = false;
      start.visible = false;
      cave.visible = false;
      endPage.visible = true;
      gameOver.visible = true;
  }
  drawSprites();
}