<template>
  <div id="app">
    <app-header></app-header>
    <div class="container blogbody">
      <div class="row">
        <div class="col-md-4 col-sm-4"><blog-card></blog-card></div>
        <div class="col-md-4 col-sm-4"><blog-card></blog-card></div>
        <div class="col-md-4 col-sm-4"><blog-card></blog-card></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.vue";
import BlogCard from "./components/blog-card.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    BlogCard,
  },
};
</script>

<style></style>
