<template>
    <div class="aq-reporting w-100 h-100">
        Test
    </div>
</template>

<script>
    import reportStore from '../store/modules/report/report';


    export default {
        beforeCreate() {
            if (!this.$store.getters['Report/getReport']) {
                this.$store.registerModule('Report', reportStore);
            }
        },
    };
</script>
