<template>
    <div id="aboutContainer">
        <h1 class="aboutTitle">About Me</h1>
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
                            <svg fill="orange" width="10px" height="10px" viewBox="0 0 395.71 395.71">
                                <path
                                    d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                            </svg>
                            Alajuela, Costa Rica
                        </p>
                        <p></p>
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
    color: #dfdfd6;
    padding-left: 20px;
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
    color: #dfdfd6;
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
    color: #dfdfd6;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
}

.asideInfo p {
    color: #dfdfd6;
    font-size: 14px;
    margin-left: -19px;
}
</style>