<template>
  <div id="app">
    <div class="ui secondary pointing menu">
      <router-link to="/"><a class="item">Home</a></router-link>
      <router-link to="/draganddrop"><a class="item">Drag and Drop</a></router-link>
      <router-link to="/autocomplete"><a class="item">Autocomplete</a></router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>