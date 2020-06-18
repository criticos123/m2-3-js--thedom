// Preset values
const main= document.querySelector('main');
const FROGS = 3;
const track= document.getElementById("track");
let style= document.createElement('link');
style.href= "../assets/styles.css";
style.rel="stylesheet";
main.appendChild(style);
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for(let i=1; i<=FROGS;i++){
    const lane = document.createElement('li');
    track.appendChild(lane);
    const lanenumber = document.createElement('span');
    lanenumber.innerText=i;
    lane.id= "lane number:"+i;
    lane.appendChild(lanenumber);
}

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

//Exercise 2-2

let racers=[];

for(let i=0;i<FROGS;i++){
    const frogstable=[i];
    racers.push(frogstable)
}
console.log(racers)
//Exercise 2-3

racers.forEach(function (racer, id) {
    const newlane= document.createElement('span')
    newlane.classList.add('frog');
    newlane.style.background= race.color;
    document.getElementById(id).appendChild(newlane);
    racers[id].progress=0;
    racers[id].lane=id;
    const froggo=document.createElement('span');
    document.getElementById(id).appendChild(froggo);
});




