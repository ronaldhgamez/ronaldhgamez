<template>
    <div class="container">

        <main class="main-content">
            <h1 class="roleTitle beautyTitleColor"> {{ $t("aboutMeView.title") }} </h1>
            <p class="paragraph"> {{ $t("aboutMeView.p1") }} </p>
            <p class="paragraph"> {{ $t("aboutMeView.p2") }} </p>
            <!-- <section class="skillsContainer">
                    <SkillElement
                        v-for="skill in getSkillList()" :key="skill.title"
                        :title="skill.title" 
                        :description="skill.description"
                    ></SkillElement>
                </section> -->
        </main>

        <aside class="aside-content">
            <ProfileImage></ProfileImage>
            <footer class="footer-aside">
                <h3 class="fullname">Ronald Herrera Gámez</h3>
                <figure class="locationIcon">
                    <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/244cc277fcd3100d77374f3b3893fd5ba68d01e8/svg/ubication.svg"
                        alt="Location SVG icon" width="20px" height="11px">
                    <legend>Alajuela, Costa Rica</legend>
                </figure>
            </footer>
        </aside>

    </div>
</template>

<script lang="ts">
import ProfileImage from '../components/ProfileImage.vue';
import SkillElement from '../components/SkillElement.vue'

export default {
    name: 'about-container',
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
        SkillElement,
        ProfileImage
    }
}
</script>


<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin-top: 63px;
    height: 85vh;
    /* outline: solid 1px white; */
}

.roleTitle {
    max-width: 500px;
    font-size: 2em;
    text-wrap: balance;
    padding: 0 5px;
    /* outline: dotted 3px greenyellow; */
}

.main-content {
    max-width: 550px;
    /* outline: dotted 3px orange; */
}

.paragraph {
    max-width: 500px;
    padding: 5px;
    color: var(--text-color);
    text-wrap: pretty;
    /* outline: dotted 3px red; */
}

/* aside Container */
.aside-content {
    border-left: solid 1px rgb(255 255 255 / 8%);
}

.footer-aside {
    display: flex;
    flex-direction: column;
    width: 270px;
    min-width: 270px;
    min-height: 65px;
    height: 65px;
    /* outline: dotted 4px rgb(86, 59, 9); */
}

.fullname {
    margin: 0 20px;
    font-size: 20px;
    color: var(--text-color);
}

.locationIcon {
    display: flex;
    align-items: center;
    margin: 10px 20px;
    color: var(--text-color);
    font-size: 12px;
}

/* .skillsContainer {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 55px 20px 0 0;
    outline: 1px solid red;
} */

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
        font-size: 1.5em;
        padding: 0 20px;
    }
    
    .paragraph {
        max-width: 500px;
        font-size: 1em;
        padding: 0 20px;
    }
}
</style>