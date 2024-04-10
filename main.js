function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10, 50);

    canvas = createCanvas(400,400);
    canvas.position(430, 130);

    poseNet = ml5.poseNet(video,  modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#969A97');
}
function gotPoses(results, error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        console.log("rightwrist_x = "+results[0].pose.rightwrist.x+ "rightwrist_y = "+results[0].pose.rightwrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftwrist.x+ "leftwrist_y = "+results[0].pose.leftwrist.y);
    }
}