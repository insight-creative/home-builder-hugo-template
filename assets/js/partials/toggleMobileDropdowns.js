const mobileMenu = document.querySelector('.site-header__mobile-nav')

function toggleMobileDropdowns() {
    mobileMenu.addEventListener('click', event => {
        const dropdownToggle = event.target.closest('.toggle-mobile-dropdown')
    
        if (dropdownToggle) {
            const dropdown = dropdownToggle.parentElement

            if(dropdown.classList.contains('active')) {
                dropdown.setAttribute('aria-expanded', 'false')
                dropdown.setAttribute('aria-label', 'open mobile dropdown menu')
                dropdown.classList.remove('active')
            } else {
                dropdown.classList.add('active')
                dropdown.setAttribute('aria-expanded','true')
                dropdown.setAttribute('aria-label','close mobile dropdown menu')
            }
    
            function updateMobileMenuHeight() {
                const mobileMenu = document.querySelector('.site-header__mobile-nav')
                const mobileMenuWrapper = document.querySelector('.site-header__mobile-nav-inner')
                const mobileMenuWrapperHeight = mobileMenuWrapper.offsetHeight
                
                mobileMenu.style.height = mobileMenuWrapperHeight + 'px'
            }
            
            updateMobileMenuHeight()
        } else {
            // Not a dropdown toggle, do nothing please!!!
        }
    })
}

toggleMobileDropdowns()

export default toggleMobileDropdowns