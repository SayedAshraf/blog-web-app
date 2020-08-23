<template>
  <div class="header">
    <slot>
      <h1>Blog</h1>
    </slot>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/header-bg.jpg");
  background-size: cover;
  position: relative;
  z-index: 5;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.95;
    //Generate Gradiant from ColorZila Website //
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#330033+0,333366+100 */
    background: #330033; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #330033 0%,
      #333366 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #330033 0%,
      #333366 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #330033 0%,
      #333366 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330033', endColorstr='#333366',GradientType=0 ); /* IE6-9 */
  }
  h1 {
    margin: 0;
    font-size: 60px;
    font-weight: 500;
    color: #fff;
    z-index: 10;
  }
}
</style>
