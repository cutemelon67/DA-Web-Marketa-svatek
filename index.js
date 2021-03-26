'use strict';

const now = dayjs();
const messagePanel = document.querySelector('#msg');
const svatekMarketa = dayjs('2021-07-13');

/*
if (now.isAfter(svatekMarketa)) {
  console.log('Ano, Markéta již měla svůj svátek.');
  document.write('Ano, Markéta již měla svůj svátek.');
} else {
  console.log('Ne, Markéta si ještě musí počkat na svůj svátek.');
  document.write('Ne, Markéta si ještě musí počkat na svůj svátek.');
}
*/

if (now.isAfter(svatekMarketa)) {
  messagePanel.textContent = 'Ano, Markéta již měla svůj svátek.';
} else {
  messagePanel.textContent = 'Ne, Markéta si ještě musí počkat na svůj svátek.';
}
