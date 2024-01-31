<template>
    <hr>
    <footer class="footer-section">
        <section class="contact">
            <linkedin-icon></linkedin-icon>
            <GitHubIcon></GitHubIcon>
        </section>
        <span>All rights reserved. Created by Ronald Herrera Gámez.</span>
    </footer>
</template>

<script lang="ts">
import LinkedinIcon from '../components/LinkedinIcon.vue';
import GitHubIcon from '../components/GitHubIcon.vue';

export default {
    name: 'FooterView',
    components: {
        LinkedinIcon, GitHubIcon
    }
}
</script>

<style scoped>
.contact {
    display: flex;
    margin-bottom: 30px;
}

.footer-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
}

</style>