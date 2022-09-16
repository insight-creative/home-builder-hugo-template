const locationSelectTrigger = document.querySelector('.location-select__trigger')
const locationSelect = document.querySelector('.location-select')
const mapMarkers = document.querySelectorAll('.mt-location')
const mapMarker = document.querySelector('.mt-location__btn')

if(document.body.contains(locationSelectTrigger)) {
    locationSelectTrigger.addEventListener('click', openLocationsList)
}

function openLocationsList() {
    if(locationSelect.classList.contains('locations-list-open')) {
        locationSelectTrigger.setAttribute('aria-expanded', 'false')
        locationSelectTrigger.setAttribute('aria-label', 'open locations select tool')
        locationSelect.classList.remove('locations-list-open')
    } else {
        locationSelect.classList.add('locations-list-open')
        locationSelectTrigger.setAttribute('aria-expanded','true')
        locationSelectTrigger.setAttribute('aria-label', 'close locations select tool')
    }
}

if(document.body.contains(mapMarker)) {
    mapMarkers.forEach((marker) => {
        marker.addEventListener('mouseover', () => {
            markerButton = marker.querySelector('.mt-location__btn')
            markerButton.classList.add('marker-active')
        })
        marker.addEventListener('mouseout', () => {
            markerButton.classList.remove('marker-active')
        })
    })
}

export default openLocationsList