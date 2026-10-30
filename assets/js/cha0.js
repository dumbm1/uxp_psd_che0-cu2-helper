async function f2() {
 let linkCha = {
  "_obj": "groupEvent",
  "_target": [{
   "_enum": "ordinal",
   "_ref": "layer",
   "_value": "targetEnum",
  }],
 };
 let rmChaMask = {
  "_obj": "delete",
  "_target": [{
   "_enum": "ordinal",
   "_ref": "channel",
   "_value": "targetEnum",
  }],
 };
 let chaName = 'cha0_';
 const chaChboxes = document.getElementById('section_cha').querySelectorAll('sp-checkbox');
 const chaValues = [0.0, 0.0, 0.0, 0.0];

 for (let i = 0; i < chaChboxes.length; i++) {
  let chaChbox = chaChboxes[i];
  if (!chaChbox.checked) continue;
  chaValues[i] = 100.0;
 }

 for (let i = 0; i < chaChboxes.length; i++) {
  let chaChbox = chaChboxes[i];
  if (chaChbox.checked) continue;
  if (chaChbox.value === 'black') {
   chaName += 'K';
  } else {
   chaName += chaChbox.value.slice(0, 1).toUpperCase();
  }
 }
 if (!chaChboxes.length) return;

 let commands = [
  // Make adjustment layer
  {
   "_obj": "make",
   "_target": [{
    "_ref": "adjustmentLayer",
   }],
   "using": {
    "_obj": "adjustmentLayer",
    "type": {
     "_obj": "channelMixer",
     "black": {
      "_obj": "channelMatrix",
      "black": {
       "_unit": "percentUnit",
       "_value": 100.0,
      },
     },
     "cyan": {
      "_obj": "channelMatrix",
      "cyan": {
       "_unit": "percentUnit",
       "_value": 100.0,
      },
     },
     "magenta": {
      "_obj": "channelMatrix",
      "magenta": {
       "_unit": "percentUnit",
       "_value": 100.0,
      },
     },
     "presetKind": {
      "_enum": "presetKindType",
      "_value": "presetKindDefault",
     },
     "yellowColor": {
      "_obj": "channelMatrix",
      "yellowColor": {
       "_unit": "percentUnit",
       "_value": 100.0,
      },
     },
    },
   },
  },
  // Set current adjustment layer
  {
   "_obj": "set",
   "_target": [{
    "_enum": "ordinal",
    "_ref": "adjustmentLayer",
    "_value": "targetEnum",
   }],
   "to": {
    "_obj": "channelMixer",
    "black": {
     "_obj": "channelMatrix",
     "black": {
      "_unit": "percentUnit",
      "_value": chaValues[3],
     },
    },
    "cyan": {
     "_obj": "channelMatrix",
     "cyan": {
      "_unit": "percentUnit",
      "_value": chaValues[0],
     },
    },
    "magenta": {
     "_obj": "channelMatrix",
     "magenta": {
      "_unit": "percentUnit",
      "_value": chaValues[1],
     },
    },
    "presetKind": {
     "_enum": "presetKindType",
     "_value": "presetKindCustom",
    },
    "yellowColor": {
     "_obj": "channelMatrix",
     "yellowColor": {
      "_unit": "percentUnit",
      "_value": chaValues[2],
     },
    },
   },
  },
  // Set current layer
  {
   "_obj": "set",
   "_target": [{
    "_enum": "ordinal",
    "_ref": "layer",
    "_value": "targetEnum",
   }],
   "to": {
    "_obj": "layer",
    "name": chaName,
   },
  },
 ];

 if (document.getElementById('link_to_lay_cha').checked && !hasLinkedLay()) commands.push(linkCha);

 if (document.getElementById('rm_mask_cha').checked) commands.push(rmChaMask);

 async function cha0(executionContext, descriptor) {
  let commands = descriptor.commands;
  return await require("photoshop").action.batchPlay(commands, {});
 }

 console.log(
  await require("photoshop").core.executeAsModal(cha0, {"commandName": "Action Commands", descriptor: {commands}}),
 );
}

document.getElementById("btnAddCha").addEventListener("click", f2);


