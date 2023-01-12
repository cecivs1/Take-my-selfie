var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;

    if(Content == "take my selfie"){
        speak();
    }
    
 
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you selfie in 8 seconds, say cheese!";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 8000 );



}


Webcam.set({
    width: 400,
    height:300,
    image_format: 'png',
    png_quality:120
});
 
camera = document.getElementById("camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src=" ' + data_uri + ' " > ';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}