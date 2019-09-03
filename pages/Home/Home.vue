<template>
    <div class="page">
        <h2>Home Page</h2>
        <ul>
            <li>
                Split the vuex store logically into 3 levels
                <ul>
                    <li><b>App level</b>: Put the content into app/global level for information which is required for all component, e.g. app version, user session etc.</li>
                    <li><b>Page level</b>: Create nested module 'pageStore' inside 'created' hook of every Page. Makesure if the 'pageStore' is already available then un-register it and register again to reset it properly</li>
                    <li><b>Component level</b>: If a component state is only required by the page then create nested module of the component inside 'pageStore' module. If the component's state is required globally then create the module under app level</li>
                </ul>
            </li>
        </ul>
        <div class="row">
            <div class="column">
                <h3>Pros</h3>
                <ul>
                    <li>Resetting state related code is only at one place i.e. Page's created/destroyed hook</li>
                    <li>No need to reset individual component's state</li>
                </ul>
            </div>
            <div class="column">
                <h3>Cons</h3>
                <ul>
                    <li>Need to create component store nested under pageStore</li>
                    <li>Watches of component containing the router-vue should explicitly checked for new and old values, otherwise un-real watch events can be fired</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>Count {{ count }}</p>
        <button @click="incrementCount()">Increment Count</button>
        <hr />
        <div class="container">
            <div class="row">
                <div class="column">
                    <shared-component />
                </div>
                <div class="column">
                    <shared-component-with-preserved-state />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from './store';
import SharedComponent from '../../components/sharedComponent/sharedComponent'
import SharedComponentWithPreservedState from '../../components/sharedComponentWithPresevedState/sharedComponentWithPresevedState';

import { createNamespacedHelpers } from 'vuex'

const PAGE_STORE = 'pageStore';
const { mapGetters, mapActions } = createNamespacedHelpers(PAGE_STORE);

export default {
    name: 'HomePage',
    components: {
        SharedComponent,
        SharedComponentWithPreservedState,
    },
    computed: {
        ...mapGetters({
            count: 'getCount',
        }),
    },
    created() {
        // reset pageStore
        if (this.$store.state.pageStore) {
            this.$store.unregisterModule(PAGE_STORE);
        }
        this.$store.registerModule(PAGE_STORE, store);
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
    }
}
</script>