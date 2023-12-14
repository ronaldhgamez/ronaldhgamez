<template>
    <div class="projectsTab">
        <div v-for="project in projects">
            <section class="projectElement">
                <img 
                    alt="Project image"
                    class="projectImage" 
                    v-bind:src="project.image" 
                />
                <div class="projectInfoContainer">
                    <article class="article">
                        <h1 class="title"> {{ project.title }} </h1>
                        <p class="description">{{ project.description }} </p>
                    </article>
                    <div class="sourceIcon">
                        <router-link class="sourceCode" v-bind:to="project.href">
                            <img 
                                alt="See details icon"
                                width="30" height="35"
                                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/SourceCodeIcon.png"
                            />
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'home-tab',
    methods: {

    },
    data() {
        return {
            projects: [
                {
                    id: 'p1',
                    title: 'Connect Four 🔴 Web Board Game 🟡',
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/ConnectFour.png',
                    description: 'Game logic for the board game "Connect 4". Try to play against this AI and beat it!',
                    href: '/test'
                },
                {
                    id: 'p2',
                    title: 'Schedule Generator 📅 | Java, Prolog & SQLite',
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/ScheduleGenerator.png',
                    description: 'Desktop app to combinations of university schedules considering professors, subjects taught by professors, classrooms, and availability schedules of both professors and classrooms.',
                    href: '/test'
                },
                {
                    id: 'p2',
                    title: 'Face recognition - Classroom Attendance',
                    image: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/FaceRecognition.png',
                    description: 'Face recognition application in Python. https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing',
                    href: '/test'
                }
            ]
        }
    }
}
</script>

<style scoped>
.projectsTab {
    /* border: solid 1px #9497f8; */
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding: 50px 20px;
}

.projectElement {
    /* border: solid 1px #dfdfd6; */
    display: flex;
    flex-direction: column;
    max-width: 500px;
    height: 300px;
    border-radius: 8px;
    /* Ocults image borders */
    overflow: hidden;
}

.projectElement:hover {
    transition: 0.5s;
    box-shadow: 1px 3px 12px #9497f8;
}

.projectImage {
    width: 100%;
    height: 210px;
    /* Ensures the image covers the entire space, preserving aspect ratio */
    object-fit: cover;
}

.projectInfoContainer {
    /* border: dotted 1px red; */
    display: flex;
    justify-content: space-between;
    height: 90px;
}

.article {
    width: 85%;
    /* border: dotted #9497f8; */
    color: #dfdfd6;
    overflow: hidden;
}

/* .projectElement:hover .title {
    
}
 */

.title {
    /* border: dotted green; */
    margin: 0;
    font-size: 17px;
    height: auto;
    width: auto;
    padding: 10px 0 2px 10px;
    border-bottom: solid 1px rgb(255, 255, 255, 0.1);
    /* For titles */
    text-wrap: balance;
}

.description {
    /* border: solid 0.5px pink; */
    margin: 0;
    padding: 0px 10px;
    overflow: hidden;
    text-wrap: pretty;
    height: 67%;
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