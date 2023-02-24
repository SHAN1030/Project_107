function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OlfV9cUoq/model.json",modelReady);  
}

function modelReady(){
    console.log("MODEL IS LOADED!!");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("GOT RESULT");
}