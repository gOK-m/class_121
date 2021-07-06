function preload(){

}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", model_loaded);
}
function draw(){
    image(video, 0, 0, 400, 300);
    classifier.classify(video, gotResult);
}
function model_loaded(){
    console.log("model loaded!");
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("accuracy_value").innerHTML = result[0].confidence.toFixed(3);
    }
}