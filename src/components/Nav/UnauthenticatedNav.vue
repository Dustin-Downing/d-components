<template lang="html">
  <v-toolbar class="elevation-0">
    <v-flex xs10 offset-xs1>
      <v-img
        :src="require('@/assets/images/enzyme-logo-purple.svg')"
        class="my-3 logo"
        contain
        height="32"
      ></v-img>
    </v-flex>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import { VToolbar, VFlex, VImg, VSpacer } from 'vuetify/lib'

export default {
  name: 'UnauthenticatedNav',
  components: { VToolbar, VFlex, VImg, VSpacer }
}
</script>

<style lang="scss">
.theme--light.v-toolbar {
  background-color: #000;
  padding-top: 20px;
}
.v-toolbar__content {
  padding: 20px 120px;
}
</style>
