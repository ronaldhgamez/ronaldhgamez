<template>
    <div class="navBarTranslations">
        <button type="button" class="button" aria-haspopup="true" aria-expanded="false" aria-label="Change language">
            <img 
                src="../assets/svg/Translate.svg"
                alt="translate svg" 
                width="24"
                height="24">
            <img
                src="../assets/svg/DownArrow.svg"
                alt="down arrow svg" 
                width="24" 
                height="24">
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
            selectedLang: localStorage.getItem('lang') || 'en',
            langOptions: {
                en: 'English',
                sp: 'Español',
                ja: '日本語'
            }
        };
    },
    mounted() {
        this.changeLanguage(this.selectedLang);
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
            localStorage.setItem('lang', lang);
            this.$forceUpdate();
        }
    }
}
</script>


<style>

.navBarTranslations {
    display: flex;
    align-items: center;
    margin-right: 11px;
}

.selectedLanguage {
    color: var(--text-color);
}

.button {
    margin-top: 4px;
    width: 70px;
    background-color: transparent;
    filter: invert();
    border: none;
    transition: opacity 0.3s ease-in-out;
}

.button:hover {
    opacity: 0.7;
}

.menuLanguages {
    /* center menu items with flex */
    display: none;
    justify-content: center;
    align-items: center;
    border: solid 1px rgb(128, 128, 128, 0.1);
    background: var(--theme-color);
    width: 140px;
    height: 126px;
    border-radius: 5px;
}

.floatingMenu {
    z-index: 3;
    position: absolute;
    top: 50px;
    right: 80px;
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
    font-size: 18px;
    background-image: linear-gradient(to right, #68aef5, #de63e7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.language {
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 28px;
    padding: 0 12px;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
}

.language:hover .langOption {
    color: #b0bbc7;
}

.langOption {
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    color: var(--text-color);
    opacity: 0.7;
}

.link {
    user-select: none;
}
</style>