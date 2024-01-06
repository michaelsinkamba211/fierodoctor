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
  var contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach(function (section) {
    section.classList.remove("active");
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("active");

  // Remove 'active' class from all links
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Add 'active' class to the clicked link
  event.target.classList.add("active");
}

// for testimonials

// function showTestimonials(event, sectionId) {
//   event.preventDefault();

//   // Hide all content sections
//   var contentSections = document.querySelectorAll('.testify');
//   contentSections.forEach(function (section) {
//     section.classList.remove('actives');
//   });

//   // Show the selected content section
//   var selectedSection = document.getElementById(sectionId);
//   selectedSection.classList.add('actives');

//   // Remove 'active' class from all links
//   var links = document.querySelectorAll('.testimonials nav a');
//   links.forEach(function (link) {
//     link.classList.remove('actives');
//   });

//   // Add 'active' class to the clicked link
//   event.target.classList.add('actives');
// }

// Automatic cycling every 5 seconds
// var currentIndex = 0;
// var links = document.querySelectorAll('.testimonials nav a');

// setInterval(function () {
//     // Trigger click event for the next link in order
//     links[currentIndex].click();

//     // Increment the index for the next iteration
//     currentIndex = (currentIndex + 1) % links.length;
// }, 3000);

var touchstartX = 0;
    var touchendX = 0;
    var currentIndex = 0;  // Declare currentIndex outside the scope

    function handleSwipe() {
        var minSwipeDistance = 50;

        if (touchendX < touchstartX - minSwipeDistance) {
            // Swipe left
            navigate(-1);
        } else if (touchendX > touchstartX + minSwipeDistance) {
            // Swipe right
            navigate(1);
        }
    }

    function navigate(direction) {
        var links = document.querySelectorAll('.testimonials nav a'); // Move links inside navigate function
        var currentIndex = Array.from(links).findIndex(link => link.classList.contains('actives'));
        var nextIndex = (currentIndex + direction + links.length) % links.length;

        links[nextIndex].click();
    }

    function handleTouchStart(event) {
        touchstartX = event.changedTouches[0].screenX;
    }

    function handleTouchEnd(event) {
        touchendX = event.changedTouches[0].screenX;
        handleSwipe();
    }

    function showTestimonials(event, sectionId) {
        event.preventDefault();

        // Hide all content sections
        var contentSections = document.querySelectorAll('.testify');
        contentSections.forEach(function (section) {
            section.classList.remove('actives');
        });

        // Show the selected content section
        var selectedSection = document.getElementById(sectionId);
        selectedSection.classList.add('actives');

        // Remove 'active' class from all links
        var links = document.querySelectorAll('.testimonials nav a');
        links.forEach(function (link) {
            link.classList.remove('actives');
        });

        // Add 'active' class to the clicked link
        event.target.classList.add('actives');
    }

    // Check if it's a mobile device (viewport width less than 600 pixels)
    if (window.innerWidth > 600) {
        // Automatic cycling every 5 seconds
        var links = document.querySelectorAll('.testimonials nav a'); // Move links inside the mobile check
        setInterval(function () {
            // Trigger click event for the next link in order
            links[currentIndex].click();

            // Increment the index for the next iteration
            currentIndex = (currentIndex + 1) % links.length;
        }, 5000);
    }

    // Add event listeners for touch events
    var content = document.querySelector('.testimonials');
    content.addEventListener('touchstart', handleTouchStart, false);
    content.addEventListener('touchend', handleTouchEnd, false);



    
