import { Result } from '@/interface/users';
import { ref } from 'vue';
import useApi from '../composables/use-api';

const searchParams = new URLSearchParams();
const url = 'https://randomuser.me/api/?';

export default function useData() {
    const { callApi } = useApi();
    const error = ref(false);
    const loading = ref(false);
    const quantity = ref(1);
    const gender = ref('');
    const users = ref<Result[]>();

    function fetchUsers() {
      searchParams.set('results', quantity.value.toString());
      searchParams.set('gender', gender.value)
      callApi( url, searchParams, error, loading ).then((res) => (users.value = res.results));
    }

    return { fetchUsers, loading, error, users, quantity, gender }; 
}