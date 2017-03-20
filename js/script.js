var searchParameter, str, n, len;
var $ = document.getElementById.bind(document);
var v = document.getElementsByClassName.bind(document);
$("submitButton").addEventListener("click", getInput);

function getInput() {
    str = $("searchParameter").value;
    n = str.indexOf("www");
    len = str.length;
    sbstring = str.substring(n + 4, len);

    $("iframeItem").src = str;

    shortUrl = sbstring;
    changeUrl('SiteName', shortUrl);

    $("iframeItem").style.display = "block";
    v("centre")[0].className += "hide";
}

function changeUrl(title, url) {
    if (typeof(history.pushState) != "undefined") {
        var obj = {
            Title: title,
            Url: url
        };
        history.pushState(obj, obj.Title, obj.Url);
        history.pushState(null, null, window.location.pathname);
    } else {
        console.log("Browser does not support x-frame");
    }
    startAnimation();
}

function startAnimation() {
    setTimeout(function() {
        $("clapGif").className += " show";
        $("woooo").className += " show";
    }, 3500);

}

window.addEventListener('popstate', function(event) {
    // The popstate event is fired each time when the current history entry changes.
    console.log("Hey, you pressed the back button!")
    $("clapGif").className += " hide";
    $("woooo").className += " hide";
    history.pushState("index", "index.html");
    history.pushState(null, null, window.location.pathname);
}, false);