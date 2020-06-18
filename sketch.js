var e1, e2, e3, e4, e5, e6;
var enemy = [e1, e2, e3, e4, e5, e6];

var player;

var a, b, c, d, e, f, g, h, i, j, k, l, m, n;

var gameState = "play";

var life = 200;

function setup(){
  canvas = createCanvas(200, 200);

  a = 200;
  b = 200;

  c = 200;
  d = 200;

  e = 200;
  f = 200;

  g = 200;
  h = 200;

  i = 200;
  j = 200;

  k = 200;
  l = 200;

  m = 100;
  n = 100;
}

function draw(){
  background(0);

  text(life, m - 10, n - 17);

  fill(0);
  stroke(255);
  strokeWeight(2);
    
  e1 = ellipse(a, b, 20, 20);
  e2 = ellipse(c, d, 20, 20);
  e3 = ellipse(e, f, 20, 20);
  e4 = ellipse(g, h, 20, 20);
  e5 = ellipse(i, j, 20, 20);
  e6 = ellipse(k, l, 20, 20);

  fill("red");
  stroke("yellow");
  strokeWeight(3);

  player = ellipse(m, n, 20, 20);

    if(keyDown("up")) {
      n -= 2;
    }

    if(keyDown("down")) {
      n += 2;
    }

    if(keyDown("right")) {
      m += 2;
    }

    if(keyDown("left")) {
      m -= 2;
    }
      
    a -= 2;
    b -= 2;
    c -= 2;
    d -= 2;
    e -= 2;
    f -= 2;
    g -= 2;
    h -= 2;
    i -= 2;
    j -= 2;
    k -= 2;
    l -= 2;

    if(a < 0) {
      a = 200;
      b = random(1, 199);
    }

    if(a > 200) {
      a = 0;
      b = random(1, 199);
    }

    if(b < 0) {
      b = 200;
      a = random(1, 199);
    }

    if(b > 200) {
      b = 0;
      a = random(1, 199);
    }

    if(c < 0) {
      c = 200;
      d = random(1, 199);
    }

    if(c > 200) {
      c = 0;
      d = random(1, 199);
    }

    if(d < 0) {
      d = 200;
      c = random(1, 199);
    }

    if(d > 200) {
      d = 0;
      c = random(1, 199);
    }

    if(e < 0) {
      e = 200;
      f = random(1, 199);
    }

    if(e > 200) {
      e = 0;
      f = random(1, 199);
    }

    if(f < 0) {
      f = 200;
      e = random(1, 199);
    }

    if(f > 200) {
      f = 0;
      e = random(1, 199);
    }

    if(g < 0) {
      g = 200;
      h = random(1, 199);
    }

    if(g > 200) {
      h = 0;
      h = random(1, 199);
    }

    if(h < 0) {
      h = 200;
      g = random(1, 199);
    }

    if(h > 200) {
      h = 0;
      g = random(1, 199);
    }

    if(i < 0) {
      i = 200;
      j = random(1, 199);
    }

    if(i > 200) {
      i = 0;
      j = random(1, 199);
    }

    if(j < 0) {
      j = 200;
      i = random(1, 199);
    }

    if(j > 200) {
      j = 0;
      i = random(1, 199);
    }

    if(k < 0) {
      k = 200;
      l = random(1, 199);
    }

    if(k > 200) {
      k = 0;
      l = random(1, 199);
    }

    if(l < 0) {
      l = 200;
      k = random(1, 199);
    }

    if(l > 200) {
      l = 0;
      k = random(1, 199);
    }

    if(m - a <= 20 / 2 + 20 / 2
      && a - m <= 20 / 2 + 20 / 2 
      && n - b <= 20 / 2 + 20 / 2
      && b - n <= 20 / 2 + 20 / 2 ) {
              
          life -= 5;
            
      }

    if(m - c <= 20 / 2 + 20 / 2
      && c - m <= 20 / 2 + 20 / 2 
      && n - d <= 20 / 2 + 20 / 2
      && d - n <= 20 / 2 + 20 / 2 ) {
              
          life -= 5;
            
      }

      if(m - e <= 20 / 2 + 20 / 2
        && e - m <= 20 / 2 + 20 / 2 
        && n - f <= 20 / 2 + 20 / 2
        && f - n <= 20 / 2 + 20 / 2 ) {
                
            life -= 5;
              
        }

      if(m - g <= 20 / 2 + 20 / 2
        && g - m <= 20 / 2 + 20 / 2 
        && n - h <= 20 / 2 + 20 / 2
        && h - n <= 20 / 2 + 20 / 2 ) {
                  
            life -= 5;
                
        }

      if(m - i <= 20 / 2 + 20 / 2
        && i - m <= 20 / 2 + 20 / 2 
        && n - j <= 20 / 2 + 20 / 2
        && j - n <= 20 / 2 + 20 / 2 ) {
                  
            life -= 5;
                
        }

      if(m - k <= 20 / 2 + 20 / 2
        && k - m <= 20 / 2 + 20 / 2 
        && n - l <= 20 / 2 + 20 / 2
        && l - n <= 20 / 2 + 20 / 2 ) {
                  
            life -= 5;
                
        }

    if(life <= 0) {
      m += 10000000000000000000000000000000000000000;
      n += 10000000000000000000000000000000000000000;

      fill("white");
      stroke("black");
      text("Come on, your so bad at this >:)", 10, 100);
    }

  console.log(gameState);

  drawSprites();
}