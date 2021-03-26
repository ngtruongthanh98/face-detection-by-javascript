# face-detection-by-javascript
Use library face-api.js based on Tensorflow https://github.com/justadudewhohacks/face-api.js/

Create index.html, style.css, index.js 

![index.html](https://i.imgur.com/rXUjrOy.png)

Edit html file:

![index.html](https://i.imgur.com/5C4b1W4.png)

Embed video from webcam to the website:

![Video](https://i.imgur.com/rzOG5n1.png)

Embed style.css to index.html:

![Embed CSS](https://i.imgur.com/YXrG9XO.png)

I add the following code to style.css:

![style.css](https://i.imgur.com/nNvatFM.png)

Embed index.js to index.html:

![Embed JS](https://i.imgur.com/ujW7Lpp.png)

____________________________________________

In index.js:

I set an ID for the video, videoElm. I use getElementById and stored it to video.

![video element](https://i.imgur.com/I2hfdYO.png)

Get data from the browser, if the webcam does not open yet. require the user to allow the permission.

![video permission](https://i.imgur.com/5CnbfMA.png)

I load the video from webcam to the website:

![Video loading](https://i.imgur.com/LQP7Nls.png)

You can you Live Server Extension in VsCode:

![Live Server](https://i.imgur.com/pk6k5Xe.png)

Then, the website opened like this:

![Video stream](https://i.imgur.com/yunRge4.png)

_______________________________________________

Download package face-api.js from this repo: `https://github.com/justadudewhohacks/face-api.js/`

Copy file face-api.min.js from folder dist into our project

![face-api.min.js](https://i.imgur.com/iTpiHUn.png)

For face detection, we need face detection model. In the face.api.js repo, there is a model for face detecion. We copy folder name weights to our project. Change its name to models.

![Import the face detection models](https://i.imgur.com/acGjzLx.png)

Import face-api.min.js to index.html file. Remember that you should put face-api.min.js before index.js because the index.html load from top to bottom.

![Import face-api.min.js](https://i.imgur.com/z06X0Fu.png)

___________________________________________________

Come back to index.js:

Create funnction getCameraStream() and put the get camera steam condition into it.

```
const video = document.getElementById("videoElm");

function getCameraStream() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {} }).then((stream) => {
            video.srcObject = stream;
        });
    }
}

getCameraStream();
```

We load face api via async function:

![loadFaceAPI()](https://i.imgur.com/GlN8nfN.png)

```
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
```

After load face API function, we call function getCameraStream(). At this moment, we can load models face-api

Add canvas to your your website:

```
video.addEventListener('playing', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
});
```

![Canvas](https://i.imgur.com/5cMzoyr.png) 

We need to move the canvas to in front of the video, in style.css:
```
canvas {
    position: absolute;
}
```

![Move canvas to front](https://i.imgur.com/Xm71Qwy.png)

setInterval() for loading the model after 300ms:

```
video.addEventListener('playing', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);

    setInterval(async() => {
        const detects = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
        console.log('detects', detects);
    }, 300);
});
```

As you can see, the models can detect my face:

![Face detection](https://i.imgur.com/qIVYFqi.png)


We draw the detected face via the canvas. 

```
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
```

![Draw face detection](https://i.imgur.com/e2qlEs8.png)



