import { verifiedaccess_v1 } from "googleapis";
import { fstat, writeFile, writeFileSync } from 'fs';

import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
import pkg from "xhr2";

const {XMLHttpRequest} = pkg;



var tokens = '/tokens.json';
var requestYT = new XMLHttpRequest();
var data;
var ytURL;

$.getJSON(tokens, function(json){
    ytURL = json.token;
});

setInterval(() => {
    requestYT.open('GET', );
    requestYT.responseType = 'json';
    requestYT.send();
    requestYT.onload = function() {
        var text = requestYT.response;
        data = '{ "subs" : '  + text.items[0].statistics.subscriberCount +'}';
        console.log(data);
        writeFileSync('subINFO.json', data);
}}, 10000);
