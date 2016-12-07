// grouping for masks doesnt work

var xhr = new XMLHttpRequest();
xhr.open('GET', 'access.html', false);
xhr.send();

if (xhr.status != 200 && xhr.status != 0) {
  	alert( xhr.status + ': ' + xhr.statusText );
} else if (xhr.status == 0){
}

var regExpIP = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g
var IPs = xhr.responseText.match(regExpIP);
IPs.sort();

// remove duplicates
IPs = IPs.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
});

var regExpMask = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\./g

console.log(IPs);
var ifNeedsPrinting = true;
for (var i = 0; i < IPs.length; i++) {
	var maskCurr = IPs[i].match(regExpMask);

		var maskNext = IPs[i + 1].match(regExpMask);
		// console.log(maskCurr, maskNext);
		if (ifNeedsPrinting == true) {console.log(IPs[i])}
		if (maskCurr == maskNext) {
			console.log('FLAG');
			console.log(IPs[i + 1])
			ifNeedsPrinting = false;
		}
		else {
			console.log(i);
			// console.log('');
			ifNeedsPrinting = true;
		} 
}