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