<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">Image Storage</a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "AppHeader",
        methods: {
            ...mapActions(['login', 'logout'])
        }
    }
</script>

<style>

</style>