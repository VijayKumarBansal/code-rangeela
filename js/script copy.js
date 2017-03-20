	var searchParameter,str,n,len;
	var $ = document.getElementById.bind(document);
	$("submitButton").addEventListener("click",getInput);
	
	function getInput(){
	    searchParameter = $("searchParameter").value;
		console.log(searchParameter);
		
		var str1 = searchParameter.search("google");
		var str2 = searchParameter.search("facebook");
		var str3 = searchParameter.search("twitter");
		var str4 = searchParameter.search("yahoo");
		if(str1 !== -1){
			searchParameter = "google";
			console.log("str==" +searchParameter);
		}else if(str2 !== -1){
			searchParameter = "facebook";
			console.log("str==" +searchParameter);
		}else if(str3 !== -1){
			searchParameter = "twitter";
			console.log("str==" +searchParameter);
		}else if(str4 !== -1){
			searchParameter = "yahoo";
			console.log("str==" +searchParameter);
		}else {
			$("searchItem").src = searchParameter;
		}
		
		setInput(searchParameter)	;
	}
	
	function setInput(sp){
		
		str = $("searchParameter").value;
		n = str.indexOf("www");
		len = str.length;
		sbstring = str.substring(n+4,len);
		
		console.log("n = " + n);
		console.log("len = " +len);
		console.log("substring = " + sbstring);
		
		shortUrl = sbstring;
		///******************Push history******************//
		
		if(sp == "google"){
			$("searchItem").src = "google.html";
			//ChangeUrl('google', 'google.html');
		}else if(sp == "facebook"){
			$("searchItem").src = "google.html";
			//ChangeUrl('facebook', 'www.facebook.com');	
		}else if(sp == "twitter"){
			$("searchItem").src = "google.html";
			//ChangeUrl('twitter', 'twitter.htm');
		}else if(sp == "yahoo"){	
			$("searchItem").src = "google.html";
			//ChangeUrl('yahoo', 'yahoo.htm');
		}else{
			ChangeUrl('SiteName', shortUrl); 
			console.log("dynamicURL = " + searchParameter);
		}
		$("searchItem").style.display ="block";
		$("searchParameter").style.display ="none";
		$("submitButton").style.display ="none";		
	}
	function ChangeUrl(title, url) {
		if (typeof (history.pushState) != "undefined") {
			var obj = { Title: title, Url: url };
			history.pushState(obj, obj.Title, obj.Url);
		} else {
			console.log("Browser does not support x-frame");
		}
		startAnimation();
	}
	function startAnimation(){
		setTimeout(function(){
			$("clapGif").style.display ="block";
			$("woooo").style.display ="block";
		},4000);
		
	}
