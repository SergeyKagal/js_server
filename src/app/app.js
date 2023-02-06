import { formElement, inputElement, labelElement } from './constants';
import { dataValidate, error, isDataValid } from './validation';

export const submitHandler = formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  dataValidate();
  const formData = new FormData(formElement).get('input');
  if (!error.state) {
    console.log('send request...');
    inputElement.value = '';
  }
});

export const inputHandler = inputElement.addEventListener('input', (e) => {
  dataValidate();
});
