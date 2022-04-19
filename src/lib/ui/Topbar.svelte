<script lang="ts">
  import { Theme, themeListener } from "../ts/theme";

  let darkmode = false;
  let curTheme: Theme;

  themeListener((theme, dark) => {
    darkmode = dark;
    curTheme = theme;
  });
</script>

<div class="topbar" class:light={!darkmode}>
  <h1 class="header">
    <span id="headerbarhref" class="href">
      <span class="blue">v</span>TD<span class="gray">x</span>
    </span>
  </h1>
  <div class="page-display">
    <h3>
      <span id="page-disp">page</span>
      <span id="page-dot">●</span>
    </h3>
    <span id="pages" />
    <span id="actions" />
  </div>
</div>

<style scoped>
  div.topbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #0003;
  }

  div.topbar.light {
    background-color: #0002;
  }

  div.topbar h1.header {
    margin-top: 8px;
    margin-left: 10px;
  }

  div.topbar div.page-display {
    position: absolute;
    top: 6px;
    right: 20px;
    display: inline-block;
  }

  div.topbar div.page-display h3 {
    display: inline-block;
    margin-right: 10px;
    padding-right: 0px;
  }

  div.topbar div.page-display * {
    vertical-align: middle;
  }

  div.topbar #page-dot {
    margin-right: 5px;
    transition: color 0.1s;
  }
  div.topbar button.option * {
    vertical-align: middle;
    transition: color 0.1s;
  }

  div.topbar button.option span {
    transition: color 0.1s, opacity 0.3s, visibility 0.3s;
  }

  div.topbar #actions,
  div.topbar #pages {
    border-left: var(--sidebar-bg) 3px solid;
    padding-left: 10px;
    height: 25px;
  }

  div.topbar #actions button {
    margin-right: 0 !important;
  }
</style>
