<script lang="ts">
  import { sideBarCollapsed } from "../ts/env";
  import { Theme, themeListener } from "../ts/theme";

  let collapsed = false;

  sideBarCollapsed.subscribe((v) => (collapsed = v));

  let darkmode = false;
  let curTheme: Theme;

  themeListener((theme, dark) => {
    darkmode = dark;
    curTheme = theme;
  });
</script>

<div class="sidebar" class:collapsed class:darkmode />

<style scoped>
  div.sidebar {
    position: fixed;
    top: 70px;
    left: 0px;
    width: 280px;
    height: calc(100vh - 70px);
    padding: 25px;
    overflow-x: hidden;
    word-wrap: none;
    transition: width 0.3s, padding 0.3s;
    box-sizing: border-box;
  }

  div.sidebar.collapsed {
    padding: 10px;
    width: 60px;
  }

  div.sidebar.darkmode {
    background-color: #ffffff04;
  }

  div.sidebar:not(.dark) {
    background-color: #00000004;
  }
</style>
