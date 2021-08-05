import fetchApi from '../api/fetch-api';
import { Ref } from 'vue';

const sendRequest = fetchApi();

function getApi() {
  async function get(url: string, searchParams: URLSearchParams, error: Ref<boolean>, loading: Ref<boolean>) {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const request = new Request(`${url}${searchParams}`, options);
    error.value = false;
    loading.value = true;

    try {
      const result = await sendRequest(request);
      return result.json();
    } catch {
      error.value = true;
    } finally {
      loading.value = false;
    }
  }
  return { callApi: get };
}



export default getApi;
