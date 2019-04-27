chrome.browserAction.onClicked.addListener(function(tabs){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "send_url", tab:tabs[0]}, function(response) {});
    });
});
