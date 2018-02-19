var map;

DG.then(function () {
    map = DG.map('map', {
        center: [55.0286, 82.9365],
        zoom: 15
    });

    var auraIcon = DG.icon({
        iconUrl: 'img/s4_icon_aura.png',
        iconSize: [60, 76],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'img/s4_icon_aura_shadow.png',
        shadowSize: [67, 15],
        shadowAnchor: [27, 27]
    });

    var oknaIcon = DG.icon({
        iconUrl: 'img/s4_icon_okna.png',
        iconSize: [60, 76],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'img/s4_icon_aura_shadow.png',
        shadowSize: [67, 15],
        shadowAnchor: [27, 27]
    });

    var gasIcon = DG.icon({
        iconUrl: 'img/s4_icon_gas.png',
        iconSize: [42, 53],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'img/s4_icon_small_shadow.png',
        shadowSize: [67, 15],
        shadowAnchor: [34, 46]
    });

    var schoolIcon = DG.icon({
        iconUrl: 'img/s4_icon_school.png',
        iconSize: [42, 53],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'img/s4_icon_small_shadow.png',
        shadowSize: [67, 15],
        shadowAnchor: [34, 46]
    });

    var hospitalIcon = DG.icon({
        iconUrl: 'img/s4_icon_hospital.png',
        iconSize: [42, 53],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'img/s4_icon_small_shadow.png',
        shadowSize: [67, 15],
        shadowAnchor: [34, 46]
    });

    var busstopIcon = DG.icon({
        iconUrl: 'img/s4_icon_busstop.png',
        iconSize: [42, 53],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'img/s4_icon_small_shadow.png',
        shadowSize: [67, 15],
        shadowAnchor: [34, 46]
    });

    DG.marker([55.0286, 82.9365], {icon: auraIcon}).addTo(map);
    DG.marker([55.0268, 82.9390], {icon: oknaIcon}).addTo(map);
    DG.marker([55.0269, 82.9335], {icon: gasIcon}).addTo(map);
    DG.marker([55.0252, 82.9355], {icon: schoolIcon}).addTo(map);
    DG.marker([55.0248, 82.9395], {icon: hospitalIcon}).addTo(map);
    DG.marker([55.0266, 82.9435], {icon: busstopIcon}).addTo(map);
});