<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>

        <ion-title>مشخصات</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card v-if="loaded">
        <ion-card-header>
          <ion-card-title>مشخصات</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form novalidate @submit.prevent="updateProfile">
            <ion-list>
              <ion-item>
                <ion-label position="stacked" color="primary">جنسیت</ion-label>
                <ion-select
                  v-model="gender"
                  name="gender"
                  placeholder="Select One"
                  required
                >
                  <ion-select-option value="1">زن</ion-select-option>
                  <ion-select-option value="0">مرد</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  >روز تولد</ion-label
                >
                <ion-datetime
                  v-model="dob"
                  name="dob"
                  presentation="date"
                  required
                ></ion-datetime>
              </ion-item>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  >وزن (به کیلوگرم)</ion-label
                >
                <ion-input
                  v-model="weight"
                  name="weight"
                  type="number"
                  required
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  > ارتفاع (بر حسب سانتی متر)</ion-label
                >
                <ion-input
                  v-model="height"
                  name="height"
                  type="number"
                  required
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked" color="primary"
                  >سطح فعالیت</ion-label
                >
                <ion-select
                  v-model="activity"
                  name="activity"
                  placeholder="Select One"
                  required
                >
                  <ion-select-option value="0">کم فعال</ion-select-option>
                  <ion-select-option value="1" >کمی فعال</ion-select-option>
                  <ion-select-option value="2">نسبتا فعال</ion-select-option>
                  <ion-select-option value="3">خیلی فعال</ion-select-option>
                  <ion-select-option value="4">فوق العاده فعال</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-item>
                <ion-label position="stacked" color="primary">هدف</ion-label>
                <ion-select
                  v-model="goal"
                  name="goal"
                  placeholder="Select One"
                  required
                >
                  <ion-select-option value="0">کاهش چربی</ion-select-option>
                  <ion-select-option value="1">عضله سازی</ion-select-option>
                  <ion-select-option value="2">وزن را حفظ کنید</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>

            <ion-row responsive-sm>
              <ion-col>
                <ion-button type="submit" expand="block"
                  >کالری مورد نیاز را به روز کنید</ion-button
                >
              </ion-col>
            </ion-row>
          </form>

          <ion-item-divider>
            <ion-label>
              منطقه خطر
            </ion-label>
          </ion-item-divider>

          <ion-row responsive-sm>
            <ion-col>
              <ion-button color="danger" expand="block" @click="presentAlertDeleteAccount()">حذف حساب کاربری</ion-button>
            </ion-col>
          </ion-row>

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
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCol,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonItemDivider,
  loadingController,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";

//import { updateUserData, getUserData, deleteAccount } from "@/service/UserService";
import { showToast } from "@/utils";

export default defineComponent({
  name: "Profile-user",
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
    IonInput,
    IonItem,
    IonList,
    IonButton,
    IonButtons,
    IonBackButton,
    IonCol,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonItemDivider
  },
  data() {
    return {
      loaded: false,
      gender: null as string | null,
      dob: null as string | null,
      weight: null as number | null,
      height: null as number | null,
      activity: null as string | null,
      goal: null as string | null,
    };
  },
  async created() {
    await this.showLoading();
    // const userData = await getUserData();

    // if (userData != null) {
    //   this.gender = userData.details.gender.toString();
    //   this.dob = userData.details.birthday.substring(0,10);
    //   this.weight = userData.details.weight;
    //   this.height = userData.details.height;
    //   this.activity = userData.details.activity.toString();
    //   this.goal = userData.details.goal.toString();
    // }

    loadingController.dismiss();
    this.loaded = true;
  },
  methods: {
    async showLoading() {
      const loading = await loadingController.create({
        message: "لطفا صبر کنید...",
      });

      await loading.present();
    },
    async presentAlertDeleteAccount() {
      const alert = await alertController
        .create({
          header: 'حذف حساب کاربری؟',
          message: "آیا واقعاً می خواهید حساب خود را حذف کنید؟ این قابل واگرد نیست.",
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'بله، حذف اکانت!',
              handler: async () => {
                
                // const deleted = await deleteAccount();

                // if (deleted) {
                //   this.$router.push("/login");
                //   showToast('top',"اکانت حذف شد!");
                // } else {
                //   showToast('top',"اکانت حذف نشد.");
                // }
              },
            },
          ],
        });
      return alert.present();
    },
    async updateProfile() {
      if (this.gender !== null && this.dob != null && this.weight != null && this.height != null && this.activity != null && this.goal != null) {
        await this.showLoading();

        // let updateSuccessful = await updateUserData({
        //   gender: parseInt(this.gender),
        //   dob: this.dob,
        //   weight: this.weight,
        //   height: this.height,
        //   activity: parseInt(this.activity),
        //   goal: parseInt(this.goal),
        //   language: "en",
        // });

        loadingController.dismiss();
        // if (updateSuccessful) {
        //   showToast('top',"بروز رسانی موفق!");
        // } else {
        //   showToast('top',"به روز رسانی نا موفق بود!");
        // }
      } else {
          showToast('top',"به روز رسانی نا موفق بود!");
      } 
    },
  },
});
</script>
