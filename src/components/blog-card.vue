<template>
  <div class="blog-card">
    <div class="card-image">
      <img class="img" src="../assets/blog-image.jpg" alt="card title" />
    </div>
    <div class="card-content">
      <h1 class="card-title">
        Card Title
      </h1>
      <p class="card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum,
        corporis, doloremque fugit et quaerat voluptatem debitis sequi tempora
        atque sint magni ab culpa, quasi ipsam illo non. Tempore, ut.
      </p>
      <a href="#">
        Continue reading
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.blog-card {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px;
  .card-image {
    .img {
      width: 100%;
      border-radius: 8px;
    }
  }
}
</style>
