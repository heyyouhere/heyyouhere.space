import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';


var data;
var ytURL;

let subGoal = document.querySelector(".subgoal");
let progress = document.querySelector(".progress");
subGoal.textContent = 10000;
let tokens = "/scripts/tokens.json"


$.getJSON(tokens, function(json){
    ytURL = json.token;
});

progress.max = subGoal.textContent;
setInterval(() => {
    $.getJSON(ytURL, function(ytAnswer){
        data = ytAnswer.items[0].statistics.subscriberCount;
        console.log(data);
    });
    progress.value = Number(data);    
}, 5000);
