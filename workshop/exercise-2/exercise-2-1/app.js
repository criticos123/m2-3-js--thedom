// Preset values
const main= document.querySelector('body');
const FROGS = 3;
const track= document.getElementById("track");
let style= document.createElement('link');
style.href= "../assets/styles.css";
style.rel="stylesheet";
main.appendChild(style);

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for(let i=0; i<FROGS;i++){
    const lane = document.createElement('li');
    track.appendChild(lane);
    const lanenumber = document.createElement('span');
    lanenumber.innerText=i+1;
    lane.id= "lanenumber"+i;
    lane.appendChild(lanenumber);
    
}

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

//Exercise 2-2

let racers=[];

for(let i=0;i<FROGS;i++){
    racers.push(frogStable[i]);
    
}
console.log(racers)
//Exercise 2-3


racers.forEach(function (racer, i) {
    console.log(racer);
    let newFrog= document.createElement('span');
    newFrog.innerText=racer.number;
    newFrog.classList.add('frog');
    console.log("lanenumber"+i);

    const laneId= document.getElementById("lanenumber"+i);
    laneId.appendChild(newFrog);
});
console.log(racers);
setInterval(function(){
    const frogs=document.getElementsByClassName('frog');
    [...frogs].forEach(function(currentItem){
        console.log(currentItem);
        currentItem.style.left="10px";
    });
    
},2000);



