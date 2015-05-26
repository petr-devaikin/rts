var img;  // Declare variable 'img'.

var WIDTH = 650,
    HEIGHT = 400,
    yStep = 5;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    loadImage("cl.jpg", drawImg);  // Load the image
}

function drawImg(loadedImg) {
    img = loadedImg;
    img.resize(WIDTH, HEIGHT);

    //image(img, 0, 0, WIDTH, HEIGHT);

    for (var i = 0; i < HEIGHT; i += yStep)
        drawLine(i);
}

function drawLine(y) {
    var cX = 0,
        ySpeed = 0,
        cY = y;

    var curColor = color(img.get(cX, cY));
    console.log();
    while (cX < WIDTH - 1) {
        var lastX = cX,
            lastY = cY;

        var nextColor = color(img.get(cX + 1, y));
        ySpeed = (brightness(nextColor) - brightness(curColor)) / 10 + (Math.random() - 0.5) / 3;
        cX += 1;
        cY += ySpeed;
        curColor = nextColor;

        stroke(255, 0, 0, 50);
        line(lastX, lastY, cX, cY);
    }
}

function draw() {
}