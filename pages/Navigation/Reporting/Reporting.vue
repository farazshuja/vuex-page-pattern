<template>
    <div class="page">
        <h2>Reporting Page</h2>
        <p>This is reporting page. Its creating a sub-store required for Reporting under the pageStore module</p>
        <p>Its also registering a module at root level to show that watches in the parents are fired.</p>
    </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex';
import store from './store';
import gModule from '../../../store/gModule';

const PAGE_STORE = 'pageStore';
const SUB_PAGE_STORE = 'pageReporting';
const STORE_PATH = [PAGE_STORE, SUB_PAGE_STORE];

export default {
    name: 'Reporting',
    created() {
        // reset pageStore
        const pageStore = this.$store.state[PAGE_STORE];
        if (pageStore && pageStore[SUB_PAGE_STORE]) {
            this.$store.unregisterModule(STORE_PATH);
        }
        this.$store.registerModule(STORE_PATH, store);

        // this fires watches of the parent component
        // if it has <router-view />
        // to fix this always compare new and old value inside the watch
        // see Navigation.vue
        if (this.$store.state.gModule) {
            this.$store.registerModule('gModule', gModule);
        }
    },
}
</script>