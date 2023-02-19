song1 = "";
song2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
    song1 = loadSound("Doraemon-Title-Song.mp3");
    song2 = loadSound("Shinchan-Original-Song.mp3");
}
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses);
}
function modelloaded(){
    console.log("PoseNet is Initialised");
}
function draw(){
    image(video,0,0,600,600);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("LeftWrist X = "+ leftwristX+ " LeftWrist Y = " +leftwristY);
        
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("RightWrist X = "+ rightwristX+ " RightWrist Y = " +rightwristY);
    }
}