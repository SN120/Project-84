canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 72;
car1_height = 35.7;
car1_img = "car1.png"
car1_x=2;
car1_y=10;

car2_width = 72;
car2_height = 35.7;
car2_img = "car2.png"
car2_x=2;
car2_y=160;

background_image = "racetrack.jpg"
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", myKedown);
function myKedown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        console.log("Car 1 up");
        car1up();
    }

    if(keyPressed == '40'){
        console.log("Car 1 down");
        car1down();
    }

    if(keyPressed == '37'){
        console.log("Car 1 left");
        car1left();
    }

    if(keyPressed == '39'){
        console.log("Car 1 right");
        car1right();
    }

    if(keyPressed == '87'){
        console.log("Car 2 up");
        car2up();
    }

    if(keyPressed == '83'){
        console.log("Car 2 down");
        car2down();
    }

    if(keyPressed == '65'){
        console.log("Car 2 left");
        car2left();
    }

    if(keyPressed == '68'){
        console.log("Car 2 right");
        car2right();
    }
}