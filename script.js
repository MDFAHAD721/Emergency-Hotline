
const callHistoryData = [];

// funtion to get innertext
function getInnerText(value){
    const innerText = parseInt(document.getElementById(value).innerText);
    return innerText; 
}
// function to set innertext
function setInnertext(id, value){
    document.getElementById(id).innerText = value;
} 
// Heart count function 
const hearts = document.getElementsByClassName("click-heart");

for(const heart of hearts){
    heart.addEventListener("click",function(){
        const heartCount = getInnerText("heart-counter");

        const newCount = heartCount + 1;

        setInnertext("heart-counter", newCount);

    })
}

// Call button function
const buttons = document.getElementsByClassName("call-button");

for(const button of buttons){
    button.addEventListener("click",function(){

    const coinCount = getInnerText("coin-counter");

    const card = button.closest(".cards");

    const subTitle = card.querySelector(".card-subtitle").textContent;

    const cardNum = card.querySelector(".card-number").textContent;

    if(coinCount < 20){
        alert("Not enough coins to make a call");
        return;
    }

    alert(`Calling ${subTitle} ${cardNum}`); 

    const newCoinCount = coinCount - 20;

    setInnertext("coin-counter", newCoinCount);

    const data = {
        title : subTitle,
        num : cardNum,
        date : new Date().toLocaleTimeString()
    }

    callHistoryData.unshift(data);

    showHistory();

    })

}

// clear button function
document.getElementById("clear-button").addEventListener("click",function(){
    callHistoryData.length = 0;
    document.getElementById("history-container").innerHTML = "";
})

// copy button function
const boxs = document.getElementsByClassName("copy-box");
for(const box of boxs){
    box.addEventListener("click",function(){
    
    const card = box.closest(".cards");

    const number = card.querySelector(".card-number").textContent;

    navigator.clipboard.writeText(number);

    alert("Number copied"+" "+number);

    const copyCount = getInnerText("copy-counter");

    const newCount = copyCount + 1;

    setInnertext("copy-counter", newCount);
    // document.getElementById("copy-counter").innerHTML = newCount;
})
}
// show history function
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
