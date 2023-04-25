<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <main-header></main-header>
      <ion-tabs>
       
        
        <ion-router-outlet ></ion-router-outlet>

        <ion-tab-bar slot="bottom" color="new">
          <ion-tab-button tab="Profile" @click="redirectToProfile">
            <ion-icon :icon="storefrontOutline" />
            <ion-label>پروفایل</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Monitoring" @click="redirectToMonitoring">
            <ion-icon :icon="documentTextOutline" />
            <ion-label> نظارت </ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Cartable" @click="redirectToCartable">
            <ion-icon :icon="pieChartOutline" />
            <ion-label>کارتابل</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="FollowUp" @click="redirectToFollowUp" >
            <ion-icon :icon="cashOutline" />
            <ion-label>پیگیری</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="Dashboard"   @click="redirectToDashBoard">
            <ion-icon  />
            <ion-label>داشبورد</ion-label>
          </ion-tab-button>

         
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonContent,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  ellipse,
  square,
  triangle,
  storefrontOutline,
  documentTextOutline,
  pieChartOutline,
  cashOutline,
  briefcaseOutline,
} from "ionicons/icons";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonContent,
    IonRouterOutlet,
    MainHeader,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      storefrontOutline,
      documentTextOutline,
      pieChartOutline,
      cashOutline,
      briefcaseOutline,
    };
  },
  methods: {
   
   redirectToDashBoard() {
   this.$router.push("./DashBoard");
 },
 redirectToFollowUp() {
   this.$router.push("./FollowUp");
 },
 redirectToCartable() {
   this.$router.push("./Cartable");
 },
 redirectToMonitoring() {
   this.$router.push("./Monitoring");
 },
 redirectToProfile() {
   this.$router.push("./Profile");
 },
}
});
</script>
<style scoped>
ion-tab-bar {
  border: 2px solid var(--ion-color-new);
  border-bottom: 0px;
  margin: 0px 2px;
  border-radius: 10px 10px 0px 0px;
}


ion-tab-bar .tab-selected {
  background: var(--ion-color-new3-tint);
  border-radius: 10px 10px 10px 10px;
}
</style>
