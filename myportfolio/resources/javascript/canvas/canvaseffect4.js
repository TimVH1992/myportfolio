const canvas = document.getElementById('canvas');

const c = canvas.getContext('2d');

const image = new Image();
image.src = "./mario.jpeg";

c.drawImage(image, 0, 0, 50, 50);