import '/scripts/node_modules/googleapis/build/src/googleapis.js';
//import './fs';
import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
import '/scripts/node_modules/xhr2/lib/xhr2.js';



var requestYT = new XMLHttpRequest();
var data;
var ytURL;
let subs = document.querySelector(".subs");
let subGoal = document.querySelector(".subgoal");
let progress = document.querySelector(".progress");
subGoal.textContent = 10000;
let doc = "scripts/subINFO.json";


$.getJSON(tokens, function(json){
    ytURL = json.token;
});

progress.max = subGoal.textContent;
setInterval(() => {
    requestYT.open('GET', ytURL);
    requestYT.responseType = 'json';
    requestYT.send();
    requestYT.onload = function() {
        var text = requestYT.response;
        data = '{ "subs" : '  + text.items[0].statistics.subscriberCount +'}';
        console.log(data);
    };
    writeFileSync('subINFO.json', data);
    progress.value = Number(data.subs);    
    console.log(json);
}, 5000);
