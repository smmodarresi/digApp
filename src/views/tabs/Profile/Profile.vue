<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar></ion-toolbar>
      </ion-header>

             <ion-card color="light">
         <div class="img-wrapper ion-text-center">
            <img src="/images/profile1.jpg"  style="border-radius: 30%;width: 150px;"/> 
           <!-- <ion-button color="light">
             <ion-icon slot="icon-only" name="camera-outline" color="medium">
             </ion-icon>
           </ion-button> -->
         </div>
         <ion-card-content class="ion-text-center">
           <h2>سید محمد مدرسی</h2>
           <ion-text color="medium">
             <div style="display: flex;" class="ion-justify-content-center">
               <ion-icon name="location-outline" color="medium">
               </ion-icon>
               <p>09103373496</p>
             </div>
           </ion-text>
           <ion-grid>
             <ion-row>
               <ion-col><ion-lable>وضعیت :</ion-lable></ion-col>
               <ion-col><ion-text color="primary">فعال</ion-text></ion-col>
             </ion-row>
             <ion-row>
              <ion-col><ion-lable>نقش :</ion-lable></ion-col>
               <ion-col><ion-text color="medium">شهروند</ion-text></ion-col>
             </ion-row>
            </ion-grid>
         </ion-card-content>
       </ion-card>
      
       
    </ion-content>
  </ion-page>
</template>

<style>
 ion-card {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  overflow: visible;
  margin: 16px 0 24px;
  position: relative;
  padding-top: 15px;

  
    /* backdrop-filter: saturate(50%) blur(8px) !important; */
    background: rgba(255, 255, 255, 0.445); 

  
  
  }

  .action-buttons{

   text-align: center;
}
.container {
  margin: 2mm;
  font-weight: bold;
 /*  padding-top: 2px; */
    /* --background: #f9b801; */
    width: 80%;
  }
  .card{
  border-radius: 25px;
}
  code {
    white-space: pre-wrap;
  }
</style>

<script lang="ts">
 import { defineComponent } from "vue";
//  import  ForgetPassword  from "../components/ForgetPassword.vue";
//  import  Login  from "./Unauthenticated/Login.vue";
import { IonPage, IonContent, IonHeader, IonToolbar } from "@ionic/vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
  
  }
  
});
</script>

