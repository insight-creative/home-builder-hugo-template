require('fslightbox');

console.log("%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons", "background: #1d1d1d; color: white; padding: 5px 10px;")

const siteHeader = document.querySelector(".site-header")
const mobileMenu = document.querySelector('.site-header__mobile-nav')
const hamburger = document.querySelector('.hamburger')
const searchButton = document.querySelector('.search__open');
const closeButton = document.querySelector('.search__close');

hamburger.addEventListener('click', toggleMobileMenu)

mobileMenu.style.height = 0

function toggleMobileMenu() {
    const mobileMenuWrapper = document.querySelector('.site-header__mobile-nav-inner')
    const mobileMenuWrapperHeight = mobileMenuWrapper.getBoundingClientRect().height

    mobileMenu.style.height = 0

    if(mobileMenu.classList.contains('nav-open')) {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open mobile menu')
        mobileMenu.classList.remove('nav-open')
        mobileMenu.style.height = 0
        hamburger.classList.remove('is-active')
    } else {
        mobileMenu.classList.add('nav-open')
        mobileMenu.style.height = mobileMenuWrapperHeight + 'px'
        hamburger.classList.add('is-active')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close mobile menu')
    }
}

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

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function openSearchModal() {
  const searchModal = document.querySelector('.search-modal');
  
  searchModal.classList.add('search-open');
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function closeSearchModal() {
  const searchModal = document.querySelector('.search-modal');

  searchModal.classList.remove('search-open');
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
}

if (document.body.contains(searchButton)) {
  searchButton.addEventListener('click', openSearchModal);
}

if (document.body.contains(closeButton)) {
  closeButton.addEventListener('click', closeSearchModal);
}