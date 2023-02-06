import { url } from './constants';
import { notify } from './notify';

export const request = async (data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ num: data }),
  });
  if (res.ok) {
    notify();
  }
};
