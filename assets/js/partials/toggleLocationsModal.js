const locationsButton = document.querySelector('.site-header__locations')
const mobileLocationsButton = document.querySelector('.site-header__locations--mobile')
const locations = document.querySelector('.mt-locations-modal')
const closeLocationsButton = document.querySelector('.mt-locations-modal__close')

locationsButton.addEventListener('click', toggleLocationsModal)
mobileLocationsButton.addEventListener('click', toggleLocationsModal)
closeLocationsButton.addEventListener('click', toggleLocationsModal)

function toggleLocationsModal() {
    if(locations.classList.contains('show-locations')) {     
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open locations search tool')
        locations.classList.remove('show-locations')
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
    } else {
        locations.classList.add('show-locations')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close locations search tool')
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
    }
}

export default toggleLocationsModal