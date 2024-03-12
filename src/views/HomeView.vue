<template>
    <div class="container">

        <main class="main-content">
            <h1 class="roleTitle beautyTitleColor"> {{ $t("aboutMeView.title") }} </h1>
            <p class="paragraph"> {{ $t("aboutMeView.p1") }} </p>
            <p class="paragraph"> {{ $t("aboutMeView.p2") }} </p>
        </main>

        <aside class="aside-content">
            <ProfileImage></ProfileImage>
            <footer class="footer-aside">
                <h3 class="fullname">Ronald Herrera Gámez</h3>
                <figure class="locationIcon">
                    <UbicationSVG :size="13"></UbicationSVG>
                    <legend>Alajuela, Costa Rica</legend>
                </figure>
            </footer>
        </aside>

    </div>
</template>

<script lang="ts">
import ProfileImage from '../components/ProfileImage.vue';
import UbicationSVG from '../assets/svg/UbicationSVG.vue';

export default {
    name: 'home-view',
    data() {
        return {
            skills: {}
        }
    },
    methods: {
        getSkillList() {
            const obj = (this.$i18n as any);
            const messages = obj.messages
            const lang = obj.locale;

            const proxyArray = new Proxy(messages, {
                get: (target, prop) => {
                    return target[prop];
                }
            })
            return proxyArray[lang].aboutMeView.skills
        }
    },
    components: {
        ProfileImage, UbicationSVG
    }
}
</script>


<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin-top: 63px;
    height: 85vh;
    /* outline: solid 1px white; */
}

.main-content {
    max-width: 550px;
    /* outline: dotted 3px orange; */
}

.paragraph {
    max-width: 455px;
    padding: 5px;
    color: var(--text-color);
    text-wrap: pretty;
    /* outline: dotted 3px red; */
}

/* aside Container */
.aside-content {
    border-left: solid 1px rgba(66, 63, 52, 0.41);
}

.footer-aside {
    display: flex;
    flex-direction: column;
    width: 350px;
    min-width: 350px;
    min-height: 65px;
    height: 65px;
    /* outline: dotted 4px rgb(86, 59, 9); */
}

.fullname {
    margin: 0 20px;
    font-size: 30px;
    font-family: "Elsie Swash Caps", serif;
    font-weight: 500;
    font-style: normal;
    color: #fea404;
}

.locationIcon {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px 20px;
    color: var(--text-color);
    font-size: 15px;
}

@media only screen and (max-width: 900px) {
    .container {
        flex-direction: column;
        align-items: center;
    }
    .main-content {
        order: 2;
    }

    .aside-content {
        margin-top: 63px;
        order: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-left: none;
    }

    .roleTitle {
        max-width: 500px;
        padding: 0 20px;
    }
    
    .paragraph {
        max-width: 500px;
        font-size: 1em;
        padding: 0 20px;
    }
}
</style>