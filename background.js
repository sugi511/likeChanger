// ブラウザーアクションで、アイコンがクリックされたときのリスナー
chrome.browserAction.onClicked.addListener(function(tab) {
	// タブの中でスクリプトを実行する
	chrome.tabs.executeScript(null, {file: "content.js"}, function(){
	});
});

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse){
		if (request.greeting == "get_word"){
			word = JSON.parse(localStorage['word']);
			console.log(word);
			sendResponse(word);
		}

});