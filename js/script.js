// document.addEventListener("DOMContentLoaded", function () {
//   var lastScrollTop = 0;
//   var header = document.querySelector("header");

//   window.addEventListener("scroll", function () {
//     var st = window.scrollY || document.documentElement.scrollTop;

//     if (st > lastScrollTop) {
//       // Scrolling down, hide the header
//       header.classList.add("hide");
//     } else {
//       // Scrolling up, show the header
//       header.classList.remove("hide");
//     }

//     lastScrollTop = st;
//   });
// });

function showContent(event, sectionId) {
  event.preventDefault();

  // Hide all content sections
  var contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(function (section) {
    section.classList.remove('active');
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');

  // Remove 'active' class from all links
  var links = document.querySelectorAll('nav a');
  links.forEach(function (link) {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  event.target.classList.add('active');
}