
const callHistoryData = [];

// Heart count function 
const hearts = document.getElementsByClassName("click-heart");

for(const heart of hearts){
    heart.addEventListener("click",function(){
        const heartCount = parseInt(document.getElementById("heart-counter").innerText);

        const newCount = heartCount + 1;

        document.getElementById("heart-counter").innerText = newCount;
    })
}

// Call button function
const buttons = document.getElementsByClassName("call-button");

for(const button of buttons){
    button.addEventListener("click",function(){

    const coinCount = parseInt(document.getElementById("coin-counter").innerText);

    const card = button.closest(".cards");

    const subTitle = card.querySelector(".card-subtitle").textContent;

    const cardNum = card.querySelector(".card-number").textContent;

    if(coinCount < 20){
        alert("Not enough coins to make a call");
        return;
    }

    alert(`Calling ${subTitle} ${cardNum}`); 

    const newCoinCount = coinCount - 20;

    document.getElementById("coin-counter").innerText = newCoinCount;

    const data = {
        title : subTitle,
        num : cardNum,
        date : new Date().toLocaleTimeString()
    }

    callHistoryData.unshift(data);

    showHistory();

    })

}

document.getElementById("clear-button").addEventListener("click",function(){
    callHistoryData.length = 0;
    document.getElementById("history-container").innerHTML = "";
})

function showHistory(){
    const historyContainer = document.getElementById("history-container");

    historyContainer.innerHTML = "";

    for(const data of callHistoryData){
        const div = document.createElement("div");

        div.innerHTML= `
             <div class="mx-6 mb-3 py-2 mt-2 flex justify-between items-center rounded-xl bg-[#FAFAFA]">
                <div class="ml-2">
                    <p class="inter-font font-semibold text-[18px] mb-3">${data.title}</p>
                    <p class="hind-madurai-font text-[#5C5C5C] text-[18px]">${data.num}</p>
                </div>
                <div>
                    <p class="hind-madurai-font text-[18px] mr-2">
                        ${data.date}
                    </p>
                </div>
            </div>
        `

        historyContainer.appendChild(div);
    }
}
