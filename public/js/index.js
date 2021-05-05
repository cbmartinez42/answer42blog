const hamburgerMenu = document.getElementById('#mobile-demo');

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, hamburgerMenu);
});

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
//   });



