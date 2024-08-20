var url_string = window.location.href; 
var url = new URL(url_string);
var token = url.searchParams.get("token");
console.log("token " + token);
