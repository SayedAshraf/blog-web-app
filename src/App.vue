<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <div class="row" v-if="blogs">
        <blog-card
          class="col-md-4 col-sm-6 col-xs-12"
          v-for="(blog, index) in blogs"
          :key="index"
          :data="blog"
        ></blog-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.vue";
import BlogCard from "./components/blog-card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    AppHeader,
    BlogCard,
  },
  data() {
    return {
      blogs: null,
    };
  },
  mounted() {
    axios.get("http://localhost:3000/blogs").then((res) => {
      this.blogs = res.data;
    });
  },
};
</script>

<style></style>
