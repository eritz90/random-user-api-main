<template>
  <div>
    <DataTable
      :value="users"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
      :rows="5"
      :autoLayout="true">
      <Column field="picture.medium">
        <template #body="{ data }">
          <Avatar :image = "data.picture.large" shape ="circle" size="xlarge" />
        </template>
      </Column>
      <Column field="name.first" header="Name" :sortable="true">
        <template #body="{ data }"> {{ data.name.first }} {{ data.name.last }} </template>
      </Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone #">
        <template
          #body="{ data }"> {{ data.phone }} 
        </template>
      </Column>
      <Column field="gender" header="Gender">
        <template #body="{ data }"
          >{{ data.gender }}
        </template>
      </Column>
      <Column field="location" header="Address">
        <template #body="{ data }">
          {{ data.location.street.number }} {{ data.location.street.name }}, {{ data.location.city }},
          {{ data.location.state }}, {{ data.location.country }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IUsers from '../interface/users';
import Avatar from 'primevue/avatar';

export default defineComponent({
  name: 'UserList',
  components: { DataTable, Column, Avatar },
  props: {
    users: {
      type: Object as PropType<IUsers>,
      required: true,
      default(){
        return null;
      },
    },
  },
});
</script>