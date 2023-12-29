<template>
    <main class="aboutMe">
        <div class="aboutContent">
            <h1 class="aboutTitle"> {{ $t("aboutMeView.title") }} </h1>
            <section class="main-content">
                <p class="paragraph"> {{ $t("aboutMeView.p1") }} </p>
                <p class="paragraph"> {{ $t("aboutMeView.p2") }} </p>

                <section class="skillsContainer">
                    <SkillElement
                        v-for="skill in getSkillList()" :key="skill.title"
                        :title="skill.title" 
                        :description="skill.description"
                    ></SkillElement>
                </section>
            </section>
            <aside class="aside-content">
                <section class="image-container">
                    <figure>
                        <img 
                            src="https://avatars.githubusercontent.com/u/66141333?v=4" 
                            alt="Photo of face of Ronald Herrera with a brown hat" 
                            width="230"
                        >
                        <legend class="cr-flag">
                            <img 
                                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/cc98e0b27531e07d4f007a99ffa9429f52593fb5/svg/costaricaFlag.svg"
                                alt="Costa Rica Flag SVG icon"
                                width="26px"
                                height="26px"
                            >
                        </legend>
                    </figure>
                </section>
                <footer class="footer-aside">
                    <h3>Ronald Herrera Gámez</h3>
                    <figure>
                        <img
                            src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/244cc277fcd3100d77374f3b3893fd5ba68d01e8/svg/ubication.svg"
                            alt="Location SVG icon"
                            width="20px" 
                            height="11px"
                        >
                        <legend>Alajuela, Costa Rica</legend>
                    </figure>
                </footer>
            </aside>
        </div>
        
    </main>
</template>

<script lang="ts">
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
        SkillElement
    }
}
</script>


<style scoped>
.aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}

.aboutTitle {
    text-wrap: balance;
    background: -webkit-linear-gradient(#ccfbf1, #ffe4e6);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* outline: solid 1px yellow; */
}

.aboutContent {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    min-width: 600px;
    max-width: 875px;
    height: 80%;
    padding-left: 40px;
    /* outline: solid 1px yellow; */
}

.main-content {
    padding-bottom: 100px;
    max-width: 600px;
    /* outline: solid 1px green; */
}



.aside-content {
    border-left: solid 1px rgb(255 255 255 / 8%);
    height: 100%;
    width: 270px;
}

.paragraph {
    color: var(--text-color);
    text-wrap: pretty;
    padding-right: 20px;
    /* border-bottom: solid 1px red; */
}

.image-container {
    display: flex;
    justify-content: center;
    position: relative;
    height: 266px;
    /* border-bottom: solid 1px blue; */
}

/* Image container */
.image-container img {
    border-radius: 50%;
    /* outline: 4px solid #9497f822; */
    filter: grayscale(15%);
    box-shadow: 0px 0px 80px -14px #9497f8;
}
.image-container img:hover {
    outline: none;
    box-shadow: 0px 0px 150px -14px #9497f8;
    transition: 0.3s;
}

.cr-flag {
    position: absolute;
    bottom: 40px;
    right: 40px;
    border-radius: 50%;
    background-color: #9497f822;
}

.footer-aside {
    display: flex;
    flex-direction: column;
}

.footer-aside > h3 {
    margin: 0 20px;
    font-size: 20px;
    color: var(--text-color);
}

.footer-aside > figure {
    display: flex;
    align-items: center;
    margin: 10px 20px;
    color: var(--text-color);
    font-size: 12px;
}

.skillsContainer {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 55px 20px 0 0;
    /* outline: 1px solid red; */
}

@media only screen and (max-width:  900px) {
    .main-content {
        order: 2;
        
    }
    .aside-content {
        order: 1;
        display: flex;
        align-items: center;
        border-left: none;
    }

    .footer-aside > figure {
        width: 400px;
    }
}

</style>