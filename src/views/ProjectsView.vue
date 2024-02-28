<template>
    <br>
    <br>
    <h1 style="margin-top: 50px; text-align: center;">Projects</h1>
    <main class="projectsTab">
        <article class="projectElement" v-for="project in getProjects()" :key="project.title">
            <figure>
                <img
                    v-bind:src="project.image" 
                    :alt="'Image of project: ' + project.title"
                    class="projectImage"
                >
            </figure>
            <section class="projectInfoContainer">
                <article class="article">
                    <h1 class="projectTitle"> {{ project.title }} </h1>
                    <p class="description"> {{ project.description }} </p>
                </article>
                <aside class="sourceIcon">
                    <a :href="project.href" target="_blank">
                        <img
                            src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/SourceCodeIcon.png"
                            alt="See projects details icon"
                            width="30"
                            height="35"
                        />
                    </a>
                </aside>
            </section>
        </article>
    </main>
</template>

<script lang="ts">
export default {
    name: 'projects-view',
    methods : {
        getProjects() {
            return [
                {
                    id: 'p0',
                    title: this.$t("homeTab.projects[0].title"),
                    description: this.$t("homeTab.projects[0].description"),
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/cultour.webp',
                    href: 'https://cultourcostarica.netlify.app/'
                },
                {
                    id: 'p1',
                    title: this.$t("homeTab.projects[1].title"),
                    description: this.$t("homeTab.projects[1].description"),
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/ConnectFour.webp',
                    href: 'https://ronaldhgamez.github.io/conecta-cuatro/'
                },
                {
                    id: 'p2',
                    title: this.$t("homeTab.projects[2].title"),
                    description: this.$t("homeTab.projects[2].description"),
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/ScheduleGenerator.webp',
                    href: 'https://youtu.be/cOYxs_Fqueo'
                },
                {
                    id: 'p3',
                    title: this.$t("homeTab.projects[3].title"),
                    description: this.$t("homeTab.projects[3].description"),
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/FaceRecognition.webp',
                    href: 'https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing'
                }
            ]
        }
    }
}
</script>

<style scoped>

main {
    margin-top: 63px;
}

.projectsTab {
    /* border: solid 1px #9497f8; */
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    padding: 50px 20px;
}

.projectElement {
    /* border: solid 1px #dfdfd6; */
    display: flex;
    flex-direction: column;
    max-width: 480px;
    height: 410px;
    border-radius: 8px;
    /* Ocults image borders */
    overflow: hidden;
}

figure {
    margin: 0;
}

.projectElement:hover {
    transition: 0.5s;
    box-shadow: 1px 3px 12px #9497f8;
}

.projectImage {
    width: 100%;
    height: 280px;
    /* Ensures the image covers the entire space, preserving aspect ratio */
    object-fit: cover;
    filter: grayscale(10%);
}

.projectInfoContainer {
    display: flex;
    justify-content: space-between;
    height: 110px;
}

.article {
    width: 85%;
    color: var(--text-color);
    overflow: hidden;
}

.projectTitle {
    /* border: dotted green; */
    margin: 0;
    height: auto;
    width: auto;
    padding: 8px 0px 5px 10px;
    border-bottom: solid 1px rgb(255 255 255 / 0.1);
    /* For titles */
    text-wrap: balance;
}

.description {
    /* border: solid 0.5px pink; */
    margin: 0;
    padding: 0px 10px;
    overflow: hidden;
    text-wrap: pretty;
    font-size: 13px;
}

.sourceIcon {
    /* border: solid 1px pink;  */
    align-self: center;
    /* Add left and right margen only */
    margin: 0 auto;
    cursor: pointer;
    filter: grayscale(1);
    /* Circle on svg */
    border-radius: 50%;
    width: 45px;
    height: 45px;
    /* Center image */
    display: flex;
    justify-content: center;
    align-items: center;
}

.sourceIcon:hover {
    box-shadow: 0 0 0 1px #9497f8 inset;
    filter: grayscale(40%);
    transition: 0.5s;
}

.sourceIcon:active {
    filter: grayscale(0);
}
</style>