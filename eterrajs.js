import { verifiedaccess_v1 } from "googleapis";
import { fstat, writeFile, writeFileSync } from 'fs';
import pkg from "xhr2";
const {XMLHttpRequest} = pkg;



var youtubeURL = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCK_28SKuADbZvrl9QxTyEMA&key=AIzaSyApBZVrP8yHUXDOwCZlu1N2-EJs7qn-DXU';
var requestYT = new XMLHttpRequest();
var data;


setInterval(() => {
    requestYT.open('GET', youtubeURL);
    requestYT.responseType = 'json';
    requestYT.send();
    requestYT.onload = function() {
        var text = requestYT.response;
        data = '{ "subs" : '  + text.items[0].statistics.subscriberCount +'}';
        console.log(data);
        writeFileSync('head.json', data);
}}, 10000);
