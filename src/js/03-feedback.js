import { saveLocal, loadLocal } from '../helpers/storage';

const throttle = require('lodash.throttle');

const formElement = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

let storageObg = {};

formElement.addEventListener('input', throttle(addLocalStorage, 500));
formElement.addEventListener('submit', onSubmit);

function addLocalStorage(e) {
  storageObg[e.target.name] = e.target.value;
  saveLocal(LOCAL_KEY, storageObg);
}

function onSubmit(e) {
  e.preventDefault();
  if (formElement.email.value === '' || formElement.message.value === '') {
    return alert('Є незаповнені поля!!!');
  }
  console.log(loadLocal(LOCAL_KEY));
  localStorage.removeItem(LOCAL_KEY);
  formElement.reset();
  storageObg = {};
}

function checkInput(e) {
  const sevaedElement = localStorage.getItem(LOCAL_KEY);
  if (sevaedElement) {
    storageObg = JSON.parse(sevaedElement);
    for (let key in storageObg) {
      formElement[key].value = storageObg[key];
    }
  }
}
checkInput();
