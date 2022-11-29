import "https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlzd2E3NyIsImEiOiJjbGIyMjhueDYwMDl5M3BwZXU1bzd0dGs0In0.zm6q0KGZh8_tuazs26rJ6w';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [85.7769064, 20.2682801],
zoom: 14
});

map.on('load', () => {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
    [85.7769064, 20.2682801],
    [85.7769064, 20.2682801],
    [85.7769064, 20.2682801],
    [72.877656, 19.075984],
    [72.877656, 19.075984],
    [72.877656, 18.075984],
    
    ]
    }
    }
    });
    map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#888',
    'line-width': 8
    }
    });
    });