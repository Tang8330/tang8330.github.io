function stringToUint(string) {
    var string = btoa(unescape(encodeURIComponent(string))),
        charList = string.split(''),
        uintArray = [];
    for (var i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
    }
    return new Uint8Array(uintArray);
}

function uintToString(uintArray) {
    var encodedString = String.fromCharCode.apply(null, uintArray),
        decodedString = decodeURIComponent(escape(atob(encodedString)));
    return decodedString;
}

var r1, r2;
(function() {
    $('#deflate').click(function() {
        var toDeflate = $('#input').val();
        console.log('toDeflate', toDeflate);
        var deflatedString = pako.deflate(toDeflate, { to: 'string' });
        var restored = pako.inflate(deflatedString, { to: 'string' });
        r1 = deflatedString;
        console.log('deflate', deflatedString, restored);
        $('#results').val(deflatedString);
    });

    $('#inflate').click(function() {
        var deflatedString = $('#input').val();
        console.log('deflatedString', deflatedString);
        r2 = deflatedString;
        console.log(r1, r2, r1==r2);
        var restored = pako.inflate(deflatedString, { to: 'string' });
        console.log('restored', restored);
        $('#results').val(restored);
        //$('#results').text(String.fromCharCode.apply(null, new Uint8Array(pako.inflate(toInflate))));
    });

})();

