<template>
  <div class="singleblog" v-if="blog">
    <!-- Header Component and passing blog title -->
    <app-header class="header">
      <router-link class="back-btn" to="/">back</router-link>
      <slot>
        <h1>{{ blog.title }}</h1>
      </slot>
    </app-header>
    <!-- Blog content -->
    <div class="container blog-content">
      <div class="row justify-content-center">
        <div class="blog-body col-md-12 col-sm-12">
          <div class="blog-image">
            <img class="img" :src="blog.image" alt="data.title" />
          </div>
          <div class="card-body">
            <h1 class="card-title">
              {{ blog.title }}
            </h1>
            <p class="card-content">
              {{ blog.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/app-header.vue";
import axios from "axios";
export default {
  name: "SingleBlog",
  components: {
    AppHeader,
  },
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/blogs/${this.$route.params.id}`)
      .then((res) => {
        // console.log(res.data);
        this.blog = res.data;
      });
    // console.log(this.$route.params.id);
  },
};
</script>
<style lang="scss" scoped>
.blog-content {
  margin: 70px auto;
  .blog-body {
    justify-content: center;
    .blog-image {
      .img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .card-body {
      padding: 15px 0;
      .card-title {
        font-size: 38px;
        color: #990099;
      }
      .card-content {
        color: #a39c9c;
        font-size: 30px;
        font-style: italic;
      }
    }
  }
}
.header {
  .back-btn {
    position: absolute;
    z-index: 70;
    left: 20px;
    top: 10px;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    border-radius: 5px;
    padding: 8px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    line-height: 1;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
