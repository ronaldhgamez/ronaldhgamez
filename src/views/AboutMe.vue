<template>
    <div id="aboutContainer">
        <h1 class="aboutTitle"> {{ $t("appView.about") }}  </h1>
        <div class="aboutContent">
            <main class="contentMain">
                <p class="paragraph">
                    {{ paragraph }}
                </p>
                <p class="paragraph">
                    {{ lorem }}
                </p>

                <p class="paragraph">
                    {{ lorem }}
                </p>

            </main>
            <aside class="contentAside">
                <div class="asideContainer">
                    <img src="https://avatars.githubusercontent.com/u/66141333?v=4" alt="" width="200">
                </div>
                <div class="asideContainer">
                    <div class="asideInfo">
                        <h2>Ronald Herrera Gámez</h2>
                        <p>
                            <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/244cc277fcd3100d77374f3b3893fd5ba68d01e8/svg/ubication.svg" alt="" width="20px" height="11px">
                            Alajuela, Costa Rica
                        </p>
                        <p>
                            <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/cc98e0b27531e07d4f007a99ffa9429f52593fb5/svg/costaricaFlag.svg" alt="" width="20px" height="11px">
                            6010 2586
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'about-container',
    components: {

    },
    data() {
        return {
            paragraph: 'Computing engineer passionate about building full-stack applications with strong skills in UI/UX, ensuring that applications are functional and intuitive. Additionally, I specialize in building server-side applications using Node.js or Python.',
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    }
}
</script>


<style>
#aboutContainer {
    /* border: solid 1px blue; */
    height: 650px;
    box-sizing: border-box;
    padding: 20px 100px;
}

.aboutTitle {
    /* border: solid 1px yellow; */
    font-size: 40px;
    padding-left: 20px;
    background: -webkit-linear-gradient(#262ce4, #dfdfd6);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.aboutContent {
    position: relative;
    display: flex;
    /* border: solid 1px yellow; */
    height: 80%;
}

.contentMain {
    /* border: solid 1px green; */
    height: 100%;
    width: 65%;
}

.contentAside {
    /* border: solid 1px green; */
    height: 100%;
    width: 35%;
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
</style>