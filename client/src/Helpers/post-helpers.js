import Axios from 'axios';

export async function toggleLike(id) {
  const url = `/api/news/${id}`;
  try {
    await Axios.delete(url);
  } catch (error) {
    console.log(error);
  }
  return true;
}
