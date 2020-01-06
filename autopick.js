// ==UserScript==
// @name         Auto pick matkupil
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto pick mk pilihanmu if available,else it will automatically refresh
// @author       raisoturu
// @match        https://igracias.telkomuniversity.ac.id/registration/*
// @grant        none
// @require      https://igracias.telkomuniversity.ac.id/javascripts/ui/jquery.ui.tabs.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
  "use strict";
  $("#tabs").tabs("select", 3); //select tab first
  const delay = 10000; //delay
  // const subjectCode = "CCH4A3"; //testing
  const subjectCode = "CSH4O3"; //NLP
  // const subjectCode = 'CSH4G3' //DATA MINING
  setTimeout(() => {
    console.log(subjectCode);
    window.scrollTo(0, screen.height + 700);
  }, 3000);
  setTimeout(() => {
    const matkul = $(`input[subjectcode='${subjectCode}']`);
    console.log(matkul);
    if (matkul.length) {
      const x = Math.floor(Math.random() * matkul.length); //generate random number
      const cls = matkul
        .parent()
        .parent()
        .children()[2];
      console.log(cls.textContent);
      console.log(cls.textContent != "ICM-40-INT");
      if (cls.textContent != "ICM-40-INT") {
        //gaboleh ngambil inter ya guys
        matkul[x].checked = true;
      } else {
        console.log("Inter gan");
        location.reload();
      }
      if (matkul[x].checked == true) {
        console.log("mantap");
        $("#chooseOfferedCourse").click();
      }
    } else {
      console.log("gadapet gan");
      location.reload();
    }
  }, delay);
})();
