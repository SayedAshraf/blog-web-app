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
      <div class="text-center">
        <button
          type="button"
          class="btn"
          @click="loadmore"
          v-if="blogs && blogs.length < totalBlogs"
        >Load more
        </button>
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
      page: 1,
      totalBlogs: null,
    };
  },
  methods: {
    getBlogs(page) {
      axios
        .get(`http://localhost:3000/blogs?_page=${page}&_limit=6`)
        .then((res) => {
          //Concatinate blogs when press load more
          this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
          //get number of total blogs we have
          this.totalBlogs = res.headers["x-total-count"];
        });
    },
    //loard more functio increase paging by one and call get blog function
    loadmore() {
      this.page++;
      this.getBlogs(this.page);
    },
  },
  //when website mounted call get blogs function
  mounted() {
    this.getBlogs(this.page);
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: #990099 !important;
  border: 1px solid #990099;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-size: 18px;
  border: none;
  font-weight: bold;
  line-height: 1;
  margin: 50px 0;
  &:hover,
  &:focus {
    border: none;
    // background-color: #fff !important;
    // border: 1px solid #fff;
    // color: #990099;
  }
}
</style>
