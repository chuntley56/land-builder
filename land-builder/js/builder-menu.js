$(document).ready(function () {
  var logo = $.templates("#mainTemplate");
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  var market = getUrlVars()["market"];
  var view = getUrlVars()["view"];
  var source = getUrlVars()["source"];


$("#btn-bs").click(function() {
		window.location.replace("?market=bs&source=index");
});
$("#btn-cc").click(function() {
		window.location.replace("?market=cc&source=index");
});
$("#btn-cg").click(function() {
		window.location.replace("?market=cg&source=index");
});
$("#btn-ct").click(function() {
		window.location.replace("?market=ct&source=index");
});
$("#btn-dp").click(function() {
		window.location.replace("?market=dp&source=index");
});
$("#btn-hc").click(function() {
		window.location.replace("?market=hc&source=index");
});
$("#btn-la").click(function() {
		window.location.replace("?market=la&source=index");
});
$("#btn-mc").click(function() {
		window.location.replace("?market=mc&source=index");
});
$("#btn-os").click(function() {
		window.location.replace("?market=os&source=index");
});
$("#btn-sd").click(function() {
		window.location.replace("?market=sd&source=index");
});
$("#btn-ss").click(function() {
		window.location.replace("?market=ss&source=index");
});
$("#btn-tw").click(function() {
		window.location.replace("?market=tw&source=index");
});
$("#btn-vg").click(function() {
		window.location.replace("?market=vg&source=index");
});

$("#btn-index").click(function() {
		window.location.replace('?market=' + market + '&source=index');
});
$("#btn-email").click(function() {
		window.location.replace('?market=' + market + '&source=email');
});
$("#btn-emailalt").click(function() {
		window.location.replace('?market=' + market + '&source=emailalt');
});
$("#btn-sem").click(function() {
		window.location.replace('?market=' + market + '&source=sem');
});
$("#btn-manage").click(function() {
		window.location.replace('?market=' + market + '&source=manage');
});
$("#btn-message").click(function() {
		window.location.replace('?market=' + market + '&source=message');
});
$("#btn-member").click(function() {
		window.location.replace('?market=' + market + '&source=member');
});
$("#btn-whisper").click(function() {
		window.location.replace('?market=' + market + '&source=whisper');
});
$("#btn-ad").click(function() {
		window.location.replace('?market=' + market + '&source=ad');
});
$("#btn-adalt").click(function() {
		window.location.replace('?market=' + market + '&source=adalt');
});

$("#btn-prod").click(function() {
	window.location.replace('?market=' + market + '&source=' + source + "&view=prod");
});

function getUrlVars() {
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

if (view == 'prod') {
  $( ".preview-menu" ).hide();
} else {
$( ".preview-menu" ).show();
}

});
