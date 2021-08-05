<template>
  <h1>Random User API Generator</h1>
  <div class="input">
  <InputNumber placeholder="Number of users" v-model="quantity" :min="1" showButtons decrementButtonClass="p-button-success" incrementButtonClass="p-button-success" />
  <Dropdown
    placeholder="Select a Gender"
    v-model="gender"
    :options="genders"
    optionLabel="name"
    optionValue="code"
    />
  </div>
  <div class="submit">
  <Button @click="getRandomUser" class="p-button-success p-button-rounded">Generate Random Users</Button>
  <p><ProgressSpinner v-if="loading" /></p>
</div>
  <UserList v-if= "users" :users= "users" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from '../components/user-list.vue';
import { genders } from '../constants/genders';
import getData from '../composables/use-users';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';

export default defineComponent({
  components: { InputNumber, Dropdown, Button, UserList, ProgressSpinner },
  setup() {
    const { fetchUsers, users, quantity, gender, error, loading } = getData();

    function getRandomUser() {
      fetchUsers();
    }

    return { getRandomUser, loading, error, users, quantity, gender, genders };
  },
});
</script>

<style>
  .input{
    margin-top: 1%;
  }
.submit{
  margin-top: 1%;
}
</style>
