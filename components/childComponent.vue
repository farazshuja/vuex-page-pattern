<template>
    <h3>Accessing parent state form Child component {{ count }}</h3>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
        'count',
        ]),
    },    
}
</script>