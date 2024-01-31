<template>

  <header class="container fixed">
    <!-- Title and logo -->
    <router-link class="title" to="/home">
      <img id="logo" width="60" height="60" alt="Ronald's Logo" :src="logoURL" >
      <a><span>| Ronald</span>hgamez<span> |</span></a>
    </router-link>

    <!-- [Header displayed for web users] -->
    <div class="webHeaderContent">
      <nav class="navBarMenu">
        <a class="navOption" href="#home"><span> {{ $t("appView.home") }} </span></a>
        <a class="navOption" href="#projects"><span> {{ $t("appView.projects") }} </span></a>
        <a class="navOption" target="_blank" :href="cv"><span> {{ $t("appView.resume") }} </span></a>
        <!-- <router-link class="navOption" to="/test"><span> Test </span></router-link> -->
      </nav>
      <!-- Language Selection -->
      <language-selection-option></language-selection-option>
      <!-- Theme Mode Selection -->
      <toggle-buttom-theme></toggle-buttom-theme>
    </div>

    <!-- [Header displayed for mobile] -->
    <div class="mobileHeaderContent">
      <!-- Hamburger menu -->
      <div class="navBarHamburger">

        <input type="checkbox" id="hamburgerCheckbox">
        <label class="checkboxICons" for="hamburgerCheckbox">
          <i class="menuIcon material-icons">menu</i> 
          <i class="closeIcon material-icons">close</i>
        </label>
        
        <!-- Floating menu -->
        <div class="mobileNavMenu">
          <nav class="mobileNavOptions">
            <router-link class="navOption" to="/home"><span> {{ $t("appView.home") }} </span></router-link>
            <router-link class="navOption" to="/projects"><span> {{ $t("appView.projects") }} </span></router-link>
            <a class="navOption" target="_blank" :href="cv"><span> {{ $t("appView.resume") }} </span></a>
          </nav>

          <div id="appereanceDiv">
            <span class="navOption">Theme
              <toggle-buttom-theme></toggle-buttom-theme>
            </span>
          </div>

          <!-- Contact Icons -->
          <div class="iconContainer">
            <!-- Linkedin Icon Link -->
            <a class="contactIcons" href="https://www.linkedin.com/in/ronaldhgamez/" aria-label="linkedin" target="_blank" rel="noopener">
              <img 
                alt="Linkedin Link" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/c634ec3e23d28e41ffe0a060bcfdd32855894947/svg/linkedin.svg"
              />
            </a>  
            <!-- Github Icon Link -->
            <a class="contactIcons" href="https://github.com/ronaldhgamez" aria-label="github" target="_blank" rel="noopener">
              <img 
                alt="GitHub Link" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/c634ec3e23d28e41ffe0a060bcfdd32855894947/svg/github.svg"
              />
            </a>
            
            <a class="color-icon" href="mailto:ronaldhgamez@gmail.com">
              <img
                alt="Gmail icon contact" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/9db667a770ed44caed4542851cf3c46d9851f4cc/svg/gmail.svg"
              />
            </a>

            <!-- WhatsApp Icon Link -->
            <a class="color-icon" href="https://wa.me/50664178996" aria-label="whatsapp" target="_blank" rel="noopener">
              <img 
                alt="Chat on WhatsApp" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/c634ec3e23d28e41ffe0a060bcfdd32855894947/svg/whatsapp.svg"
              />
            </a>
          </div> <!-- End Contact Icons -->
        </div> <!-- End Floating menu -->
      </div> <!-- End Hamburger menu -->
    </div>
  </header>
  
  <!-- <router-view></router-view> -->
  <about-me id="home"></about-me>
  <home-tab id="projects"></home-tab>
  <SkillsView></SkillsView>
  <FooterView></FooterView>
  
</template>


<script lang="ts">
import LanguageSelectionOption from './components/LanguageSelectionOption.vue';
import ToggleButtomTheme from './components/ToggleButtomTheme.vue';
import AboutMe from './views/AboutMe.vue';
import HomeTab from './views/HomeTab.vue';
import FooterView from './views/FooterView.vue';
import SkillsView from './views/SkillsView.vue';

export default {
  name: 'App',
  components: { ToggleButtomTheme, LanguageSelectionOption, HomeTab, AboutMe, FooterView, SkillsView},
  data() {
    return {
      logoURL: 'https://github.com/ronaldhgamez/files-and-images/blob/main/logo/logoporfolio.png?raw=true',
      cv: 'https://drive.google.com/file/d/1pbjDCSSPL7v49Ip5UmD1YQBe2NjhK_ex/view?usp=sharing',
    }
  }
}
</script>