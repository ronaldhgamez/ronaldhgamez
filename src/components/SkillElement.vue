<template>
    <article class="skill-box box-card">
        <h3> {{ title }} </h3>
        <p> {{ description }} </p>
    </article>
</template>

<script lang="ts">
export default {
    props: ['title', 'description'],
};
</script>


<style>
.skill-box>h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
}

.skill-box>p {
    margin: 0px;
    font-size: 14px;
}

.skill-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 25px;
}

.box-card {
    width: 450px;
    background-color: rgba(72, 71, 71, 0.162);
    outline: solid 1px rgb(0, 0, 0, 0.2);
    border-radius: 5px;
}    

.skill-box:nth-child(odd) {
    align-self: flex-end;
}

.skill-box:hover {
    background-color: rgb(44 44 58 / 97%);
    box-shadow: 0px 0px 55px -30px #9497f8;
    transition: 0.3s;
}
</style>