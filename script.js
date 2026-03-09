function openForm(){

document.getElementById("booking").style.bottom="0";

}

function closeForm(){

document.getElementById("booking").style.bottom="-100%";

}


function toggleMenu(){

var menu = document.getElementById("menu");

if(menu.style.display=="block"){

menu.style.display="none";

}

else{

menu.style.display="block";

}

}
document.getElementById("reviewForm").addEventListener("submit",function(e){

e.preventDefault();

var name=document.getElementById("clientName").value;

var review=document.getElementById("clientReview").value;

var reviewList=document.getElementById("reviewList");

var newReview=document.createElement("p");

newReview.innerText="⭐️⭐️⭐️⭐️⭐️ "+review+" – "+name;

reviewList.appendChild(newReview);

this.reset();

});

document.addEventListener("DOMContentLoaded", function(){

let stars = document.querySelectorAll(".star");
let ratingValue = document.getElementById("ratingValue");

stars.forEach((star,index)=>{

star.addEventListener("click",function(){

ratingValue.value=index+1;

stars.forEach((s,i)=>{

if(i<=index){
s.style.color="gold";
}
else{
s.style.color="#555";
}

});

});

});


document.getElementById("reviewForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("clientName").value;
let review=document.getElementById("clientReview").value;
let rating=ratingValue.value;

if(rating==""){
alert("Please select star rating");
return;
}

let reviewList=document.getElementById("reviewList");

let newReview=document.createElement("p");

let starsDisplay="";

for(let i=0;i<rating;i++){
starsDisplay+="★";
}
newReview.innerText = starsDisplay + " " + review + " – " + name;

reviewList.appendChild(newReview);
saveReviews();


stars.forEach(s=>s.style.color="#555");

ratingValue.value="";

});

});
function saveReviews(){

localStorage.setItem("reviews", document.getElementById("reviewList").innerHTML);

}

function loadReviews(){

let savedReviews = localStorage.getItem("reviews");

if(savedReviews){
document.getElementById("reviewList").innerHTML = savedReviews;
}

}

loadReviews();