window.addEventListener('mouseup', wordSelected);
function wordSelected() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText.length < 2 && selectedText !== " ") {
        let message = {
            text: selectedText.toLowerCase()
        }
        chrome.runtime.sendMessage(message);
    }
}