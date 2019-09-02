<template>
    <div>
        <button @click="onLoadAgain">Load Again</button>
        Count: {{ count }}
        <ul>
            <li v-if="isLoading">
            Loading...
            </li>
            <li v-else-if="error">
            {{ error }}
            </li>
            <template v-else>
            <li
                v-for="user in users"
                :key="user.id"
            >
                {{ user }}
            </li>
            </template>
        </ul>
        <child-component />
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import store from '../store/modules/users';
import ChildComponent from './childComponent';

export default {
  store,
  components: {
      ChildComponent,
  },
  computed: {
    ...mapState({
      isLoading: 'isLoading',
      users: 'users',
      error: 'error',
      count: 'count',
    }),
  },
  methods: {
    ...mapActions({
      fetchUsers: 'fetchUsers',
    }),

    onLoadAgain() {
        this.fetchUsers();
    }
  },

  created() {
    this.fetchUsers()
  },
  destroyed() {
  }
}
</script>
