/* Set the width of the side navigation to 250px */
var sidenavstate = false;

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
	sidenavstate = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
	sidenavstate = false;
}

document.addEventListener('click', function(e) {
  var snav = document.getElementById("mySidenav");
  if (e.target.id !== snav.id && !snav.contains(e.target) && !e.target.className.match('openbtn') && !sidenavstate)
    closeNav();
}, false);
document.addEventListener('touch', function(e) {
  var snav = document.getElementById("mySidenav");
  if (e.target.id !== snav.id && !snav.contains(e.target) && !e.target.className.match('openbtn') && !sidenavstate)
    closeNav();
}, false);