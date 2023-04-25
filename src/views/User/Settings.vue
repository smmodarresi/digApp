<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>

        <ion-title>تنظیمات</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>تنظیمات</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
              <ion-item-divider>
                <ion-label>تنظیمات تمرین</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>حالت آموزش پیشرفته</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('advancedTrainigMode', $event.target.checked)"
                    :checked="getSetting('advancedTrainigMode')"
                ></ion-toggle>
              </ion-item>
              <ion-item-divider>
                <ion-label>تنظیمات نمای کلی</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>کارت مرور کالری</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('showCard1', $event.target.checked)"
                    :checked="getSetting('showCard1')"
                ></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-label>کارت مصرف آب</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('showCard2', $event.target.checked)"
                    :checked="getSetting('showCard2')"
                ></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-label>کارت BMI</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('showCard3', $event.target.checked)"
                    :checked="getSetting('showCard3')"
                ></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-label>کارت خلاصه تمرین ماهانه</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('showCard4', $event.target.checked)"
                    :checked="getSetting('showCard4')"
                ></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-label>کارت خلاصه وزن ماهانه</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('showCard5', $event.target.checked)"
                    :checked="getSetting('showCard5')"
                ></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-label>کارت سوابق شخصی</ion-label>
                <ion-toggle 
                    slot="start"
                    @ionChange="updateSetting('showCard6', $event.target.checked)"
                    :checked="getSetting('showCard6')"
                ></ion-toggle>
              </ion-item>
            </ion-list>
            <ion-item-divider>
                <ion-label>فعال کردن اعلان ها</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>یادآوری ردیابی وزن هفتگی</ion-label>
                <ion-toggle slot="start"
                    @ionChange="updateSetting('weightTrackingReminder', $event.target.checked)"
                    :checked="getSetting('weightTrackingReminder')"
                ></ion-toggle>
              </ion-item>

           
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonList,
  IonButtons,
  IonBackButton,
  IonItemDivider,
  IonToggle,
  toastController,
  loadingController,
} from "@ionic/vue";
import { defineComponent } from "vue";

//import { getUserData, updateUserSetting } from "@/service/UserService";
//import {  set } from "@/helper/storage";

export default defineComponent({
  name: "Settings-user",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonList,
    IonButtons,
    IonBackButton,
    IonItemDivider,
    IonToggle
  },
  data() {
    return {
      settings: null,
    };
  },
  async created() {
    // const userData = await getUserData();
    
    // if (userData != null && userData.details != null) {
    //     this.settings = JSON.parse(userData.details.settings);
    // }
  },
  methods: {
    async showToast(msg: string) {
      const toast = await toastController.create({
        message: msg,
        duration: 2000,
      });
      toast.present();
    },
    async showLoading() {
      const loading = await loadingController.create({
        message: "لطفا صبر کنید...",
      });

      await loading.present();
    },
    getSetting(key: string) {
        if (this.settings != null) {
            if (key in this.settings) {
                var returnVal = this.settings[key];
                if (returnVal === true) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        return false;
    },
    // async updateSetting(key: string, value: string) {
        // var data = { 
        //     "key": key, 
        //     "value": value 
        // };
        // const result = await updateUserSetting(data);
        // // set(key, value);
        // if (!result) {
        //     this.showToast('تنظیمات به‌روزرسانی نشد')
        // }
    // }
  },
});
</script>
