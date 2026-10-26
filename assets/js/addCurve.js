const {app, action, core} = require("photoshop");

/*async function addCurvesLayer() {
 const {app, action, core} = require("photoshop");

 try {
  await core.executeAsModal(async () => {

   let commands = {
    "_obj": "make",
    "_target": [
     {
      "_ref": "adjustmentLayer"
     }
    ],
    "using": {
     _class: "contentLayer",
     type: {
      _class: "channelMixer" // Внутри него инициализируем микшер
     }
    },
    layerName: "hahaha",
    _options: {
     dialogOptions: "dontDisplay"
    }
   };

   await action.batchPlay([commands], {});

  }, {"commandName": "Создание Channel Mixer в CMYK"});
 } catch (e) {
  console.log(e);
 }
}*/

async function addCurvesLayer() {

 async function addcu() {
  let commands = [
   // Make adjustment layer
   {
    "_obj": "make",
    "_target": [
     {
      "_ref": "adjustmentLayer"
     }
    ],
    "using": {
     "_obj": "adjustmentLayer",
     "type": {
      "_obj": "curves",
      "presetKind": {
       "_enum": "presetKindType",
       "_value": "presetKindDefault"
      },
      "transferFunction": 0
     }
    }
   }
  ];
  return await require("photoshop").action.batchPlay(commands, {});
 }

 console.log(
  await require("photoshop").core.executeAsModal(addcu, {"commandName": "Action Commands"})
 );

}

const btnAddCu = document.getElementById("btnAddCu").addEventListener("click", addCurvesLayer);
