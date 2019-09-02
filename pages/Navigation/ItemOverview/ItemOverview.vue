<template>
    <div class="page">
        <h2>Item Overview Page</h2>
        <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
        <h4 />
        <shared-component-with-preserved-state />
    </div>
</template>

<script>
import store from './store';
import SharedComponentWithPreservedState from '../../../components/sharedComponentWithPresevedState/sharedComponentWithPresevedState';

import { createNamespacedHelpers, mapGetters } from 'vuex'

const PAGE_STORE = 'pageStore';
const SUB_PAGE_STORE = 'pageItemOverView';
const STORE_PATH = [PAGE_STORE, SUB_PAGE_STORE];
const { mapActions } = createNamespacedHelpers(STORE_PATH.join('/'));

export default {
    name: 'ItemOverview',
    components: {
        SharedComponentWithPreservedState,
    },
    computed: {
        ...mapGetters({
            count: 'pageStore/pageItemOverView/getCount',
            countComponent: 'componentStore/getCount',
        }),
    },
    created() {
        // reset pageStore
        const pageStore = this.$store.state[PAGE_STORE];
        if (pageStore && pageStore[SUB_PAGE_STORE]) {
            this.$store.unregisterModule(STORE_PATH);
        }
        this.$store.registerModule(STORE_PATH, store);
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    }
}
</script>