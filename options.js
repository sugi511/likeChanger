var element_number = 10;

window.onload = function(){
	restoreWords();
};

function restoreWords() {
    var word = document.getElementById("word");
    var data = JSON.parse(localStorage['word']);
    word.value = data;
}

function saveWords(){
    var word = document.getElementById("word");
    // localStorage['word']= word.value;
    localStorage['word']= JSON.stringify(word.value);
}

function resetWords(){
    document.getElementById("word").value="";
}

document.getElementById('save').onclick = function(){saveWords();};
document.getElementById('reset').onclick = function(){resetWords();};