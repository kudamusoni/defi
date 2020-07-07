let bgPage = chrome.extension.getBackgroundPage();
let url = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/'+ bgPage.word +'?strictMatch=false';
console.log(url);

const reqParams = {
    headers: {
        "content-type": "application/json;charset=utf-8",
        "app_key": "5beb6c081fc58174eb730aa19ccb5392",
        "app_id": "6f612dec"
    },
    method: "GET"
};

document.getElementById("word").innerHTML = bgPage.word;

fetch(url, reqParams)
.then(data => data.json())
.then(res => {
    res.results[0].lexicalEntries.forEach(function(val, index) {
       document.getElementById("def").innerHTML += index+1 + ": " + val.entries[0].senses[0].definitions[0] + "<br>";
    });
})
.catch((error) => {
    console.log("Error: " + error);
});