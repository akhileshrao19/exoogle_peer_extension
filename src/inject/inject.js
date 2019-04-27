
chrome.runtime.onMessage.addListener((msg, sender, sendResponse)=>{
	if (msg.action === 'send_url'){
		console.log(msg.tab.url);
        $.post('http://localhost:8000/api/peer-data/', {domain: msg.tab.url})
	}
});
