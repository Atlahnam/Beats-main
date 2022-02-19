let myMap;

const init = () => {
myMap = new ymaps.Map("map", {
  center: [55.755820, 37.617633],
  zoom: 14,
  // controls: []
})

const coords = [
  [55.764873, 37.635393],
  [55.759546, 37.611989],
  [55.753071, 37.605801],
  [55.751479, 37.641337]
];

  const myCollection = new ymaps.GeoObjectCollection({},{
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/map/marker.svg",
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);