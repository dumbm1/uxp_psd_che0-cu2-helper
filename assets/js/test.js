const app = require("photoshop").app;

document.getElementById('btnTest').addEventListener('click', (e) => {
 console.log(hasLinkedLay());
});

function getActiveLayerRelativeIndex() {
 const doc = app.activeDocument;
 if (!doc || !doc.activeLayers || doc.activeLayers.length === 0) return -1;

 // берем первый слой из массива [0]
 const activeLayer = doc.activeLayers[0];

 // Защита: если parent отсутствует, берем корневой doc
 const parentContainer = activeLayer.parent ? activeLayer.parent : doc;
 const parentLayers = Array.from(parentContainer.layers);

 // Находим индекс активного слоя по его id
 const index = parentLayers.findIndex(layer => layer.id === activeLayer.id);

 return index;
}

function getLayerAboveActive() {
 const doc = app.activeDocument;
 // Проверяем, есть ли открытый документ и выделенный слой
 if (!doc || !doc.activeLayers || doc.activeLayers.length === 0) return null;

 // Получаем текущий активный слой
 const activeLayer = doc.activeLayers[0];

 // Определяем родительский контейнер (группа или корень документа)
 const parentContainer = activeLayer.parent ? activeLayer.parent : doc;
 const parentLayers = Array.from(parentContainer.layers);

 // Находим индекс активного слоя
 const activeIndex = parentLayers.findIndex(layer => layer.id === activeLayer.id);

 // Если индекс больше 0, значит над активным слоем физически есть другой слой
 if (activeIndex > 0) {
  const layerAbove = parentLayers[activeIndex - 1];
  return layerAbove; // Возвращаем объект слоя
 }

 // Если слой самый верхний, возвращаем null
 return null;
}

/*
function hasLinkedLay() {
 const doc = app.activeDocument;
 // Проверяем, есть ли открытый документ и выделенный слой
 if (!doc || !doc.activeLayers || doc.activeLayers.length === 0) return null;

 // Получаем текущий активный слой
 const activeLayer = doc.activeLayers[0];

 // Определяем родительский контейнер (группа или корень документа)
 const parentContainer = activeLayer.parent ? activeLayer.parent : doc;
 const parentLayers = Array.from(parentContainer.layers);

 // Находим индекс активного слоя
 const activeIndex = parentLayers.findIndex(layer => layer.id === activeLayer.id);

 // Если индекс больше 0, значит над активным слоем физически есть другой слой
 if (activeIndex > 0) {
  const layerAbove = parentLayers[activeIndex - 1];
  return layerAbove.isClippingMask; // Возвращаем объект слоя
 }

 // Если слой самый верхний, возвращаем null
 return false;
}*/

function hasLinkedLay() { // Google AI
 const doc = require('photoshop').app.activeDocument;
 // Проверяем, есть ли открытый документ и выделенный слой
 if (!doc || !doc.activeLayers || doc.activeLayers.length === 0) return null;

 // Получаем текущий активный слой
 const activeLayer = doc.activeLayers[0];

 // Определяем родительский контейнер (группа или корень документа)
 const parentContainer = activeLayer.parent ? activeLayer.parent : doc;
 const parentLayers = Array.from(parentContainer.layers);

 // Находим индекс активного слоя
 const activeIndex = parentLayers.findIndex(layer => layer.id === activeLayer.id);

 // Если индекс больше 0, значит над активным слоем физически есть другой слой
 if (activeIndex > 0) {
  const layerAbove = parentLayers[activeIndex - 1];
  return layerAbove.isClippingMask; // Возвращаем объект слоя
 }

 // Если слой самый верхний, возвращаем null
 return false;
}
