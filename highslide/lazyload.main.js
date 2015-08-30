function getParam(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function parseParam() {
    if (typeof hs == "undefined")
        setTimeout(parseParam, 50);
    else {
        var g = getParam("go");
        if (g != undefined)
            $("a[onclick='return hs.expand(this, config_" + g.toLowerCase() +")']")[0].click();
    }
}
parseParam()

$("img.lazy").show().lazyload({effect: "fadeIn"});

$(document).ready(function () {
    var part = 1
    $('#load-more').click(function () {
        $('#load-more').addClass('loading').text('Loading...');
        $.get("content" + part +".html").success(function(data) {
            var $part = $('<div id="part' + part + '"></div>')
            $("#more").append($part)
            $part.append(data).hide({
                duration: 0, 
                start: (function () {$part.find("img.lazy").show().lazyload({effect: "fadeIn"});})
            }).show();
            
            part = part + 1;
        }).complete(function () {
            $('#load-more').removeClass("loading").text('Load More');
        }).fail(function () {
            $('#load-more').remove();
        });
    });
 });
