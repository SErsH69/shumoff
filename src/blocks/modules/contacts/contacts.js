import $ from 'jquery';

const ContactsBlock = class ContactsBlock {
    constructor() {}
    mapContact() {
        if ($('#map2').length) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map2', {
                    center: [57.001064, 40.968217],
                    zoom: 16,
                    controls: ['zoomControl', 'fullscreenControl',"geolocationControl"]
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                myPlacemark2 = new ymaps.Placemark([57.001064, 40.968217], {
                    hintContent: 'Shumoff',
                    balloonContent: 'Shumoff'
                });
                myMap.geoObjects
                .add(myPlacemark2)
            });
        }
    }
    init() {
        this.mapContact();
    }
}

export default ContactsBlock;