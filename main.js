difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('PoseNet is Initialised')
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() 
{
    background("#6C91C2");
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Vetrivel', 50, 400);

}