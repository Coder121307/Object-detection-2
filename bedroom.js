status= "";

function preload(){
    img = loadImage("");
}

function setup(){
    canvas = createCanvas(640,300);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function modelLoaded(){
    status = true;
    console.log("Model Loaded! :)");
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}