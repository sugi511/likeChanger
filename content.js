var msg = "get_word";
chrome.extension.sendMessage(
	{greeting: msg},
	function(response){// call back function
		replace_likes(response);
	}
);

function replace_likes(word){
	var target_dom = new Array("a", ".UFIImageBlockContent", ".uiHeaderTitle", ".uiStreamMessage",".uiStreamHeadline",".uiStreamPassive",".socialContext");
	for(var i in target_dom){
		var target = target_dom[i];
		$(target).each(function(){
			var text = $(this).text();
			if(text.indexOf("いいね！")!=-1){
				text = text.replace(/いいね！/,word);
				$(this).text(text);
			}
		});
	}
}
