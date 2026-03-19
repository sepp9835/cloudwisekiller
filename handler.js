let coockiesr = localStorage.getItem("passcorr");
function delo() {
var id = "liecbddmkiiihnedobmlmillhodjkdmb";
if (coockiesr == "true") {
  console.log("koekbesta");
  chrome.management.setEnabled(id, false)
}else {
  console.log("koekbestaniet");
  var passwerd = prompt("voer wachtwoord in");
  if (passwerd == cloudid) {
    alert("correct");
    localStorage.setItem("passcorr", "true");
    chrome.management.setEnabled(id, false)
  } else if (passwerd == "clear") {
    localStorage.removeItem(passcorr);
  } else {
    alert("de persoon die jou dit heeft gegeven is illegaal bezig, dit programma is gecopyright en je mag het niet veranderen en/of delen");
    localStorage.setItem("passcorr", "false");
  }
}
}
