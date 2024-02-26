<template>
    <footer class="footer-section">
        <section class="contact">
            <a class="icon-container container-style" target="_blank" rel="noopener noreferrer"
                href="https://linkedin.com/in/ronaldhgamez">

                <LinkedinSVG :size="35"></LinkedinSVG>

                Linkedin
            </a>
            <a class="icon-container container-style" target="_blank" rel="noopener noreferrer"
                href="https://github.com/ronaldhgamez">

                <GitHubSVG :size="35"></GitHubSVG>

                GitHub
            </a>
        </section>
        <span>Created by <a href="https://www.linkedin.com/in/ronaldhgamez/" target="_blank" rel="noopener noreferrer">Ronald Herrera Gámez.</a></span>
    </footer>
</template>

<script lang="ts">
import LinkedinSVG from '../assets/svg/LinkedinSVG.vue';
import GitHubSVG from '../assets/svg/GitHubSVG.vue';

export default {
    name: 'FooterView',
    components: {
        LinkedinSVG, GitHubSVG
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
    height: 200px;
    border-top: 1px solid var(--hover-color);
}


/* Icon */

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    padding: 10px 0;
}

a {
    font-weight: 650;
    text-decoration: none;
    color: var(--text-color);
}

.container-style {
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        background-color: var(--hover-color);
        transition: 0.25s;
    }
}

</style>