<template>
   <ion-searchbar style="padding: 20px 0 0 0;" placeholder="Custom Placeholder"></ion-searchbar>
</template>
  
  
  <style scoped>
    ion-searchbar.custom {
    --background: #19422d;
    --color: #fff;
    --placeholder-color: #fff;
    --icon-color: #fff;
    --clear-button-color: #fff;

    --border-radius: 4px;
  }

  ion-searchbar.ios.custom {
    --cancel-button-color: #19422d;
  }

  ion-searchbar.md.custom {
    --cancel-button-color: #fff;
  }
    /* ion-toolbar {
      --background: #194234;
      --color: white;
  
      --border-color: #f24aec;
      --border-width: 4px 0;
      --border-style: double;
  
      --min-height: 20px;
      --padding-top: 20px;
      --padding-bottom: 20px;
    } */
  </style>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import {
    
  } from "ionicons/icons";
  import {
   
  } from "@ionic/vue";
  
  export default defineComponent({
    name: "MainHeader",
    components: {
    
    },
    data() {
      return {
      
      };
    },
    methods: {
  
        
  
    },
    
     
    
       
  });
  </script>
  
