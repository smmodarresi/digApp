<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
// import {
//   StatusBar,
//   StatusBarBackgroundColorOptions,
// } from "@capacitor/status-bar";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  // mounted() {
  //   this.setBackgroundColor();
  // },
  // setup() {
  //   const setBackgroundColor = async () => {
  //     const option: StatusBarBackgroundColorOptions = {
  //       color: "#00000",
  //     };
  //     StatusBar.setBackgroundColor(option);
  //   };
  //   return {
  //     setBackgroundColor,
  //   };
  // },
});
</script>
