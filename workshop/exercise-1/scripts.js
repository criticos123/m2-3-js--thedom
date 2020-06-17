// Add your code here!
const main= document.querySelector('main');

const title = document.createElement('h1');
const text = document.createElement('p');
const subtitle= document.createElement('h2');
const texttwo= document.createElement('p');
const image= document.createElement('img');
const textthree=document.createElement('p');
const textfour=document.createElement('p');
const source=document.createElement('a');

title.innerText = "How I Met your Mother";
text.innerText = " As impossible as it seems to name just 1 of the 208 legendary episodes as the “best” the fans havespoken and the highest rated episode is… wait forit…";
subtitle.innerText ="The Slap Bet (Season 2, Episode 9)";
texttwo.innerText ="IMDB Rating: 9.5";
image.src ="images/robin-sparkles.jpg";
textthree.innerText ="  In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
textfour.innerText="  In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney). "
source.href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
source.innerText="Source";

main.appendChild(title);
main.appendChild(text);
main.appendChild(subtitle);
main.appendChild(texttwo);
main.appendChild(image);
main.appendChild(textthree);
main.appendChild(textfour);
main.appendChild(source);

let style= document.createElement('link');
style.href= "styles.css";
style.rel="stylesheet";
main.appendChild(style);


