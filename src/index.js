"use strict";
//import * as initMap from "./map";
import { initMap } from './map'; //изменила строку импорта
//var myMap; //добавим переменную


ymaps.ready(() => {
  initMap(ymaps, "map");
  console.log("inited");
});

// Дождёмся загрузки API и готовности DOM.
/*ymaps.ready(init);
function init () {

  // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
      // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
    // Добавим метку
    var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.8, 37.8] // координаты точки
    }

});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject);
    // размещение в скрытом контейнере
    $('#tabs').bind('tabsshow', function (event, ui) {
        myMap.container.fitToViewport();
    });
    document.getElementById('destroyButton').onclick = function () {
 // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}*/
