<template>
    <ion-label>
        <ion-skeleton-text :animated="true" ></ion-skeleton-text>
    </ion-label>
</template>
  
  <script setup>
  import { defineProps } from 'vue';
  defineProps({
        height: {
          type: String,
        },
        width: {
          type: String,
        },
        borderRadius: {
          type: String,
        },
})
</script>

<style scoped>
  ion-skeleton-text {
    height: v-bind(height);
    width: v-bind(width);
    --border-radius : v-bind(borderRadius);

    /* @keyframes bgAnimate {
      0% {
        background-position: 50% 0;
      }
      100% {
        background-position:-150% 0 ;
      } 
    } */
    /* background-image: linear-gradient(
      to right,
      #d6d7d8 0%,
      #e2e3e4 10%,
      #d6d7d8 20%,
      #d5d7d8 100%
    );
    background-size: 20% 100%;
    box-shadow: 0 4px 6px -1px rgba(0  0 0  0.1),0 2px 4px -2px rgba(0  0 0  0.1);
    animation: bgAnimate 1.2s linear infinite; */

    /* --border-radius: 9999px; */
    --background: rgba(188, 0, 255, 0.065);
    --background-rgb: 188, 0, 255;
  }
</style>
