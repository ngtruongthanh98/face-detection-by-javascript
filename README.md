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

![Import face-api.min.js](https://i.imgur.com/acGjzLx.png)