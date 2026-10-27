radioCheckboxHandler();

function radioCheckboxHandler() {
 const radio = document.getElementsByTagName("sp-radio");
 const chbox = document.getElementsByTagName("sp-checkbox");

 document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
  let targ = e.target;
  if (targ.tagName.toLowerCase() === 'sp-radio' || targ.closest('sp-radio')) (_radioHalndler(targ));
  if (targ.tagName.toLowerCase() === 'sp-checkbox' || targ.closest('sp-checkbox')) (_chboxHandler(targ));
 });

 function _radioHalndler(targ) {
  const section = targ.closest("div[id^='section_']");
  const radioElems = section.querySelectorAll('sp-radio');
  const chboxElems = section.querySelectorAll('sp-checkbox');

  for (let i = 0; i < radioElems.length; i++) {
   let radioElem = radioElems[i];
   if (!radioElem.checked) continue;
   let radioElVal = radioElem.value;
   for (let j = 0; j < chboxElems.length; j++) {
    let chboxElem = chboxElems[j];
    let chboxElVal = chboxElem.value;
    if (chboxElVal === radioElVal) {
     chboxElem.checked = false;
    } else {
     chboxElem.checked = true;
    }
   }
  }
 }

 function _chboxHandler(targ) {
  const section = targ.closest("div[id^='section_']");
  const radioElems = section.querySelectorAll('sp-radio');
  const chboxElems = section.querySelectorAll('sp-checkbox');

  let chboxCheckedLength = 0;
  for (let i = 0; i < chboxElems.length; i++) {
   let chboxEl = chboxElems[i];
   if (!chboxEl.checked) continue;
   chboxCheckedLength++;
  }
  if (chboxCheckedLength !== 3) {
   for (let i = 0; i < radioElems.length; i++) {
    let radioElem = radioElems[i];
    radioElem.checked = false;
   }
  } else {
   for (let i = 0; i < chboxElems.length; i++) {
    let chboxElem = chboxElems[i];
    if(!chboxElem.checked) radioElems[i].checked = true;
   }
  }
 }
}
