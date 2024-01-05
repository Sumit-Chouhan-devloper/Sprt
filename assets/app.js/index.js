
$(".responsive").slick({
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  nextArrow: ".next_caro",
  prevArrow: ".previous_caro",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

// date function
document.getElementById("myYear").innerHTML = new Date().getFullYear();

// backtotop
const topbtn = document.getElementById("topbtn");
window.onscroll = function () {
  topscroll();
};

function topscroll() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// navbar
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const crossIcon = document.getElementById("cross-icon");

  // Toggle the visibility of the mobile menu
  mobileMenu.classList.toggle("!translate-x-0");

  // Toggle the visibility of the menu and cross icons
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");

  // Toggle the overflow property of the body
  document.body.classList.toggle("overflow-hidden");
}

// tabs
document.addEventListener("DOMContentLoaded", function () {
  showTab("tab1", "1");
});

function showTab(tabId, buttonId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.classList.add("hidden");
  });

  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => {
    button.style.color = "";
    button.classList.remove("active");
  });

  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.remove("hidden");
  }

  const clickedButton = document.getElementById(buttonId);
  if (clickedButton) {
    clickedButton.classList.add("tab_border");
    clickedButton.classList.add("active");
  } else {
    console.log("Clicked button not found");
  }
}
