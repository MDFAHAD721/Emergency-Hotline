





// Heart count function 
const hearts = document.getElementsByClassName("click-heart");

for(const heart of hearts){
    heart.addEventListener("click",function(){
        const count = parseInt(document.getElementById("heart-counter").innerText);

        const newCount = count + 1;

        document.getElementById("heart-counter").innerText = newCount;
    })
}


