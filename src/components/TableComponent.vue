<template>
    <ion-row style="border-bottom: groove;">
        <ion-title>مدت زمان اجرای عملیات حفاری</ion-title>
    </ion-row>
     
   
   <ion-row style="border-bottom: groove;">
    <ion-col col-4>
      <ion-label >فاز</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >تاریخ شروع</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >تاریخ اتمام</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >مدت فاز (روز)</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >توضیحات </ion-label>
    </ion-col>
  </ion-row>
  <ion-row style="border-bottom: groove;">
    <ion-col col-4>
      <ion-label >1</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >1401/09/09</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >1401/09/29</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >20</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >20</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >توضیحات</ion-label>
    </ion-col>
  </ion-row>
  <ion-row style="border-bottom: groove;">
    <ion-col col-4>
      <ion-label >2</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >1401/09/09</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >1401/09/29</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >20</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >20</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >توضیحات</ion-label>
    </ion-col>
  </ion-row>
  <ion-row >
    <ion-col col-4>
      <ion-label >3</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >1401/09/09</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >1401/09/29</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >20</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >20</ion-label>
    </ion-col>
    <ion-col col-4>
      <ion-label >توضیحات</ion-label>
    </ion-col>
  </ion-row>
</template>
  
  <script lang="ts">
    import { IonLabel } from '@ionic/vue';
   
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonLabel },
      setup() {
        return {  document }
      }
    });
  </script>
  
  <style scoped>
ion-title.title-large {
    color: #bf00fe;
    font-size: 9px;

  }

  ion-title {
    --color: #000;
    font-size: 12px;
    margin: -6px 0 10px 0;
  }

  ion-toolbar {
    --background: #c897d8;
  }
  </style>