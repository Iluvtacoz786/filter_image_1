var noseX=""
var noseY=""
var clown_nose=""
function preload(){
clown_nose=loadImage("https://i.postimg.cc/wBjvFS1B/Clown-nose.png")
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    console.log(ml5.version);
    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on("pose",gotPose)
}
function draw(){
    image(video,0,0,500)
    image(clown_nose,noseX,noseY,50,50)
    //fill("#662e9e")
    //circle(noseX,noseY,50)
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPose(result){
    if (result.length>0){
        console.log(result)
        noseX=result[0].pose.nose.x
        noseX=noseX-70
        console.log(noseX)
        noseY=result[0].pose.nose.y
        console.log(noseY)
    }
}

