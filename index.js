const video = document.getElementById("videoElm");

const loadFaceAPI = async() => {
    await faceapi.nets.faceLandmark68Net.loadFromUri('./models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('./models');
    await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
    await faceapi.nets.faceExpressionNet.loadFromUri('./models');
}

function getCameraStream() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {} }).then((stream) => {
            video.srcObject = stream;
        });
    }
}

loadFaceAPI().then(getCameraStream);

