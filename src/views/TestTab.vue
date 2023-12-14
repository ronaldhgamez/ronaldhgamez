<template>
    <div>
        <h1>Test Tab</h1>
        <span>Dark mode: </span>
        <button @click="toggleDarkMode">Change</button>
    </div>
</template>

<script lang="ts">

export default {
    name: 'test-tab',
    methods: {
        toggleDarkMode() {
            /* this.$store.commit('toggleAppereanceMode'); */
        },
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1,
span {
    color: white;
}

/* Your component styles */
.dark-mode {
    background-color: #333;
    color: #fff;
}
</style>