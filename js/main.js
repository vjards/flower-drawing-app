//CANVAS SETTINGS
const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(100, 100, 5, 0, 2* Math.PI);
ctx.closePath();
ctx.fill();

ctx.fillStyle="red";