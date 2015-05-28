var img;  // Declare variable 'img'.

var WIDTH = 700,
    HEIGHT = 450,
    K = 7,
    NEIGHB = 5;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    fill(10, 10, 10);
    //rect(0, 0, WIDTH, HEIGHT);
    loadImage("putin.jpg", drawImg);  // Load the image
}

function getNeighbors(pixels, c, x, y, r) {
    var result = [];
    for (var i = max(0, x - r); i <= min(x + r, WIDTH / K - 1); i++)
        for (var j = max(0, y - r); j <= min(y + r, HEIGHT / K - 1); j++)
            if (i != x && j != y && pixels[i][j][c] > 0)
                result.push({
                    x: i,
                    y: j
                });
    return result;
}

function drawImg(loadedImg) {
    //image(loadedImg, 0, 0, WIDTH, HEIGHT);

    img = loadedImg;
    img.resize(WIDTH / K, HEIGHT / K);

    pixels = [];
    for (i = 0; i < WIDTH / K; i++) {
        pixels[i] = [];
        for (j = 0; j < HEIGHT / K; j++) {
            var r = floor((255 - brightness(color(img.get(i, j)))) / 10),
                g = floor((255 - img.get(i, j)[1]) / 10),
                b = floor((255 - img.get(i, j)[2]) / 10);
            pixels[i][j] = [r, g, b];
        }
    }

    noFill();
    colorMode(HSB, 255);

    stroke(0, 0, 255, 15);
    beginShape();

    var x = 0;//WIDTH / / 2,
        y = 0;//HEIGHT / 2;

    var counter = 0;

    while (true) {
        if (counter++ % 100 == 0)
            console.log(counter);

        curveVertex((x + random() - 0.5) * K, (y + random() - 0.5) * K);

        var i = 0;
        var neighbors = []
        while (neighbors.length == 0 && i * NEIGHB < WIDTH / K) {
            i++;
            neighbors = getNeighbors(pixels, 0, x, y, i * NEIGHB);
        }

        if (neighbors.length == 0)
            break;

        var j = floor(random(neighbors.length));
        x = neighbors[j].x;
        y = neighbors[j].y;
        pixels[x][y][0]--;
    }

    endShape();

    console.log('done');
}

function draw() {
}