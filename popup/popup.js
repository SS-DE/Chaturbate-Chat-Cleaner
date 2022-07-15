
document.getElementById("toggleEnable").addEventListener("click", function() {
    console.log(document.getElementById("toggleEnableImage").src);
    if (document.getElementById("toggleEnableImage").src.match("images/off.png")) {
        document.getElementById("toggleEnableImage").src = "images/on.png";
        chrome.runtime.sendMessage({type: "enableToggle", message:"on"});
    }
    else {
        document.getElementById("toggleEnableImage").src = "images/off.png";
        chrome.runtime.sendMessage({type: "enableToggle", message:"off"});
        //chrome.runtime.sendMessage({greeting: "hello"});
    }

});
