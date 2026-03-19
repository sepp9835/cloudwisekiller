let coockiesr = localStorage.getItem("passcorr");
function delo() {
var id = "dkolkcpdgcefmbcafnghiebhkmajnimd";
if (coockiesr == "true") {
  console.log("koekbesta");
  try {
    chrome.management.setEnabled(id, false);
    console.log("Extension disabled successfully");
  } catch (e) {
    console.log("Could not disable extension:", e);
    alert("Extension disable failed - check permissions");
  }
} else {
  console.log("koekbestaniet");
  var passwerd = prompt("voer wachtwoord in");
  if (passwerd == cloudid) {
    alert("correct");
    localStorage.setItem("passcorr", "true");
    try {
      chrome.management.setEnabled(id, false);
      console.log("Extension disabled successfully");
    } catch (e) {
      console.log("Could not disable extension:", e);
      alert("Password correct but extension disable failed - check permissions");
    }
  } else if (passwerd == "clear") {
    localStorage.removeItem("passcorr");
    alert("Password status cleared");
  } else {
    alert("de persoon die jou dit heeft gegeven is illegaal bezig, dit programma is gecopyright en je mag het niet veranderen en/of delen");
    localStorage.setItem("passcorr", "false");
  }
}
}
