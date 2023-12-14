<template>
    <div class="navBarAppereance">
        <input @change="changeTheme()" type="checkbox" id="switch" />
        <div class="switch-btn">
            <label for="switch">
                <div class="icons">
                    <img alt="moon icon"
                        src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/moon-icon.png" />
                    <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/sun-icon.png"
                        alt="sun icon" />
                </div>
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'toggle-button-theme',
        methods: {
            changeTheme() {
                const element = document.getElementById('app');
                
                //document.getElementById('app')?.classList.add('light');
                console.log(element?.style.light)

                //let darkMode: 'true' | 'false' = (localStorage.getItem("darkMode") == 'true') ? 'false' : 'true';
                //localStorage.setItem("darkMode", darkMode);
            },
        }
    }
</script>


<style>
/* toggle theme icon */

.navBarAppereance {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    /* border: solid 1px red; */
}

input[type="checkbox"] {
    display: none;
}

.switch-btn {
    width: 60px;
    height: 24px;
    background: #2b2f36;
    border: 1px solid #ffffff17;
    border-radius: 40px;
    transition: 0.8s;
}

.icons {
    display: flex;
    /* border: solid 1px red; */
    flex-direction: column;
    align-items: center;
    /* gap: 20px; */
    user-select: none;
    color: #1b1b1f;
    transform: translate(0px, 12px);
    transition: 0.3s;
}


.icons img {
    width: 24px;
    height: 24px;
    /* padding: 12px; */
    filter: grayscale(1);
    /* object-fit: cover; */
}

.icons img:hover {
    filter: grayscale(60%);
    transition: 0.8s;
}

label {

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #1b1b1f;
    border-radius: 30px;
    cursor: pointer;
    overflow: hidden;
    /*  */
    transition: 0.2s;
}

/* Switch to light mode */
input[type="checkbox"]:checked~.switch-btn {
    background: #c6c6c6;
    border: 1px solid #1b1b1f;
}

/* Switch to light mode */
input[type="checkbox"]:checked~.switch-btn label {
    /* distance to the left */
    transform: translateX(35px);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    background: #eff0f3;
}

input[type="checkbox"]:checked~.switch-btn label .icons {
    /* Move the sun 12px less in vertical */
    transform: translate(0px, -12px);
}
</style>