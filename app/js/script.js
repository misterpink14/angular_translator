function translation() {
	var text = document.getElementById("translate-text").value
	var lang = 'es';
	var trans = detect(text.trim(), lang.trim())

	console.log(trans)

	if (trans.responseStatus != 200)
	{
		alert("ERROR: Please enter text into the first box")
		return
	}
	document.getElementById("translate-text").value = trans.responseData.translatedText;

}



function detect(text, lang) {
	var url = "https://api.mymemory.translated.net/get?q="+ encodeURIComponent(text) +"&langpair=en|" + lang;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	var res = JSON.parse(xhr.responseText);
	return res;
}