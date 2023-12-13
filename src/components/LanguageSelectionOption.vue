<template>
    <div class="navBarTranslations">
        <button type="button" class="button" aria-haspopup="true" aria-expanded="false" aria-label="Change language">
            <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/svg/translate.svg"
                alt="translate svg" width="20" height="20">
            <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/svg/downArrow.svg"
                alt="down arrow svg" width="20" height="20">
        </button>
        <!-- Hiddend Menu Language -->
        <div class="menuLanguages floatingMenu">
            <div class="menuItems">
                <p class="selectedLanguage">{{ langOptions[selectedLang as keyof typeof langOptions] }}</p>
                <div v-for="lang in removeSelectedLanguageList()" :key="lang">
                    <div class="language" v-on:click="changeLanguage(lang)">
                        <a class="langOption"> {{ langOptions[lang as keyof typeof langOptions] }} </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    export default {
        name: 'language-selection-option',
        data() {
            return {
                selectedLang: 'en',
                langOptions: {
                    en: 'English',
                    sp: 'Español',
                    ja: '日本語'
                }
            }
        },
        methods: {
            removeSelectedLanguageList(): string[] {
                // Convert the keys of langOptions to an array
                const langOptionsArray: string[] = Object.keys(this.langOptions);
                // Filter the array to remove the selected language
                const filteredLangOptions = langOptionsArray.filter(langKey => langKey !== this.selectedLang);
                // Now you can use filteredLangOptions as needed
                return filteredLangOptions;
            },
            changeLanguage(lang: string) {
                this.selectedLang = lang;
                this.$i18n.locale = lang;
            }
        }
    }
</script>


<style>
/* Language menu */

.navBarTranslations {
    display: flex;
    align-items: center;
}

.selectedLanguage {
    color: #dfdfd6;
}

.button {
    width: 70px;
    background-color: transparent;
    filter: invert();
    border: 0px solid gray;
}

.button:hover {
    opacity: 0.5;
    transition: 0.2s;
    border-width: 1px;
    border-top: none;
    border-bottom: none;
    transition: border 0.2s, opacity 0.1s;
}

.menuLanguages {
    /* center menu items with flex */
    display: none;
    justify-content: center;
    align-items: center;
    border: solid 1px rgb(128, 128, 128, 0.2);
    background: rgb(32, 33, 39, 1);
    width: 130px;
    height: 150px;
    border-radius: 10px;
}

.floatingMenu {
    z-index: 3;
    position: absolute;
    top: 46px;
    right: 65px;
}

/* Displays menu when hower on button */
.button:hover~.menuLanguages {
    display: flex;
}

.menuLanguages:hover {
    display: flex;
}

.menuItems {
    width: 85%;
    height: 80%;
}

.menuItems p {
    margin: 6px;
    padding: 0 6px;
    font-weight: bold;
}

.language {
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 26px;
    padding: 0 12px;
}

.language:hover {
    transition: 0.2s;
    background-color: rgb(113, 113, 113, 0.2);
    color: red;
    cursor: pointer;
}

.language:hover .langOption {
    color: #9497f8;
}

.langOption {
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    color: #dfdfd6;
}

.link {
    user-select: none;
}
</style>