// ==UserScript==
// @name          Gmail fit inline images
// @namespace     https://github.com/FreedomFighterSparrow/
// @description	  Some inline images in Gmail strech beyond the window, making the view confusing; this limits them to 100%.
// @author        FreedomFighterSparrow
// @version       0.1
// @homepageURL   https://github.com/FreedomFighterSparrow/userscript-gmail-fit-inline-images
// @icon          https://mail.google.com/favicon.ico
// @grant         none
// @run-at        document-start
// @include       https://mail.google.com/*
// ==/UserScript==
(function() {
  var css = "";
	css += [
    ".h7 img {",
    "    max-width: 100%;",
    "    height: auto;",
    "}"
	].join("\n");

	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
})();
