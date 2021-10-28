import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';


var data;
var ytURL;
let tokens = "/scripts/tokens.json"


let subGoal = document.querySelector(".subgoal");
subGoal.textContent = 10000;
let progress = document.querySelector(".progress");
progress.max = subGoal.textContent;


$.getJSON(tokens, function(json){
    ytURL = json.url;
});

updatePage();

setInterval(() => {
   updatePage();  
}, 5000);



function updatePage(){
    $.getJSON(ytURL, function(ytAnswer){
        data = ytAnswer.items[0].statistics.subscriberCount;
        console.log(data);
    });
    progress.value = Number(data);    
}