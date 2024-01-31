<template>
    <div>
        <h1>Skills</h1>
        <section>
            <p>| FrontEnd Stack</p>
            <img src="https://skillicons.dev/icons?i=angular,vue,html,css,vite,figma" width=450>
        </section>
        <section>
            <p>| Backend Stack</p>
            <img src="https://skillicons.dev/icons?i=nodejs,postgres,expressjs,firebase,mongo,postman" width=450 />
        </section>
        <section>
            <p>| Other Technologies</p>
            <img src="https://skillicons.dev/icons?i=python,java,cpp,cs,github,js,ts&perline=10" width=450 />
        </section>
    </div>
</template>

<script lang="ts">

export default {
    name: 'SkillsView',
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 100px;
    }
</style>