function InitMap(mapInfos) {
    var map = L.map('map', {
        minZoom: mapInfos.minZoom,
        maxZoom: mapInfos.maxZoom,
        crs: mapInfos.CRS
    });

    L.tileLayer(mapInfos.tilePattern, {
        attribution: mapInfos.attribution,
        tileSize: mapInfos.tileSize
    }).addTo(map);

    map.setView(mapInfos.center, mapInfos.defaultZoom);

    L.latlngGraticule().addTo(map);
    L.control.scale({ maxWidth: 200, imperial: false }).addTo(map);
    L.control.gridMousePosition().addTo(map);

    // Add city labels
    $.each(mapInfos.cities, function(index, city){
        const labelIcon = L.divIcon({
            iconSize: null,
            className: "map-label",
            html: "<span>" + city.name + "</span>"
        });
        L.marker([city.y, city.x], {
            icon: labelIcon,
            clickable: false,
            title: city.name
        }).addTo(map);
    });
}
