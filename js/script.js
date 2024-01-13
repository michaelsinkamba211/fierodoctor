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

var touchstartX = 0;
var touchendX = 0;
var currentIndex = 0; 

function handleSwipe() {
  var minSwipeDistance = 50;

  if (touchendX < touchstartX - minSwipeDistance) {
    // Swipe left
    navigate(1);
  } else if (touchendX > touchstartX + minSwipeDistance) {
    // Swipe right
    navigate(-1);
  }
}

function navigate(direction) {
  var links = document.querySelectorAll(".testimonials nav a"); // Move links inside navigate function
  var currentIndex = Array.from(links).findIndex((link) =>
    link.classList.contains("actives")
  );
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
  var contentSections = document.querySelectorAll(".testify");
  contentSections.forEach(function (section) {
    section.classList.remove("actives");
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("actives");

  // Remove 'active' class from all links
  var links = document.querySelectorAll(".testimonials nav a");
  links.forEach(function (link) {
    link.classList.remove("actives");
  });

  // Add 'active' class to the clicked link
  event.target.classList.add("actives");
}

// Check if it's a mobile device (viewport width less than 600 pixels)
if (window.innerWidth > 600) {
  // Automatic cycling every 5 seconds
  var links = document.querySelectorAll(".testimonials nav a"); // Move links inside the mobile check
  setInterval(function () {
    // Trigger click event for the next link in order
    links[currentIndex].click();

    // Increment the index for the next iteration
    currentIndex = (currentIndex + 1) % links.length;
  }, 5000);
}

// Add event listeners for touch events
var content = document.querySelector(".testimonials");
content.addEventListener("touchstart", handleTouchStart, false);
content.addEventListener("touchend", handleTouchEnd, false);


// couting


// Function to start the counting effect
function startCounting(element) {
  const targetNumber = parseInt(element.getAttribute("data-count"));
  let currentNumber = 0;
  const duration = 10000; // Increase the duration to slow down the counting
  const step = (targetNumber / duration) * 10;

  function updateCount() {
    if (currentNumber < targetNumber) {
      currentNumber += step;
      if (currentNumber > targetNumber) {
        currentNumber = targetNumber;
      }

      // Format the number with commas and append 'k'
      element.textContent = Math.round(currentNumber).toLocaleString();

      requestAnimationFrame(updateCount);
    }
  }

  updateCount();
}

// Intersection Observer to trigger counting effect
const aboutSection = document.querySelector(".contacts");
const numbersElements = aboutSection.querySelectorAll(".numbers");

// start counting again if the section is out of view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      numbersElements.forEach((element) => {
        startCounting(element);
      });
      observer.unobserve(aboutSection); // Stop observing once started
    }
  });
});

observer.observe(aboutSection);



// counting for the dotation part

// JavaScript
// JavaScript
const amountElement = document.getElementById("amount");
const targetCount = parseInt(amountElement.getAttribute("data-counts"), 10);

let currentCount = 0;

// Function to update the count
function updateCount() {
  if (currentCount < targetCount) {
    currentCount += 1;

    // Format the number with commas and append 'k'
    amountElement.textContent = "k" + currentCount.toLocaleString();

    // Call the function again after a delay to create a counting effect
    setTimeout(updateCount, 10);
  }
}

// Call the function to start the counting process
updateCount();

