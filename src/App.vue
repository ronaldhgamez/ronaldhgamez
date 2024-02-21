<template>

  <nav-header></nav-header>
  
  <!-- <router-view></router-view> -->
  <about-me id="home"></about-me>
  <home-tab id="projects"></home-tab>
  <SkillsView></SkillsView>
  <FooterView></FooterView>
  
</template>


<script lang="ts">

import NavHeader from './components/NavHeader.vue';
import AboutMe from './views/AboutMe.vue';
import HomeTab from './views/HomeTab.vue';
import FooterView from './views/FooterView.vue';
import SkillsView from './views/SkillsView.vue';


export default {
  name: 'App',
  components: { NavHeader, HomeTab, AboutMe, FooterView, SkillsView},
  data() {
    return {
      logoURL: 'https://github.com/ronaldhgamez/files-and-images/blob/main/logo/logoporfolio.png?raw=true',
      cv: 'https://drive.google.com/file/d/1pbjDCSSPL7v49Ip5UmD1YQBe2NjhK_ex/view?usp=sharing',
    }
  }
}
</script>