chrome.runtime.onMessage.addListener(reciever);

window.word = "";
function reciever(request, sender, sendResponse) {
    console.log(request);
    window.word = request.text;
}