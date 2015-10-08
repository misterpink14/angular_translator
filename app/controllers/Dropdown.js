app.controller("Dropdown", function($scope) {
	$scope.languages = [{
		name: "Spanish",
		value: "es"
	},{
		name: "Thai",
		value: "th"
	}, {
		name: "French",
		value: "fr"
	}, {
		name: "German",
		value: "de"
	}, {
		name: "French",
		value: "fr"
	}, {
		name: "Russian",
		value: "ru"
	}];
	$scope.t = function() {
		var text = document.getElementById("english").value
		var elm = document.getElementById("language")
		var lang =  elm.options[elm.selectedIndex].text
	
		var url = "https://api.mymemory.translated.net/get?q="+ encodeURIComponent(text.trim()) +"&langpair=en|" + lang.trim();
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, false);
		xhr.send();
		var trans = JSON.parse(xhr.responseText);
	
		console.log(trans)
		if (trans.responseStatus != 200)
		{
			alert("ERROR: Please enter text into the first box")
			return
		}
		document.getElementById("translation").value = trans.responseData.translatedText;
	
	}
});