<template>
    <div class="container">
        <div v-if="isLoading">
            Loading ...
        </div>
        <div v-else-if="error">
            Error
        </div>
        <div v-else>
            <h1>App level version: {{ version }}</h1>
            <router-link to="/home">Home</router-link>&nbsp;
            <router-link to="/navigation/itemoverview">Item Overview</router-link>&nbsp;
            <router-link to="/navigation/reporting">Reporting</router-link>&nbsp;
            <router-link to="/dashboard">Dashboard</router-link>&nbsp;            
            <hr />
            <router-view/>
        </div>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
        <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
        <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import RibbonStore from "./store/ribbon/ribbon";

    export default {
        name: 'App',
        computed: {
            ...mapState(['isLoading', 'error', 'version'])
        },
        methods: {
            ...mapActions(['fetchApp']),
        },
        created() {
            this.$store.registerModule("Ribbon", RibbonStore);
            this.fetchApp();
        },
    };
</script>

<style>
    button {
        margin: 5px;
    }
</style>
