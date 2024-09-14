<template>
    <section class="image-container">
        <figure>
            <img src="../assets/profile.jpg" alt="Photo of face of Ronald Herrera with a brown hat" width="230">
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
            avatarURL: 'https://media.licdn.com/dms/image/D4E03AQHzvBrA1Lrc1A/profile-displayphoto-shrink_800_800/0/1713334182680?e=1718841600&v=beta&t=X9IcJuC5tZq9RlH_GC16Ao_Cjq6CPUsyRzwIs6qff4g',
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
    margin-left: 10px;
    /* outline: dotted 4px blue; */
}

/* Avatar Profile */
.image-container figure > img {
    filter: contrast(105%) grayscale(5%);
    border-radius: 50%;
    box-shadow: 0px 0px 80px -14px #6e4188;
    transition: box-shadow 0.3s ease-in-out;
}

.image-container img:hover {
    box-shadow: 0px 0px 150px -14px #6d4585;
}

figure {
    margin-right: auto;
}

.cr-flag {
    position: absolute;
    bottom: 35px;
    right: 28px;
    filter: blur(0.2px) drop-shadow(0 0 10px rgb(1, 1, 1, 0.8));
}
</style>