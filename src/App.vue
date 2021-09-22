<template>
  <div class="app">
    <vue-extend-layouts/>
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout';
export default {
  name: 'App',
  components: { VueExtendLayouts }
};
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    display: block;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .form-label {
    display: block;
    margin-bottom: 10px;
  }
  .form-input {
    border-radius: 0;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: 1px solid;
    height: 30px;
    padding: 5px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .main-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
