main();

function main() {
 const radio_cu_elems = document.querySelectorAll('#radio_group_cu > sp-radio');
 const chbox_cu_elems = document.querySelectorAll('#chbox_group_cu > sp-checkbox');
 const btnTest = document.getElementById('btnAddChe');

 btnTest.addEventListener('click', (e) => {
  for (let i = 0; i < radio_cu_elems.length; i++) {
   let radio_cu_element = radio_cu_elems[i];
   if (!radio_cu_element.checked) continue;
   let radioVal = radio_cu_element.value;
   for (let j = 0; j < chbox_cu_elems.length; j++) {
    let chbox_cu_elem = chbox_cu_elems[j];
    if (chbox_cu_elem.value == radioVal) {
     chbox_cu_elem.checked = false;
    } else{
     chbox_cu_elem.checked = true;
    };

   }
  }
 });
}
