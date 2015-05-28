var img;  // Declare variable 'img'.

var WIDTH = 650,
    HEIGHT = 300,
    START_R = 10,
    STEP = 30,
    COUNT = 20,
    TRACE_LENGTH = 40;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    fill(10, 10, 10);
    rect(0, 0, WIDTH, HEIGHT);
    drawBg();
}

function coordsOfPoint(point, t) {
    return {
        x: WIDTH / 2 / Math.PI * point.angle,
        y: point.trace[t],
    }
    /*return {
        x: WIDTH / 2 + point.trace[t] * sin(point.angle),
        y: HEIGHT / 2 + point.trace[t] * cos(point.angle),
    }*/
}

function setTrace(point, step) {
    point.trace = [];
    for (var i = 0; i < TRACE_LENGTH; i++) {
        point.trace.push(point.r + step * (1 - pow(i / TRACE_LENGTH, 2)));
    }
    point.r += step;
}

function drawBg() {
    var points = [];
    for (var i = 0; i < COUNT; i++)
        points.push({
            angle: Math.PI * 2 / COUNT * i,
            r: START_R,
        });

    noFill();
    var avgR = START_R;

    for (var step = 0; step < STEP; step++) {
        avgR += STEP;
        for (var i = 0; i < points.length; i++) {
            setTrace(points[i], STEP + random(avgR / 15));
        }

        stroke(random(255), random(255), random(255), 30);

        for (var t = 0; t < TRACE_LENGTH; t++) {
            beginShape();

            var p = coordsOfPoint(points[0], t);
            curveVertex(p.x, p.y);

            for (var i = 0; i < points.length; i++) {
                var p = coordsOfPoint(points[i % points.length], t);
                curveVertex(p.x, p.y);
                //p = nextP;
            }
            curveVertex(p.x, p.y);

            endShape();
        }
    }
}

function draw() {
}