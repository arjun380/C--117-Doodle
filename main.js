function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {

    background("white");
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    //set stroke weight to 13
    strokeWeight(13);
    //set stroke color to black
    stroke(0);
    //If mouseIsPressed
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('lable').innerHTML = 'Label: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + "%";

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);



}








