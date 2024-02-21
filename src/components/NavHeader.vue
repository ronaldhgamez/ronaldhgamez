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
            <a class="navOption center" href="https://www.linkedin.com/in/ronaldhgamez/" aria-label="linkedin"
                target="_blank" rel="noopener">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 256">
                    <path
                        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                        fill="#0A66C2" />
                </svg>
            </a>
            <!-- Github Icon Link -->
            <a class="navOption center" href="https://github.com/ronaldhgamez" aria-label="github" target="_blank"
                rel="noopener">
                <svg viewBox="0 0 256 250" width="25" height="25" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid">
                    <path
                        d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                        fill="#545454" />
                </svg>
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

export default {
    name: 'NavHeader',
    components: { LanguageSelectionOption, ToggleButtomTheme },
    data() {
        return {
            logoURL: 'https://github.com/ronaldhgamez/files-and-images/blob/main/logo/logoporfolio.png?raw=true',
            cv: 'https://drive.google.com/file/d/1pbjDCSSPL7v49Ip5UmD1YQBe2NjhK_ex/view?usp=sharing',
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
    transition: width 0.5s ease;
    /* filter: drop-shadow(0 0px 10px #f0d1f780); */
}

#nav-logo:hover {
    filter: drop-shadow(0 0px 10px #f0d1f780);
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
    font-size: 15px;
    font-weight: 700;
    height: 63px;
    display: flex;
    align-items: center;
    padding: 0px 15px;
    /* left and right only */
    cursor: pointer;
    color: var(--text-color);
}

.navOption:hover {
    color: #3fa7fc;
    transition: 0.5s;
}

.navOption:active {
    transition: 0.5s;
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
}</style>