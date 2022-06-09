noseX =0;
noseY=0;

function preload(){
  clownimg=loadImage("https://i.postimg.cc/BnLJFbbX/Clown-Nose.png");
}
function setup(){
  canvas = createCanvas(400,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  posenet = ml5.poseNet(video, modelloaded)
  posenet.on("pose",gotresult)


}
function modelloaded(){
  console.log("pose-net is working");
}
function gotresult(results){
  if(results.length > 0){
    console.log(results)
    noseX=results[0].pose.nose.x-15;
    noseY=results[0].pose.nose.y-10;
    console.log("nose x ="+noseX )
    console.log("nose y ="+ noseY)
  }
}
function draw(){
  image(video,0,0,400,400);
  
  
  image(clownimg,noseX,noseY,30,30);

}
function snapshot(){
    save("img.jpg")
}