<template>
    <section class="image-container">
        <figure>
            <img :src="avatarURL" alt="Photo of face of Ronald Herrera with a brown hat" width="230">
            <legend class="cr-flag">
                <img :src="crFlagGif" alt="Costa Rica Flag SVG icon" width="32">
            </legend>
        </figure>
    </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            avatarURL: 'https://avatars.githubusercontent.com/u/66141333?v=4',
            crFlagGif: 'https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/cr_flag.gif'
        }
    }
}
</script>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    height: 270px;
    width: 270px;
    min-height: 270px;
    min-width: 20px;
    /* outline: dotted 4px blue; */
}

/* Avatar Profile */
.image-container figure > img {
    filter: grayscale(10%);
    border-radius: 50%;
    box-shadow: 0px 0px 80px -14px #9497f8;
}

.image-container img:hover {
    outline: none;
    box-shadow: 0px 0px 150px -14px #9497f8;
    transition: 0.3s;
}

figure {
    margin: 0;
}

.cr-flag {
    position: absolute;
    bottom: 35px;
    right: 45px;
}
</style>