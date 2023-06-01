pls1=0
pls2=0
tamanho=10

function setup(){
    canvas=createCanvas(500,300)
 video=createCapture(VIDEO)
 video.size(500,300)

 background('white')

 leopard= ml5.poseNet(video,modelLoaded)
 leopard.on('pose',gotPose)
}
function modelLoaded(){
    console.log('leopard esta pronto para identificar pose')
}
function gotPose(r){
if(r.length>0){
    pls1=r[0].pose.rightWrist.x;
    pls2=r[0].pose.leftWrist.x

    if(r[0].pose.leftWrist.y>280){
        tamanho=10;

    }else{
        tamanho=pls2-pls1
    }
}
}
function but(){
    background('white')
    document.getElementById('inpu').value=''
}

function draw(){
canvas.position(windowWidth*0.6,windowHeight/2-50)
textSize(floor(tamanho/2))
background(255)
var a1=document.getElementById("inpu").value;
text(a1,190,150)
document.getElementById('tama').innerHTML= Math.floor(tamanho)
}


