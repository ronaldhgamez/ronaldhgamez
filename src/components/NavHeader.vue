<template>
    <header id="container" class="fixed">

        <router-link class="logo" to="/">
            <img id="nav-logo" :src="logoURL" alt="Costa Rica Flag" width=120px>
        </router-link>

        <div class="webHeaderContent">
            <nav class="center navBarMenu">
                <a class="navOption center" href="#home"> {{ $t("appView.home") }} </a>
                <a class="navOption center" href="#projects"> {{ $t("appView.projects") }} </a>
                <a class="navOption center" target="_blank" :href="cv"> {{ $t("appView.resume") }} </a>
            </nav>
            <!-- Linkedin Icon Link -->
            <a class="linkedin navOption center" href="https://www.linkedin.com/in/ronaldhgamez/" aria-label="linkedin"
                target="_blank" rel="noopener nofollow">
                <LinkedinSVG :size="24"></LinkedinSVG>
            </a>
            <!-- Github Icon Link -->
            <a class="github navOption center" href="https://github.com/ronaldhgamez" aria-label="github" target="_blank" rel="noopener nofollow">
                <GitHubSVG :size="24"></GitHubSVG>
            </a>
            <!-- Language Selection -->
            <language-selection-option></language-selection-option>
            <!-- Theme Mode Selection -->
            <toggle-buttom-theme></toggle-buttom-theme>
        </div>
    </header>
</template>

<script lang="ts">
import LanguageSelectionOption from '../components/LanguageSelectionOption.vue';
import ToggleButtomTheme from '../components/ToggleButtomTheme.vue';
import GitHubSVG from '../assets/svg/GitHubSVG.vue';
import LinkedinSVG from '../assets/svg/LinkedinSVG.vue'

export default {
    name: 'NavHeader',
    components: { LanguageSelectionOption, ToggleButtomTheme, GitHubSVG, LinkedinSVG },
    data() {
        return {
            logoURL: 'https://github.com/ronaldhgamez/files-and-images/blob/main/logo/logoporfolio.png?raw=true',
            cv: 'https://drive.google.com/file/d/1BnyR4y1CFjbeOAdOopyiNd7izE0G3oxY/view?usp=sharing',
        }
    }
}

window.addEventListener('scroll', () => {
    let logo = document.getElementById('nav-logo')!;
    let header = document.getElementById('container')!;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Adjust the smaller size as needed
        logo.style.width = '60px'
        header.classList.add('blur-header')
    } else {
        // Initial logo size when not scrolled
        logo.style.width = '120px'
        header.classList.remove('blur-header')
    }
});

</script>

<style scoped>

#nav-logo {
    position: relative;
    width: 120px;
    transition: width 0.5s ease-in-out, filter 0.5s ease-in-out;
}

#nav-logo:hover {
    filter: drop-shadow(0 0 5px rgba(116, 167, 255, 0.44));
}

#container {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding-right: 45px;
    align-items: flex-start;
}

.fixed {
    position: fixed;
    top: 0;
    z-index: 4;
    background-color: --theme-color;
}

.logo {
    padding-left: 30px;
    cursor: pointer;
}

.webHeaderContent {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: right;
}

.navOption {
    font-size: 17px;
    font-weight: 700;
    height: 63px;
    display: flex;
    align-items: center;
    padding: 0px 15px;
    /* left and right only */
    cursor: pointer;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.1s ease;
}

.navOption:hover {
    background-image: linear-gradient(to right, #8EC5FC, #de63e7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.navOption:active {
    box-shadow: 0px 0px 2px 1px;
}

.navBarMenu {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.blur-header {
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.linkedin, .github {
    transition: color 0.3s ease-in-out;
}

.linkedin:hover {
    color: #c37d16;
}

.github:hover {
    color: #adbac7;
}
</style>