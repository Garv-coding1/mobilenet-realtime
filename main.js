function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet', modelLoaded);
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

function modelLoaded() {
  console.log("Model Loaded!");
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("result_object").innerHTML= results[0].label;
    multiply = results[0].confidence*100;
    deci = multiply.toFixed(1);
    document.getElementById("result_accuracy").innerHTML= deci + "%";
  }
}