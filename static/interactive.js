document.addEventListener('DOMContentLoaded', function() {
    var contentElements = document.getElementsByTagName('math');
    for (var i = 0; i < contentElements.length; i++) {
        var contentElem = contentElements[i];
        var content = contentElem.innerHTML;

        var newContent = content;

        newContent = newContent.replace(/(?<!^)\r?\n/g, '\\\\');
        newContent = newContent.replace(/ /g, '\\,\\,');

        newContent = newContent.replace(/\|/g, '|\\!\\!');

        newContent = newContent.replace(/=/g, '=\\!')

        newContent = newContent.replace(/{/g, '\\{');
        newContent = newContent.replace(/}/g, '\\}');
        newContent = newContent.replace(/∈/g, '∈\\!\\!');
        newContent = newContent.replace(/∋/g, '∋\\!\\!');
        newContent = newContent.replace(/⊂̱/g, '\\subseteq\\!\\!')
        newContent = newContent.replace(/⊃̱/g, '\\supseteq\\!\\!')
        newContent = newContent.replace(/⊂/g, '\\subset\\!\\!')
        newContent = newContent.replace(/⊃/g, '\\supset\\!\\!')
        newContent = newContent.replace(/∪/g, '∪\\!\\!');
        newContent = newContent.replace(/∩/g, '∩\\!\\!');
        
        newContent = newContent.replace(/⨆/g, '\\bigsqcup');
        newContent = newContent.replace(/⨅/g, '?');

        newContent = newContent.replace(/\+/g, '\\!+\\!');

        newContent = newContent.replace(/¦/g, '\\text{ ¦ }');
        newContent = newContent.replace(/\|/g, '\\text{ | }');

        newContent = '$\\displaystyle \\begin{array} {lll}' + newContent + '\\end{array} $';

        contentElem.innerHTML = newContent;
    }
    
    var contentElements = document.getElementsByTagName('head');
    for (var i = 0; i < contentElements.length; i++) {
        var contentElem = contentElements[i];
        var content = contentElem.innerHTML;

        var newContent ='';

        newContent = newContent + '<script defer src="static/assets/icons/fontawesome/brands.min.js"></script>';
        newContent = newContent + '<script defer src="static/assets/icons/fontawesome/solid.min.js"></script>';
        newContent = newContent + '<script defer src="static/assets/icons/fontawesome/regular.min.js"></script>';
        newContent = newContent + '<script defer src="static/assets/icons/fontawesome/fontawesome.min.js"></script>';
        
        newContent = newContent + content;
    }
});