var img;  // Declare variable 'img'.

var WIDTH = 650,
    HEIGHT = 400,
    yStep = 5,
    coefLength = 14,
    coef = [];

for (var i = 0; i < coefLength; i++)
    coef[i] = Math.pow((i / (coefLength - 1) - 0.5), 3);

console.log(coef);


function setup() {
    createCanvas(WIDTH, HEIGHT);
    loadImage("nf.jpg", drawImg);  // Load the image
}

function drawImg(loadedImg) {
    img = loadedImg;
    img.resize(WIDTH, HEIGHT);

    //image(img, 0, 0, WIDTH, HEIGHT);

    for (var i = 0; i < HEIGHT; i += yStep) {
        drawLine(i, 0);
        drawLine(i, 1);
        drawLine(i, 2);
    }
}

function drawLine(y, color) {
    var cX = 0,
        ySpeed = 0,
        cY = y;

    while (cX < WIDTH - coef.length - 1) {
        var lastX = cX,
            lastY = cY;

        var sum = 0;
        for (i = 0; i < coef.length; i++)
            sum += coef[i] * img.get(cX + i, y)[color];
        ySpeed = sum / 10;// + (Math.random() - 0.5) / 3;
        cX += 1;
        cY += ySpeed;

        stroke(255 * (color == 0), 255 * (color == 1), 255 * (color == 2), 30);
        line(lastX, lastY, cX, cY);
    }
}

function draw() {
}