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

video.addEventListener('playing', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);

    const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight
    }

    setInterval(async() => {
        const detects = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
        
        const resizeDetects = faceapi.resizeResults(detects, displaySize);
        faceapi.draw.drawDetections(canvas, resizeDetects);
    }, 300);
});

loadFaceAPI().then(getCameraStream);

