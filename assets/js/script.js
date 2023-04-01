// get the container and oneko image elements
const container = document.getElementById('container');
const oneko = document.getElementById('oneko');
const imageDirectory = "assets/images/";

const thresholdDistance = 25;
let actionPerformed = false;

// set the speed of the oneko image
const speed = 0.02;

// set the container's center point
const centerX = container.clientWidth / 2;
const centerY = container.clientHeight / 2;

// set the initial position of the oneko image to the center of the container
let x = centerX;
let y = centerY;

let direction = "";
let animationFrame = 0;
const animationSpeed = 10;
// set the animation loop
function animate() {
  // calculate the distance between the cursor and the oneko image
  const dx = container.mouseX - x;
  const dy = container.mouseY - y;
  const distance = Math.sqrt(dx*dx + dy*dy);

  // move the oneko image towards the cursor
  if (distance > 1) {
    x += dx * speed;
    y += dy * speed;
  }

  if(distance < thresholdDistance) {
    if(!actionPerformed) {
      actionPerformed = true;
      direction = "SIT";
      chooseImage();
    }
  } else {
    actionPerformed = false;
  }

  // set the new position of the oneko image
  oneko.style.transform = `translate(${x - oneko.width / 2}px, ${y - oneko.height / 2}px)`;

  // choose the image based on the direction of movement
  const oldDirection = direction;
  // Calculate the angle between the current position and the center point
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  if(!actionPerformed) {
    console.log(dx, dy)

    // Determine the direction based on the angle
    if (angle >= -22.5 && angle < 22.5) {
      direction = "E";
    } else if (angle >= 22.5 && angle < 67.5) {
      direction = "SE";
    } else if (angle >= 67.5 && angle < 112.5) {
      direction = "S";
    } else if (angle >= 112.5 && angle < 157.5) {
      direction = "SW";
    } else if (angle >= 157.5 || angle < -157.5) {
      direction = "W";
    } else if (angle >= -157.5 && angle < -112.5) {
      direction = "NW";
    } else if (angle >= -112.5 && angle < -67.5) {
      direction = "N";
    } else if (angle >= -67.5 && angle < -22.5) {
      direction = "NE";
    }

  }
  
  if (direction !== oldDirection) {
    animationFrame = 0;
    chooseImage();
  }else {
    animationFrame++;
    if(animationFrame >= animationSpeed){
      animationFrame = 0;
    }
    chooseImage();
  }

  // request the next animation frame
  requestAnimationFrame(animate);
}

// add mouse move event listener to the container
container.addEventListener('mousemove', e => {
  container.mouseX = e.clientX;
  container.mouseY = e.clientY;
});

oneko.addEventListener('click', function() {
  console.log("e")
  actionPerformed = true;
  direction = "PET";
  chooseImage();
});

function chooseImage() {
  let imageIndex = 0;
  if (direction === "N") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 1;
    if(imageIndex > 2) {
      imageIndex = 1;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "NE") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 3;
    if(imageIndex > 4) {
      imageIndex = 3;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "E") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 5;
    if(imageIndex > 6) {
      imageIndex = 5;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "SE") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 7;
    if(imageIndex > 8) {
      imageIndex = 7;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "S") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 9;
    if(imageIndex > 10) {
      imageIndex = 9;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "SW") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 11;
    if(imageIndex > 12) {
      imageIndex = 11;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "W") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 13;
    if(imageIndex > 14) {
      imageIndex = 13;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "NW") {
    imageIndex = Math.floor(animationFrame / (animationSpeed / 2)) + 15;
    if(imageIndex > 16) {
      imageIndex = 15;
    }
    oneko.src = imageDirectory + imageIndex + ".GIF";
  } else if (direction === "SIT"){
    oneko.src = imageDirectory + "31.GIF";
  } else if(direction === "PET"){
    oneko.src = imageDirectory + "31.GIF";
  } else {
    oneko.src = imageDirectory + "1.GIF";
  }
  oneko.draggable = false;
}


// start the animation loop
animate();
