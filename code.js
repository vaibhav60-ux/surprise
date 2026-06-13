let unlocked = false;

/* LOGIN */
function unlockSite(){

let password = document.getElementById("pass").value;

if(password === "10/01"){
document.getElementById("login").style.display = "none";
document.getElementById("giftScreen").style.display = "flex";
}
else{
alert("Wrong Password ❌");
}
}


/* GIFT */
function tapGift(){

let gift = document.getElementById("giftWrap");
let q = document.getElementById("questionBox");
let text = document.getElementById("giftText");
let lid = document.getElementById("lid");

if(!unlocked){
gift.classList.add("shake");
q.style.display = "block";
return;
}

lid.classList.add("open");

setTimeout(()=>{
document.getElementById("giftScreen").style.display="none";
document.getElementById("final").style.display="flex";
playMusic();
startMemories();
},1000);

}


/* ANSWER */
function checkAnswer(){

let a = document.getElementById("answer").value.trim().toLowerCase();

if(a==="27/08"){
unlocked = true;
document.getElementById("giftText").innerHTML="Correct ❤️ Tap Again";
}
else{
alert("Wrong Answer ❌");
}
}


/* MUSIC */
function playMusic(){
document.getElementById("bgMusic").play();
}


/* FLASH PHOTOS */
function startMemories(){

let photos = document.querySelectorAll("#photos img");
let i=0;

document.getElementById("photos").style.display="grid";

function showNext(){

if(i>=photos.length){
document.getElementById("message").style.display="block";
document.getElementById("albumSection").style.display="block";
return;
}

let img = photos[i];
img.style.display="block";
img.classList.add("flash");

i++;
setTimeout(showNext,300);
}

showNext();
}


/* VIEWER */
document.querySelectorAll("#photos img").forEach(img=>{
img.onclick=()=>{
document.getElementById("viewer").style.display="flex";
document.getElementById("fullPhoto").src=img.src;
}
});

function closePhoto(){
document.getElementById("viewer").style.display="none";
}


/* ALBUM */
function openAlbum(){
document.getElementById("albumPhotos").style.display="block";
}