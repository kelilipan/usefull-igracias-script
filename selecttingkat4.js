// ==UserScript==
// @name         Select tab 4
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto select tab tingkat 4 pas registrasi igracias
// @author       raisoturu
// @match        https://igracias.telkomuniversity.ac.id/registration/*
// @grant        none
// @require      https://igracias.telkomuniversity.ac.id/javascripts/ui/jquery.ui.tabs.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
  "use strict";
  window.onload = function() {
    $("#tabs").tabs("select", 3);
    setTimeout(() => {
      window.scrollTo(0, screen.height);
    }, 2000);
  };
})();
