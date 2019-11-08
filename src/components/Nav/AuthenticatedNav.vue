<template lang="html">
  <v-toolbar class="elevation-0">
    <v-toolbar-title>
      <img :src="require('@/assets/images/enzyme-logo-purple.svg')" style="height: 40px; padding: 4px 0;">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        @click="logout"
        text
        flat
      >
        <span class="mr-2">Sign Out</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

import { VToolbar, VToolbarTitle, VSpacer, VToolbarItems, VBtn } from 'vuetify/lib'

export default {
  name: 'AuthenticatedNav',
  components: { VToolbar, VToolbarTitle, VSpacer, VToolbarItems, VBtn },
  props: {
    logout: Function
  }
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
