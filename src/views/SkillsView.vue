<template>
    <div>
        <h1 class="titles" align="center">Tech Stack</h1>
        <StackTech title="| Front-End Stack"></StackTech>
        <StackTech title="| Back-End Stack"></StackTech>
        <StackTech title="| Other Technologies"></StackTech>

        <div class="container">
            <section class="tech-card">
                <h2>| Front-End Stack</h2>
                <div class="tech-list">
                    <article>
                        <AngularSVG :size=icon_size></AngularSVG>
                        <span>Angular</span>
                    </article>
                    <article>
                        <VueSVG :size=icon_size></VueSVG>
                        <span>Vue</span>
                    </article>
                    <article>
                        <AstroSVG :size=icon_size></AstroSVG>
                        <span>Astro</span>
                    </article>
                    <article>
                        <JavaScriptSVG :size=icon_size></JavaScriptSVG>
                        <span>JavaScript</span>
                    </article>
                    <article>
                        <CSSSVG :size=icon_size></CSSSVG>
                        <span>CSS</span>
                    </article>
                    <article>
                        <HTMLSVG :size="icon_size"></HTMLSVG>
                        <span>HTML5</span>
                    </article>

                    <article>
                        <FigmaSVG :size="icon_size"></FigmaSVG>
                        <span>Figma</span>
                    </article>
                </div>
            </section>

            <section class="tech-card">
                <h2>| Back-End Stack</h2>
                <div class="tech-list">
                    <article>
                        <NodeSVG :size="icon_size"></NodeSVG>
                        <span>Node.js</span>
                    </article>
                    <article>
                        <ExpressSVG :size="icon_size"></ExpressSVG>
                        <span>Express.js</span>
                    </article>
                    <article>
                        <PostgreSVG :size="icon_size"></PostgreSVG>
                        <span>PostgreSQL</span>
                    </article>
                    <article>
                        <MSSQLSVG :size="icon_size"></MSSQLSVG>
                        <span>MSSQL</span>
                    </article>
                    <article>
                        <MongoSVG :size="icon_size"></MongoSVG>
                        <span>MongoDB</span>
                    </article>

                </div>
            </section>


            <section class="tech-card">
                <h2>| Other Technologies</h2>
                <div class="tech-list">
                    <article>
                        <PythonSVG :size="icon_size"></PythonSVG>
                        <span>Python</span>
                    </article>
                    <article>
                        <JavaSVG :size="icon_size"></JavaSVG>
                        <span>Java</span>
                    </article>
                    <article>
                        <CPPSVG :size="icon_size"></CPPSVG>
                        <span>C++</span>
                    </article>
                    <article>
                        <TypeScriptSVG :size="icon_size"></TypeScriptSVG>
                        <span>TypeScript</span>
                    </article>
                    <article>
                        <GitHubSVG :size=icon_size></GitHubSVG>
                        <span>GitHub</span>
                    </article>
                    <article>
                        <CypressSVG :size=icon_size></CypressSVG>
                        <span>Cypress</span>
                    </article>

                </div>
            </section>
        </div>

    </div>
</template>

<script lang="ts">

// Frontend
import AngularSVG from '../assets/svg/AngularSVG.vue';
import VueSVG from '../assets/svg/VueSVG.vue';
import AstroSVG from '../assets/svg/AstroSVG.vue';
import JavaScriptSVG from '../assets/svg/JavaScriptSVG.vue';
import CSSSVG from '../assets/svg/CSSSVG.vue';
import HTMLSVG from '../assets/svg/HTMLSVG.vue';
import FigmaSVG from '../assets/svg/FigmaSVG.vue';
// Backend
import NodeSVG from '../assets/svg/NodeSVG.vue';
import ExpressSVG from '../assets/svg/ExpressSVG.vue';
import PostgreSVG from '../assets/svg/PostgreSVG.vue';
import MSSQLSVG from '../assets/svg/MSSQLSVG.vue';
import MongoSVG from '../assets/svg/MongoSVG.vue';
// Technologies
import PythonSVG from '../assets/svg/PythonSVG.vue';
import JavaSVG from '../assets/svg/JavaSVG.vue';
import CPPSVG from '../assets/svg/CPPSVG.vue';
import TypeScriptSVG from '../assets/svg/TypeScriptSVG.vue';
import GitHubSVG from '../assets/svg/GitHubSVG.vue';
import CypressSVG from '../assets/svg/CypressSVG.vue';

export default {
    name: 'SkillsView',
    components: { 
        /* Frontend */
        AngularSVG, VueSVG, AstroSVG,
        JavaScriptSVG, CSSSVG,HTMLSVG, FigmaSVG,
        /* Backend */
        NodeSVG, ExpressSVG, PostgreSVG, MSSQLSVG, MongoSVG,
        /* Technologies */
        PythonSVG, JavaSVG, CPPSVG, TypeScriptSVG, GitHubSVG, CypressSVG },
    data() {
        return {
            icon_size: 50
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 100px;
}

.tech-card {
    border-radius: 10px;
    min-width: 280px;

    height: 370px;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px var(--icon-hover);

    & h2 {
        color: var(--text-color);
        padding-left: 34px;
        padding-top: 20px;
        font-size: 16px;
        font-family: "Onest", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
}

.tech-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 10%;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: transform 0.3s ease;

    & span {
        color: var(--text-color);
        font-size: 12px;
        font-family: "Onest", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
}

article:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 15px var(--icon-hover));
}</style>