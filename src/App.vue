<template>

  <nav-header></nav-header>
  
  <!-- <router-view></router-view> -->
  <home-view id="home"></home-view>
  <projects-view id="projects"></projects-view>
  <SkillsView></SkillsView>
  <FooterView></FooterView>
  
</template>


<script lang="ts">

import '@fontsource/elsie-swash-caps';
import '@fontsource-variable/jost';
import NavHeader from './components/NavHeader.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import FooterView from './views/FooterView.vue';
import SkillsView from './views/SkillsView.vue';


export default {
  name: 'App',
  components: { NavHeader, HomeView, ProjectsView, FooterView, SkillsView},
  data() {
    return {
      logoURL: 'https://github.com/ronaldhgamez/files-and-images/blob/main/logo/logoporfolio.png?raw=true',
      cv: 'https://drive.google.com/file/d/1pbjDCSSPL7v49Ip5UmD1YQBe2NjhK_ex/view?usp=sharing',
    }
  }
}
</script>