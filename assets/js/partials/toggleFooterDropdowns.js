const footer = document.querySelector('.footer')

function toggleFooterDropdowns() {

    footer.addEventListener('click', event => {
        const dropdownToggle = event.target.closest('.toggle-mobile-dropdown')

        if (dropdownToggle) {
            const dropdown = dropdownToggle.closest('.footer__col')
            const footerMenuContainer = dropdown.querySelector('.footer__menu-container')
            const footerMenu = dropdown.querySelector('.footer__menu')
            const footerMenuHeight = footerMenu.offsetHeight

            if(dropdown.classList.contains('footer-dropdown-is-open')) {
                dropdown.setAttribute('aria-expanded', 'false')
                dropdown.setAttribute('aria-label', 'open mobile footer dropdown menu')
                dropdown.classList.remove('footer-dropdown-is-open')

                footerMenuContainer.style.height = 0
            } else {
                dropdown.classList.add('footer-dropdown-is-open')
                dropdown.setAttribute('aria-expanded','true')
                dropdown.setAttribute('aria-label','close mobile footer dropdown menu')

                footerMenuContainer.style.height = footerMenuHeight + 'px'
            }
            
        } else {
            // Not a dropdown toggle, do nothing please!!!
        }
    })
}

toggleFooterDropdowns()

export default toggleFooterDropdowns