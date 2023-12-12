<template>
    <section class="projectsContainer">
        <div v-for="project in projects" class="projectElement">
            <img v-bind:src="project.image" />
            <article class="projectArticle">
                <h1> {{ project.title }} </h1>
                <p> {{ project.description }} </p>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'home-tab',
    data() {
        return {
            projects: [
                {
                    id: 'p1',
                    title: 'Connect Four Game',
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/ConnectFour.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt.'
                },
                {
                    id: 'p2',
                    title: 'Project title here',
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt.'
                },
                {
                    id: 'p2',
                    title: 'Project title here',
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt.'
                }
            ]
        }
    }   
}
</script>

<style>
.projectsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    /* border-color: wheat; */
    /* border-style: dashed; */
    padding: 50px 20px;
    box-sizing: border-box;
    z-index: 0;
}

.projectElement:hover {
    filter: contrast(120%);
    transition: 0.5s;
}

.projectElement {
    box-sizing: border-box;
    background-color: #202127;
    /* border: solid red; */
    width: 100vh;
    max-width: 475px;
    height: 266px;
    border-radius: 8px;
}

.projectElement img {
    width: 100%;
    /* border: solid blue; */
    height: 70%;
    /* Ensures the image covers the entire space, preserving aspect ratio */
    object-fit: cover;
}

.projectElement img:hover {
    filter: grayscale(0);
}

.projectArticle {
    width: 100%;
    /* border: solid green; */
    height: 26%;
    color: #dfdfd6;
}

.projectArticle h1,
p {
    margin: 0;
    padding: 1px 5px;
}

.projectArticle h1 {
    font-size: 18px;
    height: 28%;
    /* For titles */
    text-wrap: balance;
}

.projectArticle p {
    overflow: hidden;
    text-wrap: pretty;
    /* border: solid 0.5px pink; */
    height: 68%;
    font-size: 13px;
}
</style>