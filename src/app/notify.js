import { notifyElement } from './constants';

export const notify = () => {
  notifyElement.classList.toggle('notify__hidden');
  setTimeout(() => {
    notifyElement.classList.toggle('notify__hidden');
  }, 2000);
};
