noseX = 0;
noseY = 0;
difference = 0;
right_w_x = 0;
left_w_x = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    document.getElementById("square_sides").innerHTML = "The Width and Height of the Square will be:" + difference;
    background('#eec321');
    fill('#c92243');
    stroke('#14a1ba');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("PoseNet is Initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        left_w_x = results[0].pose.leftWrist.x;
        right_w_x = results[0].pose.rightWrist.x;
        difference = floor(left_w_x - right_w_x);
        console.log("Right Wrist: " + right_w_x);
        console.log("Left Wrist: " + left_w_x);
        console.log("Difference: " + difference);
    }
}
