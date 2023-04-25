<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header >
        <ion-toolbar></ion-toolbar>
      </ion-header>
        <ion-card-header style="padding:0px">
          <ion-searchbar style="padding: 20px 0 0 0;" placeholder="جستجوی کد حفاری"></ion-searchbar>
        </ion-card-header>
        <cartable-vue></cartable-vue>
   
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent  } from "vue";
import { IonPage, IonContent, IonHeader, IonToolbar,
//IonAccordion,IonAccordionGroup 
} from "@ionic/vue";
import CartableVue from "@/components/Cartable.vue";
export default defineComponent({
  name: "CarTable",
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,

    //IonSearchbar,
    //IonAccordion,
    //IonAccordionGroup,
    CartableVue
  
  }
});
</script>

<style scoped>
.cardMain {
  border-radius: 20px;
  height: 400px; 
  /* align-items: center; */
   
  /* display: flex;  */
   
   /* padding: 5%; */
   margin: 1%;
}


  /* ion-toolbar {
    --opacity: .5
  }
  ion-infinite-scroll{
    
    --background: #19422d;
    --color: rgb(133, 14, 14);

    /* --border-color: #f24aec;
    --border-width: 4px 0;
    --border-style: double; */
  /* }
  ion-infinite-scroll-content{
    
    --background: #19422d;
    --color: rgb(14, 133, 34);
  }
  ion-list{
    --background: #19422d;
    --color: rgb(14, 133, 34);
  }  */
</style>









