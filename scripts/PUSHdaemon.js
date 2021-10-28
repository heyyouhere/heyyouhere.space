import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

let subs = document.querySelector(".subs");
let subGoal = document.querySelector(".subgoal");
let progress = document.querySelector(".progress");
subGoal.textContent = 10000;
let doc = "/subINFO.json";

progress.max = subGoal.textContent;
setInterval(() => {
    $.getJSON(doc, function(json) {
        subs.textContent = json.subs;
        progress.value = Number(json.subs);    
        console.log(json);
    });
}, 1000);