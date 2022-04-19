<script lang="ts">
  import { sideBarCollapsed } from "../ts/env";

  let collapsed = false;

  sideBarCollapsed.subscribe((v) => (collapsed = v));
</script>

<div class="sidebar" class:collapsed />

<style scoped>
  div.sidebar {
    position: fixed;
    top: 70px;
    left: 0px;
    width: 280px;
    height: calc(100vh - 70px);
    background: #ffffff04;
    padding: 25px;
    overflow-x: hidden;
    word-wrap: none;
    transition: width 0.3s, padding 0.3s;
    box-sizing: border-box;
  }

  div.sidebar.collapsed {
      padding:10px;
      width:60px;
  }
</style>
