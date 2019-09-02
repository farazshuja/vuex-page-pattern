<template>
    <div class="page">
        <h2>Navigation</h2>
        <p>Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Count {{ count }}</p>
        <button @click="incrementCount1()">Increment Count</button>
        <button @click="switchNestedRoute()">Change route</button>
        <hr />
        <router-view name="navigationView" />
    </div>
</template>

<script>
import store from './store';

import { mapGetters, createNamespacedHelpers } from 'vuex'

const PAGE_STORE = 'pageStore';
const { mapActions } = createNamespacedHelpers(PAGE_STORE);

export default {
    name: 'Navigation',
    computed: {
        ...mapGetters({
            count: 'pageStore/getCount',
            event: 'Ribbon/getClickEvent',
        }),
    },
    watch: {
        event: {
            handler(newVal, oldVal) {
                if(newVal === oldVal) {
                    return;
                }
                switch (this.event.id) {
                    case 'new_requirement': {
                        alert('watch.event fired');
                        break;
                    }
                    default:
                }
            },
        },
    },
    created() {
        // reset pageStore
        if (this.$store.state[PAGE_STORE]) {
           this.$store.unregisterModule(PAGE_STORE);
        }
        this.$store.registerModule(PAGE_STORE, store);
    },
    methods: {
        ...mapActions({
            incrementCount: 'incrementCount',
        }),
        incrementCount1() {
            this.incrementCount();
            this.$store.dispatch('Ribbon/setClickEvent', {
                id: 'new_requirement',
                data: null,
            });
        },
        switchNestedRoute() {
            this.$router.push({ name: 'Reporting' });
        },
    }
}
</script>