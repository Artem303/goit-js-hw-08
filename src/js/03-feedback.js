// import { save, load } from '../helpers/storage';

const inputElement = document.querySelector('input');
const textareaElement = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');

const saveLocal = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadLocal = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

let localStorageObg = {
  email: '',
  message: '',
};

inputElement.value = loadLocal('feedback-form-state').email ?? '';
textareaElement.value = loadLocal('feedback-form-state').message ?? '';

inputElement.addEventListener('input', addLocalStorageEmail);
function addLocalStorageEmail(e) {
  localStorageObg.email = e.currentTarget.value;
  saveLocal('feedback-form-state', localStorageObg);
}

textareaElement.addEventListener('input', addLocalStorageMessage);
function addLocalStorageMessage(e) {
  localStorageObg.message = e.currentTarget.value;
  saveLocal('feedback-form-state', localStorageObg);
}

formEl.addEventListener('submit', addConsole);
function addConsole(event) {
  event.preventDefault();
  console.log(loadLocal('feedback-form-state'));
  localStorage.clear();
  inputElement.value = '';
  textareaElement.value = '';
}
