<template>
    <div class="aboutMe">
        <div id="aboutContainer">
            <h1 class="aboutTitle"> {{ $t("aboutMeView.title") }} </h1>
            <div class="aboutContent">
                <main class="contentMain">
                    <p class="paragraph">
                        {{ $t("aboutMeView.p1") }}
                    </p>
                    <p class="paragraph">
                        {{ $t("aboutMeView.p2") }}
                    </p>

                    <div class="skillsContainer">
                        <div 
                            v-for="skill in getSkillList()" :key="skill.title" 
                            class="skillBox"
                        >
                            <strong><span>{{ skill.title }}</span></strong>
                            <span>{{ skill.description }}</span>
                        </div>
                    </div>
                </main>
                <aside class="contentAside">
                    <div class="asideContainer">
                        <img src="https://avatars.githubusercontent.com/u/66141333?v=4" alt="" width="200">
                    </div>
                    <div class="asideContainer">
                        <div class="asideInfo">
                            <h2>Ronald Herrera Gámez</h2>
                            <p>
                                <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/244cc277fcd3100d77374f3b3893fd5ba68d01e8/svg/ubication.svg"
                                    alt="" width="20px" height="11px">
                                Alajuela, Costa Rica
                            </p>
                            <p>
                                <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/cc98e0b27531e07d4f007a99ffa9429f52593fb5/svg/costaricaFlag.svg"
                                    alt="" width="20px" height="11px">
                                6010 2586
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
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

    }
}
</script>


<style>
.aboutMe {
    display: flex;
    justify-content: center;
}

#aboutContainer {
    /* border: solid 1px blue; */
    height: 650px;
    box-sizing: border-box;
    padding: 20px 0px;
    
}

.aboutTitle {
    /* border: solid 1px yellow; */
    text-wrap: balance;
    color: transparent;
    width: 70%;
    font-size: 57px;
    padding-left: 20px;
    background: -webkit-linear-gradient(#ccfbf1, #ffe4e6);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.aboutContent {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    /* border: solid 1px yellow; */
    height: 80%;
}

.contentMain {
    /* border: solid 1px green; */
    padding-bottom: 100px;
    max-width: 700px;
}

.contentAside {
    /* border: solid 1px green; */
    height: 100%;
    width: 300px;
}

.paragraph {
    color: var(--text-color);
    /* border-bottom: solid 1px red; */
    text-wrap: pretty;
    /* white-space: pre-wrap; */
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    font-size: 17px;
}

.asideContainer {
    display: flex;
    justify-content: center;
    border-left: solid 1px rgb(255, 255, 255, 0.1);
    /* border-bottom: solid 1px blue; */
}

/* Image container */
.asideContainer:first-child img {
    border-radius: 100px;
    border: solid 2px rgb(128, 128, 128, 0.5);
    filter: grayscale(25%);
}

.asideInfo {
    /* border: solid 1px blue; */
    width: 70%;
    height: 250px;
}

.asideInfo h2 {
    color: var(--text-color);
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
}

.asideInfo p {
    color: var(--text-color);
    font-size: 12px;
    margin-left: -19px;
}

.skillsContainer {
    display: flex;
    flex-direction: column;
    gap: 25px;
    /* border: 1px solid red; */
    font-size: 14px;
    margin-right: 20px;
}

.skillBox {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 25px;
    background-color: rgb(0, 0, 0, 0.1);
    border: solid 1px rgb(0, 0, 0, 0.2);
    width: 500px;
    height: 100px;
    border-radius: 10px;
}

.skillBox:nth-child(odd) {
    align-self: flex-end;
}

.skillBox:hover {
    box-shadow: 1px 1px 5px #ccfbf1;
    background-color: rgb(0, 0, 0, 0.5);
}

</style>