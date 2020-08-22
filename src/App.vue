<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  margin: 0px;
}
</style>
