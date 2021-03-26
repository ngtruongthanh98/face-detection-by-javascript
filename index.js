const video = document.getElementById("videoElm");

function getCameraStream() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {} }).then((stream) => {
            video.srcObject = stream;
        });
    }
}

getCameraStream();