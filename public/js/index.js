
// set triggers for hamburger menu at med size breakpoint
const hamburgerMenu = document.getElementById('#mobile-demo');

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, hamburgerMenu);
});


