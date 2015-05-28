var img;  // Declare variable 'img'.

var WIDTH = 800,
    HEIGHT = 600;

var START_RADIUS = 1,
    END_RADIUS = 400,
    LINE_WIDTH = 5,
    STEP = 2;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    fill('black');
    rect(0, 0, WIDTH, HEIGHT);
    loadImage("aw.jpg", drawImg);  // Load the image
}

function drawImg(loadedImg) {
    img = loadedImg;
    img.resize(WIDTH, HEIGHT);

    //image(img, 0, 0, WIDTH, HEIGHT);

    var r = START_RADIUS,
        angle = 0,
        x = WIDTH / 2,
        y = HEIGHT / 2 - r;

    while (r < END_RADIUS) {
        var dAngle = STEP / r;
        var dR = LINE_WIDTH / 2 / Math.PI * dAngle;

        angle += dAngle;
        r += dR;

        var c = color(img.get(x, y));
        var noize = saturation(c) / 100 + Math.random();

        var nextX = WIDTH / 2 + Math.sin(angle) * (r + noize),
            nextY = HEIGHT / 2 - Math.cos(angle) * (r + noize);

        var weight = brightness(c) / 80 + Math.random() / 10 - 1.5;
        stroke(255, 255, 255, 100);
        strokeWeight(weight);
        line(x, y, nextX, nextY);

        /*for (var i = 0; i < 3; i++) {
            var weight = img.get(x, y)[i] / 100 + Math.random() + 7;
            stroke(255 * (i == 0), 255 * (i == 1), 255 * (i == 2), 10);
            strokeWeight(weight);
            line(x, y, nextX, nextY);
        }*/

        x = nextX;
        y = nextY;
    }

    console.log('done');
}

function draw() {
}