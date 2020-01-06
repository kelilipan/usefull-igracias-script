// ==UserScript==
// @name         autopick.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto pick mk pilihanmu if available,else it will automatically refresh
// @author       tsr
// @match        https://igracias.telkomuniversity.ac.id/registration/*
// @grant        none
// @require      https://igracias.telkomuniversity.ac.id/javascripts/ui/jquery.ui.tabs.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
  "use strict";
  $("#tabs").tabs("select", 3); //select tab first
  const delay = 10000; //delay
  setTimeout(() => {
    window.scrollTo(0, screen.height + 700);
  }, delay);

  function dodeting(subjectCode) {
    console.log('lagi ngeliat',subjectCode);
    const matkul = $(`input[subjectcode='${subjectCode}']`);
    if (matkul.length) {
      const x = Math.floor(Math.random() * matkul.length); //generate random number
      const cls = matkul
        .parent()
        .parent()
        .children()[2];
      console.log("Kelas", cls.textContent);
      if (
        cls.textContent != "ICM-40-INT" &&
        cls.textContent != "SIDE-40-INT" &&
        cls.textContent != "MCE-40-INT" &&
        cls.textContent != "TELE-40-INT"
      ) {
        //gaboleh ngambil inter ya guys
        matkul[x].checked = true;
      } else {
        console.log("Inter gan");
        // location.reload();
      }
      if (matkul[x].checked == true) {
        console.log("mantap");
        $("#chooseOfferedCourse").click();
      }
    } else {
      console.log("gadapet gan");
      // location.reload();
    }
  }
  setTimeout(() => {
    var lookupmk = ["CSH4X3","CSH4G3","CSH4F3"]; // masukan mk yg anda mau disini
    lookupmk.forEach(dodeting);
    location.reload();
  }, delay);
})();
