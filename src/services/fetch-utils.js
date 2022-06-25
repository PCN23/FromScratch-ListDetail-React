import { client } from './client.js';

export async function getHorses() {
  const response = await client
    .from('horses')
    .select('*');
  return response.data;
}

export async function getHorsesId(id) {
  const response = await client
    .from('horses')
    .select('*')
    .match({ id })
    .single(); // so we can end up with one thing.

  return response.data;
}