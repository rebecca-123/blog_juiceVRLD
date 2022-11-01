---
toc: true
layout: post
description: .\\
categories: [pbl]
title: Tourist Sites
image: /images/hollywood.jpg
---
<!-- HTML table fragment for page -->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<style>
    #board {
        text-decoration: none;
        color: #000;
        background: black;
        display: block;
        height: 500px;
        width: 800px;
        padding: 1em;
        margin: 1em;
        justify-content: center;
    }
    .pictures{
        width: auto;
        height: 500px;
    }
    .grayscale{
        filter: grayscale(100%);
    }
    .blur{
        filter: blur(2px);
    }
    .btn-group{
        margin-right: 5px;
    }
</style>
<body>


<h1 style="font-size:45px; color:#e0e1dd;">Random Picture Generator</h1>


<button onclick="newPicture()" class="btn-group" style="margin-right: 30px;"> New Picture</button>
    <button onclick="grayIt()" class="btn-group"> Grayscale</button>
    <button onclick="blurIt()" class="btn-group"> Blur</button>

<br/>


<div id="board">
<img id="pictureDisplay" class="pictures" src="../images/{{files}}">

</div>

<script>document.body.style.backgroundColor = "D5A6A6"; </script>

</body>
</html>

<script>
var pictures = [
    "packing.jpg",
    "hollywood.jpg",
    "plain-hollywood.jpg",
    "s1.png",
    "s2.png",
    "s3.png",
    "s4.png",
    "s5.png",
    "s5.png",
    "s6.png"
]

function newPicture() {
    // get a random factor, e.g 0-1
    var randomFactor = Math.random();
    // get a random seed base on the length of given array, e.g it is pictures in this case
    var randomSeed = randomFactor * pictures.length;
    // round down the randomSeed to a random number int, e.g 0~9
    // The Math.floor() function returns the largest integer less than or equal to a given number
    var randomNumber = Math.floor(randomSeed);
    document.getElementById('pictureDisplay').src = "../images/" + pictures[randomNumber];
}

function grayIt(){
    if($('#pictureDisplay').hasClass("blur")) $('#pictureDisplay').removeClass('blur');
    if($('#pictureDisplay').hasClass("grayscale")) $('#pictureDisplay').removeClass('grayscale');
    else $('#pictureDisplay').addClass('grayscale');
}

function blurIt(){
    if($('#pictureDisplay').hasClass("grayscale")) $('#pictureDisplay').removeClass('grayscale');
    if($('#pictureDisplay').hasClass("blur")) $('#pictureDisplay').removeClass('blur');
    else $('#pictureDisplay').addClass('blur');
}

</script>