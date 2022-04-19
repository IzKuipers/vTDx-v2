<script lang="ts">
  import { init } from "./lib/ts/init";
  import Content from "./lib/ui/Content.svelte";
  import Sidebar from "./lib/ui/Sidebar.svelte";
  import Topbar from "./lib/ui/Topbar.svelte";

  init();
</script>

<div class="content">
  <Sidebar />
  <Topbar />
  <Content />
</div>

<style scoped>
  div.content {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #232936;
  }
</style>
