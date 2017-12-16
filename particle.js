function drawParticles() {

    for (var i = 0; i < particles.length; i++) {
        var posi = particles[i][0];
        for (var j = i + 1; j < particles.length; j++) {
            var posj = particles[j][0];
            var dist = posi.dist(posj);
            if (dist <= particleBreakDistance) {
                strokeWeight(1-(dist/particleBreakDistance));
                stroke(hueVal,100,20, 255 - 255*dist/particleBreakDistance );
                line(posi.x, posi.y, posj.x, posj.y);
            }
        }
    }

    fill(255, 255, 255, 200);
    noStroke();

    var mousePos = createVector(mouseX, mouseY);

    for (var i = 0; i < particles.length; i++) {
        var pos = particles[i][0];
        var speed = particles[i][1];
        var randSize = 3 + random(4);
        stroke(hueVal,100,30);
        strokeWeight(1);
        //point(pos.x, pos.y);
        pos.add(speed);

        var distToMouse = mousePos.dist(pos);

        // if (distToMouse < repelDist) {
        //     var repel = createVector(pos.x - mousePos.x, pos.y - mousePos.y);
        //     var distFrac = (repelDist - distToMouse) / repelDist
        //     repel.setMag(50 * distFrac * distFrac);
        //     pos.add(repel);
        // }

        if (pos.x > width) {
            pos.x -= width;
            pos.y += random(height / 10) - height / 20;
        }
        else if (pos.x < 0) {
            pos.x += width;
            pos.y += random(height / 10) - height / 20;
        }

        if (pos.y > height) {
            pos.y -= height;
            pos.x += random(width / 10) - width / 20;
        }
        else if (pos.y < 0) {
            pos.y += height;
            pos.x += random(width / 10) - width / 20;
        }
    }

}
