<template>
    <div class="component">
        <h4>Shared component with preserved state</h4>
        <p>A shared component with its own state but state will be preserved across pages!!</p>
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
    </div>
</template>

<script>
import store from './store';
import { createNamespacedHelpers } from 'vuex'


const STORE_PATH = ['pageStore', 'componentPreservedStore'];
const { mapGetters, mapActions } = createNamespacedHelpers(STORE_PATH.join('/'));


export default {
    name: 'SharedComponentWithPreservedState',
    computed: {
        ...mapGetters({
            count: 'getCount',
        }),
    },
    created() {
        if (!this.$store.state[STORE_PATH]) {
            this.$store.registerModule(STORE_PATH, store);
        }
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    }
}
</script>