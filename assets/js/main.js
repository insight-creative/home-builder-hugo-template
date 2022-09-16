console.log("%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons", "background: #1d1d1d; color: white; padding: 5px 10px;")

import { toggleMobileMenu, toggleMobileDropdowns, toggleFooterDropdowns, openLocationsList, toggleLocationsModal, filterPosts } from "./partials";

const siteHeader = document.querySelector(".site-header")
const hasSubMenu = document.querySelectorAll(".has-sub-menu")
const expirationField = document.querySelectorAll(".mt-coupon__expiration-date")

// Create a date and add 14 days to it (in milliseconds)
const date = new Date(+new Date + 12096e5);
// Convert the date to a string in the right format. Need to add one to month number because it"s showing the wrong number for some reason
const expirationDate = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();

// Insert the formatted expiration date into the paragraphs
expirationField.forEach((expiration) => {
    expiration.innerHTML= "Expires " + expirationDate
})

var testimonialsSwiper = new Swiper(".testimonials-swiper", {
    grabCursor: true,
    setWrapperSize: true, 
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 32
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 32
      },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".testimonials-pagination",
      clickable: true,
      type: "bullets",
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
  });

hasSubMenu.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.classList.add("active")
        const activeLink = document.querySelector(".active")
        const activeSubMenu = activeLink.querySelector(".sub-menu")
        const activeSubMenuContainer = activeSubMenu.querySelector(".sub-menu__inner").offsetHeight
        activeSubMenu.style.height = activeSubMenuContainer + "px"
    })
    link.addEventListener("mouseout", () => {
        link.classList.remove("active")
        const subMenuToHide = link.querySelector(".sub-menu")
        subMenuToHide.removeAttribute("style")
    })
})

let scrollState = 0

var scrollTop = function() {
  return window.scrollY
}

var scrollDetect = function(collapse, expand) {
  var currentScroll = scrollTop()
  if (currentScroll > scrollState) {
    collapse()
  } else {
    expand()
  }
  scrollState = scrollTop()
}

function collapseNav() {
  siteHeader.classList.remove("expand")
  siteHeader.classList.add("collapse")
}

function expandNav() {
  siteHeader.classList.remove("collapse")
  siteHeader.classList.add("expand")
}

window.addEventListener("scroll", function() {
  scrollDetect(collapseNav, expandNav)
})