<template>
  <div class="blog-card">
    <div class="card-image">
      <div class="ration-content">
        <img class="img" :src="data.image" alt="data.title" />
      </div>
    </div>
    <div class="card-content">
      <h1 class="card-title">
        {{ data.title }}
      </h1>
      <p class="card-summery">
        {{ data.summary }}
      </p>
      <a class="Continue" href="#">
        Continue reading
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.blog-card {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px;
  .card-image {
    position: relative;
    &::before {
      content: "";
      display: block;
      padding-top: 66.5%;
    }
    .ration-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
      border-radius: 8px;
    }
    .img {
      width: 100%;
      min-height: 100%;
    }
  }
  .card-content {
    padding: 5px;
    .card-title {
      font-size: 20px;
      color: #990099;
      font-weight: bold;
      padding: 10px 0;
    }
    .card-summery {
      color: #a39c9c;
      font-size: 18px;
    }
    .Continue {
      font-style: italic;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>
