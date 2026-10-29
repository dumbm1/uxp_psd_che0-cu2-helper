/**
 * Экшн Фотошопа "затянуть слой в 2% myk"
 * создает кривую
 * привязывает к слою
 * удаляет маску
 * переименовывает кривую в '_myk+2'
 * каналы myk затягивает в 2%
 * */
async function f() {
 async function _myk2() {
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
      }
     }
    }
   },
   // Create Clipping Mask current layer
   {
    "_obj": "groupEvent",
    "_target": [
     {
      "_enum": "ordinal",
      "_ref": "layer",
      "_value": "targetEnum"
     }
    ]
   },
   // Delete current channel
   {
    "_obj": "delete",
    "_target": [
     {
      "_enum": "ordinal",
      "_ref": "channel",
      "_value": "targetEnum"
     }
    ]
   },
   // Set current layer
   {
    "_obj": "set",
    "_target": [
     {
      "_enum": "ordinal",
      "_ref": "layer",
      "_value": "targetEnum"
     }
    ],
    "to": {
     "_obj": "layer",
     "name": "myk+2"
    }
   },
   // Set current adjustment layer
   {
    "_obj": "set",
    "_target": [
     {
      "_enum": "ordinal",
      "_ref": "adjustmentLayer",
      "_value": "targetEnum"
     }
    ],
    "to": {
     "_obj": "curves",
     "adjustment": [
      {
       "_obj": "curvesAdjustment",
       "channel": {
        "_enum": "channel",
        "_ref": "channel",
        "_value": "magenta"
       },
       "curve": [
        {
         "_obj": "paint",
         "horizontal": 0.0,
         "vertical": 0.0
        },
        {
         "_obj": "paint",
         "horizontal": 250.0,
         "vertical": 250.0
        }
       ]
      },
      {
       "_obj": "curvesAdjustment",
       "channel": {
        "_enum": "channel",
        "_ref": "channel",
        "_value": "yellow"
       },
       "curve": [
        {
         "_obj": "paint",
         "horizontal": 0.0,
         "vertical": 0.0
        },
        {
         "_obj": "paint",
         "horizontal": 250.0,
         "vertical": 250.0
        }
       ]
      },
      {
       "_obj": "curvesAdjustment",
       "channel": {
        "_enum": "channel",
        "_ref": "channel",
        "_value": "black"
       },
       "curve": [
        {
         "_obj": "paint",
         "horizontal": 0.0,
         "vertical": 0.0
        },
        {
         "_obj": "paint",
         "horizontal": 250.0,
         "vertical": 250.0
        }
       ]
      }
     ],
     "presetKind": {
      "_enum": "presetKindType",
      "_value": "presetKindCustom"
     }
    }
   }
  ];
  return await require("photoshop").action.batchPlay(commands, {});
 }

 console.log(
  await require("photoshop").core.executeAsModal(_myk2, {"commandName": "Action Commands"})
 );

}

document.getElementById('btnAddCu').addEventListener('click', f);