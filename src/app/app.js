import { formElement, inputElement } from './constants';
import { request } from './request';
import { dataValidate, error } from './validation';

export const submitHandler = formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  dataValidate();
  const formData = new FormData(formElement).get('input');
  if (!error.state) {
    console.log('send request...');
    request(formData);
    inputElement.value = '';
  }
});

export const inputHandler = inputElement.addEventListener('input', (e) => {
  dataValidate();
});
