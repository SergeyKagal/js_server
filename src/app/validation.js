import { inputElement, labelElement } from './constants';

export const error = {
  state: false,
  show: () => {
    if (labelElement.classList.contains('label__hidden')) {
      labelElement.classList.remove('label__hidden');
    }
  },
  hide: () => {
    if (!labelElement.classList.contains('label__hidden')) {
      labelElement.classList.add('label__hidden');
    }
  },
};

export const isDataValid = (str) => {
  const regexp = new RegExp(/^[0-9]+$/);
  return regexp.test(str);
};

export const dataValidate = () => {
  const data = inputElement.value;
  if (!data.trim().length) {
    labelElement.textContent = '* Заполните это поле';
    error.state = true;
    error.show();
    return;
  } else {
    error.state = false;
    error.hide();
  }
  if (!isDataValid(data)) {
    labelElement.textContent = '* Только цифры';
    error.state = true;
    error.show();
  } else {
    error.state = false;
    error.hide();
  }
};
