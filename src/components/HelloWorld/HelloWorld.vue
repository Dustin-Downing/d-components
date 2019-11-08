<template>
  <div class="hello">
    <h1>I'm alive</h1>
    <v-btn text>Normal</v-btn>
  </div>
</template>

<script>
import { VBtn } from 'vuetify/lib'

export default {
  name: 'HelloWorld',
  components: {VBtn}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  color: #ff0000;
}
</style>
